"use client";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { useEffect, useState } from "react";
import { GetMyMusicQuery } from "@/graph-ql/queries/spinamp/__generated__/graphql";
import { Metadata } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC/types";
import { arToHttps } from "@/services/ipfs/fetchAr";
import SongListItemUI from "./SongListItemUI";
type Props = {
  musicNft: NonNullable<NonNullable<GetMyMusicQuery["allNfts"]>["nodes"][0]>;
  onPlaySong: () => void;
};

const SongListItemSpinamp = ({ musicNft, onPlaySong }: Props) => {
  const metadata = musicNft.metadata as Metadata;
  const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);
  useEffect(() => {
    MusicPlayerSub.subscribe((e) => {
      if (
        e?.tokenId == musicNft.tokenId &&
        e?.contractAddr == musicNft.contractAddress
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
    if (!artWorkUri?.includes("ar://")) {
      return "";
    }
    const httpsURL = arToHttps(artWorkUri ?? "");
    return httpsURL;
  };

  return (
    <SongListItemUI
      artist={metadata.artist ?? "...."}
      title={metadata.title ?? metadata.name ?? "...."}
      coverArt={getImageSrc()}
      onPlaySong={onPlaySong}
      isCurrentPlaying={isCurrentPlaying}
    />
  );
};

export default SongListItemSpinamp;
