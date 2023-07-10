"use client";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import React, { useEffect, useState } from "react";
import { GetMyMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";
import { Metadata } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC/types";
import { deToHttps, fetchDe } from "@/services/de-storage/fetchDe";
import SongListItemUI from "./SongListItemUI";
import { MusicNFTAddr } from "@/env";
type Props = {
  musicNft: NonNullable<NonNullable<GetMyMusicQuery["musicTokens"]>[0]>;
  onPlaySong: () => void;
  customBtn?: React.ReactNode;
};

const SongListItemMusicNFT = ({ musicNft, onPlaySong, customBtn }: Props) => {
  const [metadata, setMetadata] = useState<Metadata>();
  const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);
  useEffect(() => {
    fetchDe<Metadata>(musicNft.tokenUri).then(setMetadata);
    MusicPlayerSub.subscribe((e) => {
      if (
        e?.tokenId == musicNft.id &&
        e?.contractAddr.toLowerCase() == MusicNFTAddr.toLowerCase()
      ) {
        setIsCurrentPlaying(true);
      } else {
        setIsCurrentPlaying(false);
      }
    });
  }, [musicNft]);
  const getImageSrc = (): string => {
    if (!metadata?.artwork) return "";
    const artWorkUri = metadata.artwork.uri;
    const httpsURL = deToHttps(artWorkUri ?? "");
    return httpsURL;
  };

  return (
    <SongListItemUI
      artist={metadata?.artist ?? "...."}
      title={metadata?.title ?? metadata?.name ?? "...."}
      coverArt={getImageSrc()}
      onPlaySong={onPlaySong}
      isCurrentPlaying={isCurrentPlaying}
      customBtn={customBtn}
    />
  );
};

export default SongListItemMusicNFT;
