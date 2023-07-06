"use client";
import React, { useState, useMemo } from "react";

// custom-components imports
import SongList from "../SongList/SongList";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { GetAllMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";
import { MusicNftMetaData } from "@/types/MusicNFTData";
import { deToHttps, fetchDe } from "@/services/de-storage/fetchDe";

const HottestSongs: React.FC = () => {
  const [selectedSong, setSelectedSong] =
    useState<GetAllMusicQuery["octaveTokens"][0]>();

  const handlePlaySong = async (
    musicNft: GetAllMusicQuery["octaveTokens"][0]
  ) => {
    const metadata = await fetchDe<MusicNftMetaData>(musicNft.tokenUri);
    if (!metadata) return;
    const { artist, artwork, title } = metadata;
    MusicPlayerSub.next({
      artist,
      artworkUrl: deToHttps(artwork.uri),
      contractAddr: musicNft.musicNftAddr,
      musicUrl: deToHttps(metadata.animation_url),
      title: title,
      tokenId: musicNft.musicNftTokenId,
    });
    setSelectedSong(musicNft);
  };

  const memoizedSongList = useMemo(
    () => <SongList playSong={handlePlaySong} />,
    []
  );

  return (
    <div className="flex flex-col align-center justify-center w-full md:w-5/6 m-2 md:m-auto px-2 text-left pt-14">
      <p className="text-4xl font-bold mb-10">Songs</p>
      {selectedSong && <></>}
      {memoizedSongList}
    </div>
  );
};

export default HottestSongs;
