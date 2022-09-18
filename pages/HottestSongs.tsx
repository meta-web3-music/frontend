import React, { useState, useMemo } from "react";

// graphql imports
import { GetAllMusic_musicNFTs } from "../src/graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

// antd imports
// antd imports
import { Typography } from "antd";
const { Text, Title } = Typography;

// custom-components imports
import SongList from "../src/components/SongList/SongList";
import AdBanner from "../src/components/AdBanner/AdBanner";
import StickyPlayer from "../src/components/StickyPlayer/StickyPlayer";
import MintSong from "../src/components/MintSong/MintSong";

import { ipfsToHttps } from "../src/services/ipfs/fetchIpfs";

const HottestSongs: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<GetAllMusic_musicNFTs>();

  const handlePlaySong = async (musicNft: GetAllMusic_musicNFTs) => {
    setSelectedSong(musicNft);
  };

  const handleCloseStickyPlayer = () => {
    setSelectedSong(undefined);
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
      {selectedSong && (
        <AdBanner
          imageUrl={ipfsToHttps(selectedSong.advNfts[0]?.assetHash ?? "")}
        />
      )}
      {memoizedSongList}
      {selectedSong && (
        <StickyPlayer
          onClosePlayer={handleCloseStickyPlayer}
          musicNft={selectedSong}
        />
      )}
    </div>
  );
};

export default HottestSongs;
