"use client";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import React, { useEffect, useState } from "react";
import { GetMyMusicQuery } from "@/graph-ql/queries/spinamp/__generated__/graphql";
import { Metadata } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC/types";
import { deToHttps } from "@/services/de-storage/fetchDe";
import SongListItemUI from "./SongListItemUI";
type Props = {
  musicNft: NonNullable<NonNullable<GetMyMusicQuery["allNfts"]>["nodes"][0]>;
  onPlaySong: () => void;
  customBtn?: React.ReactNode;
};

const SongListItemSpinamp = ({ musicNft, onPlaySong, customBtn }: Props) => {
  const metadata = musicNft.metadata as Metadata;
  const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);
  useEffect(() => {
    MusicPlayerSub.subscribe((e) => {
      if (
        e?.tokenId == musicNft.tokenId &&
        e?.contractAddr.toLowerCase() == musicNft.contractAddress?.toLowerCase()
      ) {
        setIsCurrentPlaying(true);
      } else {
        setIsCurrentPlaying(false);
      }
    });
  }, [musicNft]);
  const getImageSrc = (): string => {
    if (!metadata.artwork) return "";
    const artWorkUri = metadata.artwork.uri;
    const httpsURL = deToHttps(artWorkUri ?? "");
    return httpsURL;
  };

  return (
    <SongListItemUI
      artist={metadata.artist ?? "...."}
      title={metadata.title ?? metadata.name ?? "...."}
      coverArt={getImageSrc()}
      onPlaySong={onPlaySong}
      isCurrentPlaying={isCurrentPlaying}
      customBtn={customBtn}
    />
  );
};

export default SongListItemSpinamp;
