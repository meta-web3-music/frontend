import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSIC } from "../../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

// antd imports
import {  List } from "antd";

// types
import { SongListProps } from "./SongList.types";

// custom-component imports
import { TitleNode, SongNode } from "./ListItemNodes";

const SongList: React.FC<SongListProps> = ({ playSong }) => {
  const {
    loading: isLoadingAllMusic,
    data: allMusicConnection,
    error: allMusicError,
  } = useQuery<GetAllMusic>(GET_ALL_MUSIC, {
    variables: {
      currentTime: Math.floor(Date.now() / 1000).toString(),
    },
  });


  return (
    <>
      <List
        loading={isLoadingAllMusic}
        style={{
          width: "700px",
          alignSelf: "center",
          border: "1px solid #e5e5e5",
          borderRadius: "20px",
          padding: "1em",
        }}
        itemLayout="horizontal"
        dataSource={allMusicConnection?.musicNFTs}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<TitleNode musicItem={item} />}
              description={`Burna Boy`}
            />
            <SongNode musicItem={item} playSong={playSong} />
          </List.Item>
        )}
      />
    </>
  );
};

export default SongList;
