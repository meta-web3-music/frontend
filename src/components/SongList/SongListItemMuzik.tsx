"use client";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { GetAllMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";
import { useEffect, useState } from "react";
import SongListItemUI from "./SongListItemUI";
import { deToHttps, fetchDe } from "@/services/de-storage/fetchDe";
import { Network, Platform } from "@/types/Platform";
import { getPlatformUrl } from "@/services/platform/geturl";
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
    const artWorkUri = metaData?.artwork?.uri ?? metaData?.image;
    const httpsURL = deToHttps(artWorkUri ?? "");
    return httpsURL;
  };

  const [platformUrl, setPlatformUrl] = useState("");

  useEffect(() => {
    if (
      metaData &&
      musicNft.platform &&
      musicNft.chainId &&
      metaData.artist &&
      musicNft.platformTokenId &&
      (metaData.title || metaData.name)
    ) {
      const _platformUrl = getPlatformUrl(
        musicNft.platform as Platform,
        metaData.artist ?? "....",
        (metaData.title ?? metaData.name) as string,
        musicNft.chainId as Network,
        musicNft.platformTokenId
      );
      if (_platformUrl) setPlatformUrl(_platformUrl);
    }
  }, [metaData, musicNft]);
  if (!metaData) return <></>;
  return (
    <SongListItemUI
      artist={metaData.artist}
      coverArt={getImageSrc()}
      isCurrentPlaying={isCurrentPlaying}
      onPlaySong={onPlaySong}
      title={metaData.title ?? metaData.name}
      platform={
        platformUrl
          ? { name: musicNft.platform as Platform, url: platformUrl }
          : undefined
      }
    />
  );
};

export default SongListItemMuzik;
