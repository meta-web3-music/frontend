import React, { useState } from "react";
import { GetAllMusic_musicNFTs } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import StickyPlayer from "../StickyPlayer/StickyPlayer";

type Optional<T, K extends keyof T> = Partial<T> & Omit<T, K>;
export type TMusicPlayer_MusicNft = Optional<GetAllMusic_musicNFTs, "advNfts">;
function MusicPlayer() {
  const [music, setMusicNft] = useState<TMusicPlayer_MusicNft>();
  MusicPlayerSub.subscribe(setMusicNft);
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
