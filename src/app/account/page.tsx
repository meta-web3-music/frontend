"use client";
import OButton from "@/components/OButton/OButton";
import SongListItemSpinamp from "@/components/SongList/SongListItemSpinamp";
import { GET_MY_MUSIC } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC/getMyMusic";
import { Metadata } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC/types";
import { GetMyMusicQuery } from "@/graph-ql/queries/spinamp/__generated__/graphql";
import { deToHttps } from "@/services/de-storage/fetchDe";
import { monetize } from "@/services/smart-contract/monetize";
import { MusicPlayerSub } from "@/subs/MusicPlayerSub";
import { useQuery } from "@apollo/client";
import React from "react";
import { usePublicClient, useWalletClient } from "wagmi";

const Account = () => {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const handlePlaySong = async (
    musicNft: NonNullable<GetMyMusicQuery["allNfts"]>["nodes"][0]
  ) => {
    const metadata = musicNft?.metadata as Metadata;
    if (!metadata) return;
    if (
      musicNft?.contractAddress &&
      musicNft?.tokenId &&
      metadata.animation_url
    ) {
      MusicPlayerSub.next({
        artist: metadata.artist ?? ".....",
        artworkUrl: deToHttps(metadata.artwork?.uri ?? "TODO"),
        contractAddr: musicNft?.contractAddress ?? "",
        musicUrl: deToHttps(metadata.animation_url ?? ""),
        title: metadata.title ?? ".....",
        tokenId: musicNft?.tokenId ?? ".....",
      });
    }
  };
  const { data: myMusic } = useQuery(GET_MY_MUSIC, {
    variables: {
      owner: "0x324A77ffee86A7ec082f8395f060bc4E94E60198",
    },
  });

  return (
    <div className="p-4 pt-20 pl-8 font-figtree">
      <p className="font-bold text-2xl">Balance</p>
      <p className="text-xl">$10</p>

      <div className="flex">
        <p className="font-bold text-2xl">Music NFTs</p>
        <p className="text-2xl ml-auto">See all</p>
      </div>
      <div className="flex flex-wrap justify-center pt-4 mb-4 items-start h-[60vh] overflow-y-scroll">
        {myMusic?.allNfts?.nodes.map((e) => {
          if (!e) return <></>;
          return (
            <SongListItemSpinamp
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
      </div>
    </div>
  );
};

export default Account;
