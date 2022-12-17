import React, { useState, useMemo } from "react";

// graphql imports
import { GetAllMusic_musicNFTs } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

// antd imports
// antd imports
import { Typography } from "antd";
const { Text, Title } = Typography;

// custom-components imports
import SongList from "../SongList/SongList";
import AdBanner from "../AdBanner/AdBanner";
import MintSong from "../MintSong/MintSong";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";

const HottestSongs: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<GetAllMusic_musicNFTs>();

  const handlePlaySong = async (musicNft: GetAllMusic_musicNFTs) => {
    MusicPlayerSub.next(musicNft);
    setSelectedSong(musicNft);
  };

  const memoizedSongList = useMemo(
    () => <SongList playSong={handlePlaySong} />,
    []
  );

  return (
    <div className="flex flex-col align-center justify-center w-full md:w-5/6 m-2 md:m-auto px-2 text-left">
      <Title level={3}>Hottest Songs</Title>
      <Text>Place your ads under the hottest songs</Text>
      <MintSong />
      {selectedSong && <AdBanner advNft={selectedSong.advNfts[0]} />}
      {memoizedSongList}
    </div>
  );
};

export default HottestSongs;
