"use client";
import MintSongButton from "@/components/MintSongButton/MintSongButton";
import SongListItemMusicNFT from "@/components/SongList/SongListItemMusicNFT";
import SongListItemSpinamp from "@/components/SongList/SongListItemSpinamp";
import { MusicNFTAddr } from "@/env";
import { GET_MY_LISTED_MUSIC } from "@/graph-ql/queries/octav3/GET_MY_LISTED_MUSIC/getMyListedMusic";
import { GET_MY_MUSIC_LIMIT } from "@/graph-ql/queries/octav3/GET_MY_MUSIC_LIMIT/getMyMusicLimit";
import { GetMyMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";
import { GET_MY_MUSIC as GET_MY_MUSIC_SPINAMP } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC/getMyMusic";
import { Metadata } from "@/graph-ql/queries/spinamp/types";
import { GetMyMusicQuery as GetMyMusicQuerySpinamp } from "@/graph-ql/queries/spinamp/__generated__/graphql";
import { deToHttps, fetchDe } from "@/services/de-storage/fetchDe";
import { monetize } from "@/services/smart-contract/monetize";
import { MusicPlayerSub } from "@/subs/MusicPlayerSub";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { usePublicClient, useWalletClient } from "wagmi";
import AccountListBtn from "../AccountListBtn";
import { unmonetize } from "@/services/smart-contract/unmonetize";

const Account = () => {
  const { data: walletClient } = useWalletClient();
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
      });
    }
  };

  const { data: myMusicSpinamp, refetch: refetchSpinamp } = useQuery(
    GET_MY_MUSIC_SPINAMP,
    {
      variables: {
        owner: "0x26ef03a20aaeda8aafcee4e146dc6b328195947c",
      },
    }
  );

  const { data: myMusic, refetch } = useQuery(GET_MY_MUSIC_LIMIT, {
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
    refetchSpinamp();
  }, [walletClient, refetchSpinamp, refetch]);

  return (
    <div className="pb-4 pt-20 px-32 font-figtree">
      <div className="ml-2">
        <div className="flex mt-6">
          <p className="font-bold text-2xl">Music NFTs</p>
        </div>
      </div>

      <div className="flex flex-wrap pt-1 mb-4 items-start h-[60vh] overflow-y-scroll">
        {myMusicSpinamp?.allProcessedTracks?.nodes
          .map(
            (e) => e?.nftsProcessedTracksByProcessedTrackId.nodes[0]?.nftByNftId
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
                  onUnlist={(monetizeId) => {
                    if (!walletClient || !publicClient || !e.id) return;
                    unmonetize(monetizeId, publicClient, walletClient);
                  }}
                />
              }
            />
          );
        })}
        <MintSongButton />
      </div>
    </div>
  );
};

export default Account;
