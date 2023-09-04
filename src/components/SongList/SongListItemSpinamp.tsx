"use client";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import React, { useEffect, useState } from "react";
import { Metadata } from "@/graph-ql/queries/spinamp/GET_MY_MUSIC/types";
import { deToHttps } from "@/services/de-storage/fetchDe";
import SongListItemUI from "./SongListItemUI";
import { getPlatformUrl } from "@/services/platform/geturl";
import { Network, Platform } from "@/types/Platform";
import { SpinampMusicNft } from "@/types/spinamp";
type Props = {
  musicNft: SpinampMusicNft;
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
    const artWorkUri = metadata?.artwork?.uri ?? metadata.image;
    if (!artWorkUri) return "";
    const httpsURL = deToHttps(artWorkUri ?? "");
    return httpsURL;
  };

  const [platformUrl, setPlatformUrl] = useState("");

  useEffect(() => {
    if (
      musicNft.platformId &&
      musicNft.chainId &&
      (metadata.artist ||
        musicNft.artistsNftsByNftId.nodes[0]?.artistByArtistId?.name) &&
      musicNft.nftsProcessedTracksByNftId.nodes[0]?.platformInternalId &&
      (metadata.title || metadata.name)
    ) {
      const _platformUrl = getPlatformUrl(
        musicNft.platformId as Platform,
        metadata.artist ??
          musicNft.artistsNftsByNftId.nodes[0]?.artistByArtistId?.name ??
          "....",
        (metadata.title ?? metadata.name) as string,
        musicNft.chainId as Network,
        musicNft.nftsProcessedTracksByNftId.nodes[0]?.platformInternalId
      );
      if (_platformUrl) setPlatformUrl(_platformUrl);
    }
  }, [metadata, musicNft]);
  return (
    <SongListItemUI
      platform={
        musicNft.platformId &&
        (metadata.artist ||
          musicNft.artistsNftsByNftId.nodes[0]?.artistByArtistId?.name) &&
        musicNft.nftsProcessedTracksByNftId.nodes[0]?.platformInternalId &&
        platformUrl &&
        (metadata.title || metadata.name)
          ? {
              name: musicNft.platformId as Platform,
              url: platformUrl,
            }
          : undefined
      }
      artist={
        metadata.artist ??
        musicNft.artistsNftsByNftId.nodes[0]?.artistByArtistId?.name ??
        "...."
      }
      title={metadata.title ?? metadata.name ?? "...."}
      coverArt={getImageSrc()}
      onPlaySong={onPlaySong}
      isCurrentPlaying={isCurrentPlaying}
      customBtn={customBtn}
    />
  );
};

export default SongListItemSpinamp;
