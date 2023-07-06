"use client";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { GetAllMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";
import { useEffect, useState } from "react";
import SongListItemUI from "./SongListItemUI";
import { arToHttps, fetchAr } from "@/services/ipfs/fetchAr";
type Props = {
  musicNft: GetAllMusicQuery["octaveTokens"][0];
  onPlaySong: () => void;
};

const SongListItemMusiz = ({ musicNft, onPlaySong }: Props) => {
  const [metaData, setMetaData] = useState<MusicNftMetaData>();
  useEffect(() => {
    fetchAr<MusicNftMetaData>(musicNft.tokenUri).then(setMetaData);
  }, [musicNft]);
  const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);
  useEffect(() => {
    MusicPlayerSub.subscribe((e) => {
      if (e?.tokenId == musicNft.id) {
        setIsCurrentPlaying(true);
      } else {
        setIsCurrentPlaying(false);
      }
    });
  }, [musicNft]);
  const getImageSrc = (): string => {
    const artWorkUri = metaData?.artwork.uri;
    if (!artWorkUri?.includes("ar://")) {
      return "";
    }
    const httpsURL = arToHttps(artWorkUri ?? "");
    return httpsURL;
  };

  if (!metaData) return <></>;
  return (
    <SongListItemUI
      artist={metaData.artist}
      coverArt={getImageSrc()}
      isCurrentPlaying={isCurrentPlaying}
      onPlaySong={onPlaySong}
      title={metaData.title}
    />
  );
};

export default SongListItemMusiz;
