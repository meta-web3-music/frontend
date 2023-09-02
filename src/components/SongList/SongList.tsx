import React from "react";
import { useQuery } from "@apollo/client";

// types
import { SongListProps } from "./SongList.types";

import SongListItemMuzik from "./SongListItemMuzik";
import { GET_ALL_MUSIC } from "@/graph-ql/queries/octav3/GET_ALL_MUSIC/getAllMusic";

const SongList: React.FC<SongListProps> = ({ playSong }) => {
  const { data: allMusicConnection } = useQuery(GET_ALL_MUSIC);

  return (
    <>
      <div className="flex flex-wrap pt-4 mb-4 items-start h-[70vh] overflow-y-scroll">
        {allMusicConnection?.octaveTokens.map((e) => (
          <SongListItemMuzik
            key={e.id}
            musicNft={e}
            onPlaySong={() => playSong(e)}
          />
        ))}
      </div>
    </>
  );
};

export default SongList;
