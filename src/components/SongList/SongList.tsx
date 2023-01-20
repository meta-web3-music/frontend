import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSIC } from "../../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

// types
import { SongListProps } from "./SongList.types";

import SongListItem from "./SongListItem";

const SongList: React.FC<SongListProps> = ({ playSong }) => {
  const { data: allMusicConnection } = useQuery<GetAllMusic>(GET_ALL_MUSIC, {
    variables: {
      currentTime: Math.floor(Date.now() / 1000).toString(),
    },
  });

  return (
    <>
      <div className="flex flex-wrap justify-center pt-4 mb-4 h-[70vh] overflow-y-scroll">
        {allMusicConnection?.musicNFTs.map((e) => (
          <SongListItem
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
