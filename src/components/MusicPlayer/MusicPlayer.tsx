"use client";
import React, { useEffect, useState } from "react";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import StickyPlayer from "../StickyPlayer/StickyPlayer";

export type TMusicPlayer_MusicNft = {
  artist: string;
  title: string;
  musicUrl: string;
  artworkUrl: string;
  contractAddr: string;
  tokenId: string;
  adDetails?: [string, string, string];
  owner: string;
  disableStreaming?: boolean;
};
function MusicPlayer() {
  const [music, setMusicNft] = useState<TMusicPlayer_MusicNft>();
  useEffect(() => {
    MusicPlayerSub.subscribe(setMusicNft);
  }, []);
  return (
    <>
      <StickyPlayer musicNft={music} />
    </>
  );
}

export default MusicPlayer;
