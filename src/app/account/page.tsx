"use client";
import MintSongButton from "@/components/MintSongButton/MintSongButton";
import OButton from "@/components/OButton/OButton";
import SongListItemMusicNFT from "@/components/SongList/SongListItemMusicNFT";
import SongListItemSpinamp from "@/components/SongList/SongListItemSpinamp";
import { AppWalletContext } from "@/context/AppWallet";
import { MusicNFTAddr } from "@/env";
import { GET_MY_MUSIC } from "@/graph-ql/queries/octav3/GET_MY_MUSIC/getAllMusic";
import { GetMyMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";
import { GET_MY_MUSIC as GET_MY_MUSIC_SPINAMP } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC/getMyMusic";
import { Metadata } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC/types";
import { GetMyMusicQuery as GetMyMusicQuerySpinamp } from "@/graph-ql/queries/spinamp/__generated__/graphql";
import { deToHttps, fetchDe } from "@/services/de-storage/fetchDe";
import { monetize } from "@/services/smart-contract/monetize";
import { MusicPlayerSub } from "@/subs/MusicPlayerSub";
import { PremToggleSub } from "@/subs/PremiumToggleSub";
import { USDCxWalletBalanceSub } from "@/subs/WalletBalanceSub";
import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { usePublicClient, useWalletClient } from "wagmi";

const Account = () => {
  const [isPrem, setIsPrem] = useState(false);

  useEffect(() => {
    PremToggleSub.subscribe(setIsPrem);
  }, []);
  const { data: walletClient } = useWalletClient();
  const appWallet = useContext(AppWalletContext);
  const publicClient = usePublicClient();
  const handlePlaySongSpinamp = async (
    musicNft: NonNullable<
      NonNullable<GetMyMusicQuerySpinamp["allNfts"]>["nodes"][0]
    >
  ) => {
    const metadata = musicNft?.metadata as Metadata;
    if (!metadata) return;
    if (
      musicNft?.contractAddress &&
      musicNft?.tokenId &&
      metadata.animation_url &&
      walletClient
    ) {
      MusicPlayerSub.next({
        artist: metadata.artist ?? ".....",
        artworkUrl: deToHttps(metadata.artwork?.uri ?? "TODO"),
        contractAddr: musicNft?.contractAddress ?? "",
        musicUrl: deToHttps(metadata.animation_url ?? ""),
        title: metadata.title ?? ".....",
        tokenId: musicNft?.tokenId ?? ".....",
        owner: walletClient.account.address,
      });
    }
  };
  const copy = () => {
    if (appWallet.wallet)
      navigator.clipboard.writeText(appWallet.wallet.address);
  };
  const handlePlaySong = async (
    musicNft: NonNullable<NonNullable<GetMyMusicQuery["musicTokens"]>[0]>
  ) => {
    const metadata = await fetchDe<Metadata>(musicNft.tokenUri);
    if (!metadata) return;
    if (musicNft?.id && metadata.animation_url && walletClient) {
      MusicPlayerSub.next({
        artist: metadata.artist ?? ".....",
        artworkUrl: deToHttps(metadata.artwork?.uri ?? "TODO"),
        contractAddr: MusicNFTAddr,
        musicUrl: deToHttps(metadata.animation_url ?? ""),
        title: metadata.title ?? ".....",
        tokenId: musicNft?.id ?? ".....",
        owner: walletClient.account.address,
      });
    }
  };

  const { data: myMusicSpinamp, refetch: refetchSpinamp } = useQuery(
    GET_MY_MUSIC_SPINAMP,
    {
      variables: {
        owner: "0x324A77ffee86A7ec082f8395f060bc4E94E60198",
      },
    }
  );

  const { data: myMusic, refetch } = useQuery(GET_MY_MUSIC, {
    variables: {
      owner: walletClient?.account.address.toLowerCase(),
    },
  });

  useEffect(() => {
    refetch();
    refetchSpinamp();
  }, [walletClient, refetchSpinamp, refetch]);

  const [balance, setBalance] = useState<[string, string]>();
  useEffect(() => {
    USDCxWalletBalanceSub.subscribe(setBalance);
  }, []);
  return (
    <div className="pb-4 pt-20 px-32 font-figtree">
      <div className="ml-2">
        <p className="font-bold text-2xl">Balance</p>
        <p className="text-xl">
          ${balance?.[0]} + ${balance?.[1]}
        </p>
        {/* TODO remove this copy btn and its related code if not required */}
        {/* <OButton btnType="fill" color="blue" onClick={copy}>
          Copy
        </OButton> */}
        <div className="flex mt-6">
          <p className="font-bold text-2xl">Your Music</p>
          <p className="text-2xl ml-auto">See all</p>
        </div>
      </div>

      <div className="flex flex-wrap pt-1 mb-4 items-start h-[60vh] overflow-y-scroll">
        {myMusicSpinamp?.allNfts?.nodes.map((e) => {
          if (!e) return <></>;
          return (
            <SongListItemSpinamp
              key={e.id}
              musicNft={e}
              onPlaySong={() => {
                handlePlaySongSpinamp(e);
              }}
              customBtn={
                <OButton
                  color="yellow"
                  btnType="fill"
                  className="w-full mt-2"
                  onClick={() => {
                    //TODO error
                    if (
                      !walletClient ||
                      !publicClient ||
                      !e.contractAddress ||
                      !e.tokenId ||
                      !e.tokenUri
                    )
                      return;
                    monetize(
                      e.contractAddress,
                      BigInt(e.tokenId),
                      e.tokenUri,
                      publicClient,
                      walletClient
                    );
                  }}
                >
                  List
                </OButton>
              }
            />
          );
        })}
        {myMusic?.musicTokens?.map((e) => {
          if (!e) return <></>;
          return (
            <SongListItemMusicNFT
              key={e.id}
              musicNft={e}
              onPlaySong={() => {
                handlePlaySong(e);
              }}
              customBtn={
                <OButton
                  color="blue"
                  btnType="fill"
                  onClick={() => {
                    //TODO error
                    if (!walletClient || !publicClient || !e.id || !e.tokenUri)
                      return;
                    monetize(
                      MusicNFTAddr,
                      BigInt(e.id),
                      e.tokenUri,
                      publicClient,
                      walletClient
                    );
                  }}
                >
                  List
                </OButton>
              }
            />
          );
        })}
      </div>
      <div className="w-20 fixed bottom-5 left-5">
        <MintSongButton color="gray" text="Mint" />
      </div>
    </div>
  );
};

export default Account;
