"use client";
import React, { useEffect, useState } from "react";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import StickyPlayer from "../StickyPlayer/StickyPlayer";
import { GetAllMusicQuery } from "@/graph-ql/queries/muzik/__generated__/graphql";

type Optional<T, K extends keyof T> = Partial<T> & Omit<T, K>;
export type TMusicPlayer_MusicNft = Optional<
  GetAllMusicQuery["musicNFTs"][0],
  "advNfts"
>;
function MusicPlayer() {
  const [music, setMusicNft] = useState<TMusicPlayer_MusicNft>();
  useEffect(() => {
    MusicPlayerSub.subscribe(setMusicNft);
  }, []);
  return (
    <>
      <StickyPlayer
        musicNft={music}
        onClosePlayer={() => {
          MusicPlayerSub.next(undefined);
        }}
      />
    </>
  );
}

export default MusicPlayer;
