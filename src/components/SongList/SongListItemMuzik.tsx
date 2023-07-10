"use client";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { GetAllMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";
import { useEffect, useState } from "react";
import SongListItemUI from "./SongListItemUI";
import { deToHttps, fetchDe } from "@/services/de-storage/fetchDe";
type Props = {
  musicNft: GetAllMusicQuery["octaveTokens"][0];
  onPlaySong: () => void;
};

const SongListItemMuzik = ({ musicNft, onPlaySong }: Props) => {
  const [metaData, setMetaData] = useState<MusicNftMetaData>();
  useEffect(() => {
    fetchDe<MusicNftMetaData>(musicNft.tokenUri).then(setMetaData);
  }, [musicNft]);
  const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);
  useEffect(() => {
    MusicPlayerSub.subscribe((e) => {
      if (
        e?.tokenId == musicNft.musicNftTokenId &&
        e?.contractAddr.toLowerCase() == musicNft.musicNftAddr.toLowerCase()
      ) {
        setIsCurrentPlaying(true);
      } else {
        setIsCurrentPlaying(false);
      }
    });
  }, [musicNft]);
  const getImageSrc = (): string => {
    const artWorkUri = metaData?.artwork.uri;
    const httpsURL = deToHttps(artWorkUri ?? "");
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

export default SongListItemMuzik;
