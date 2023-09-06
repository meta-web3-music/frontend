"use client";
import MintSongButton from "@/components/MintSongButton/MintSongButton";
import SongListItemMusicNFT from "@/components/SongList/SongListItemMusicNFT";
import SongListItemSpinamp from "@/components/SongList/SongListItemSpinamp";
import { AppWalletContext } from "@/context/AppWallet";
import { MusicNFTAddr } from "@/env";
import { GET_MY_LISTED_MUSIC } from "@/graph-ql/queries/octav3/GET_MY_LISTED_MUSIC/getMyListedMusic";
import { GET_MY_MUSIC } from "@/graph-ql/queries/octav3/GET_MY_MUSIC/getMyMusic";
import { GetMyMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";
import { GET_MY_MUSIC_LIMIT as GET_MY_MUSIC_SPINAMP } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC_LIMIT/getMyMusicLimit";
import { Metadata } from "@/graph-ql/queries/spinamp/types";
import { GetMyMusicQuery as GetMyMusicQuerySpinamp } from "@/graph-ql/queries/spinamp/__generated__/graphql";
import { deToHttps, fetchDe } from "@/services/de-storage/fetchDe";
import { monetize } from "@/services/smart-contract/monetize";
import { MusicPlayerSub } from "@/subs/MusicPlayerSub";
import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { usePublicClient, useWalletClient } from "wagmi";
import AccountListBtn from "./AccountListBtn";
import { unmonetize } from "@/services/smart-contract/unmonetize";
import { getBalance } from "@/services/backend/axios";
import Link from "next/link";

const Account = () => {
  const { data: walletClient } = useWalletClient();
  const appWallet = useContext(AppWalletContext);
  const publicClient = usePublicClient();
  const handlePlaySongSpinamp = async (
    musicNft: NonNullable<
      NonNullable<
        NonNullable<
          NonNullable<GetMyMusicQuerySpinamp["allProcessedTracks"]>["nodes"][0]
        >["nftsProcessedTracksByProcessedTrackId"]["nodes"][0]
      >["nftByNftId"]
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
        artworkUrl: deToHttps(metadata.artwork?.uri ?? metadata.image ?? "..."),
        contractAddr: musicNft?.contractAddress ?? "",
        musicUrl: deToHttps(metadata.animation_url ?? ""),
        title: metadata.title ?? ".....",
        tokenId: musicNft?.tokenId ?? ".....",
        owner: walletClient.account.address,
        disableStreaming: true,
      });
    }
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
        disableStreaming: true,
      });
    }
  };

  const { data: myMusicSpinamp, refetch: refetchSpinamp } =
    useQuery(GET_MY_MUSIC_SPINAMP);

  const { data: myMusic, refetch } = useQuery(GET_MY_MUSIC, {
    variables: {
      owner: walletClient?.account.address.toLowerCase(),
    },
  });
  const { data: myListedMusic } = useQuery(GET_MY_LISTED_MUSIC, {
    variables: {
      owner: walletClient?.account.address.toLowerCase(),
    },
  });
  useEffect(() => {
    refetch();
    refetchSpinamp({ owner: "0x26ef03a20aaeda8aafcee4e146dc6b328195947c" });
  }, [walletClient, refetchSpinamp, refetch]);

  const [inbuildBalance, setInbuildBalance] = useState<string>();
  const [browserBalance, setBrowserBalance] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      if (appWallet.wallet) {
        getBalance(appWallet.wallet.address)
          .then((e) => e.data.payload.toString())
          .then(setInbuildBalance);
      }

      if (walletClient) {
        getBalance(walletClient.account.address)
          .then((e) => e.data.payload.toString())
          .then(setBrowserBalance);
      }
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const truncate = (bal: string, upto: number) => {
    const [num, dec] = bal.split(".");
    if (!dec) return bal;
    const truncated_dec = dec.substring(0, upto);
    return num + "." + truncated_dec;
  };
  return (
    <div className="pb-4 pt-20 px-32 font-figtree">
      <div className="ml-2">
        <p className="font-bold text-2xl">Balance</p>
        <p className="text-xl">
          <span>${truncate(inbuildBalance ?? "0", 2)}</span> |
          <span> ${truncate(browserBalance ?? "0", 2)}</span>
        </p>
        <div className="flex mt-6">
          <p className="font-bold text-2xl">Your Music</p>
          <Link className="text-2xl ml-auto" href="/account/all-songs">
            <p>See all</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap pt-1 mb-4 items-start h-[60vh] overflow-y-scroll">
        {!walletClient && <p className="ml-2 mt-4">Connect Wallet</p>}
        {walletClient &&
          myMusicSpinamp?.allProcessedTracks?.nodes
            .map(
              (e) =>
                e?.nftsProcessedTracksByProcessedTrackId.nodes[0]?.nftByNftId
            )
            .map((e) => {
              if (!e) return <></>;
              return (
                <SongListItemSpinamp
                  key={e.id}
                  musicNft={e}
                  onPlaySong={() => {
                    handlePlaySongSpinamp(e);
                  }}
                  customBtn={
                    <AccountListBtn
                      monetizeId={BigInt(
                        myListedMusic?.octaveTokens.find((ele) => {
                          if (!e.contractAddress || !e.tokenId) return false;
                          return (
                            (ele.musicNftAddr as string).toLowerCase() ==
                              e.contractAddress.toLowerCase() &&
                            (ele.musicNftTokenId as string).toLowerCase() ==
                              e.tokenId.toLowerCase()
                          );
                        })?.id ?? "-1"
                      )}
                      onList={() => {
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
                          e.platformId ?? "",
                          e.chainId ?? "",
                          e.nftsProcessedTracksByNftId.nodes[0]
                            ?.platformInternalId ?? "",
                          publicClient,
                          walletClient
                        );
                      }}
                      onUnlist={(monetizeId) => {
                        if (
                          !walletClient ||
                          !publicClient ||
                          !e.contractAddress ||
                          !e.tokenId ||
                          !e.tokenUri
                        )
                          return;
                        unmonetize(monetizeId, publicClient, walletClient);
                      }}
                    />
                  }
                />
              );
            })}
        {walletClient &&
          myMusic?.musicTokens?.map((e) => {
            if (!e) return <></>;
            return (
              <SongListItemMusicNFT
                key={e.id}
                musicNft={e}
                onPlaySong={() => {
                  handlePlaySong(e);
                }}
                customBtn={
                  <AccountListBtn
                    monetizeId={BigInt(
                      myListedMusic?.octaveTokens.find((ele) => {
                        if (!e.id) return false;
                        return (
                          (ele.musicNftAddr as string).toLowerCase() ==
                            MusicNFTAddr.toLowerCase() &&
                          (ele.musicNftTokenId as string).toLowerCase() ==
                            e.id.toLowerCase()
                        );
                      })?.id ?? "-1"
                    )}
                    onList={() => {
                      //TODO error
                      if (
                        !walletClient ||
                        !publicClient ||
                        !e.id ||
                        !e.tokenUri
                      )
                        return;
                      monetize(
                        MusicNFTAddr,
                        BigInt(e.id),
                        e.tokenUri,
                        "octav3",
                        "mumbai",
                        "",
                        publicClient,
                        walletClient
                      );
                    }}
                    onUnlist={(monetizeId) => {
                      if (!walletClient || !publicClient || !e.id) return;
                      unmonetize(monetizeId, publicClient, walletClient);
                    }}
                  />
                }
              />
            );
          })}
        {walletClient && <MintSongButton />}
      </div>
    </div>
  );
};

export default Account;
