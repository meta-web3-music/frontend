"use client";
import React, { useState, useMemo } from "react";

// custom-components imports
import SongList from "../SongList/SongList";
import AdBanner from "../AdBanner/AdBanner";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { GetAllMusicQuery } from "@/graph-ql/queries/muzik/__generated__/graphql";
import { fetchIpfs, ipfsToHttps } from "@/services/ipfs/fetchIpfs";
import { MusicNftMetaData } from "@/types/MusicNFTData";
import { MusicNFTAddr } from "@/env";

const HottestSongs: React.FC = () => {
  const [selectedSong, setSelectedSong] =
    useState<GetAllMusicQuery["musicNFTs"][0]>();

  const handlePlaySong = async (musicNft: GetAllMusicQuery["musicNFTs"][0]) => {
    const metadata = await fetchIpfs<MusicNftMetaData>(musicNft.metaDataUri);
    if (!metadata) return;
    const {
      body: { artist, artwork, title },
    } = metadata;
    MusicPlayerSub.next({
      artist,
      artworkUrl: ipfsToHttps(artwork.info.uri),
      contractAddr: MusicNFTAddr,
      musicUrl: ipfsToHttps(musicNft.assetUri),
      title: title,
      tokenId: musicNft.id,
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
      {selectedSong && <AdBanner advNft={selectedSong.advNfts[0]} />}
      {memoizedSongList}
    </div>
  );
};

export default HottestSongs;
