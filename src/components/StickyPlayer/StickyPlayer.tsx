// antd imports
import { Typography } from "antd";
import { useEffect, useState } from "react";
import { fetchIpfs, ipfsToHttps } from "../../ipfs/fetchIpfs";
import { MusicNftMetaData } from "../../types/MusicNFTData";
const { Text, Title } = Typography;

// type imports
import { StickyPlayerProps } from "./StickyPlayer.types";

const StickyPlayer: React.FC<StickyPlayerProps> = ({ musicNft }) => {
  const [musicMetaData, setMusicMetaData] = useState<MusicNftMetaData>();
  useEffect(() => {
    fetchMusicMetaData();
  }, [musicNft]);

  const fetchMusicMetaData = async () => {
    const musicNftMetaData = await fetchIpfs<MusicNftMetaData>(
      musicNft.metaDataUri
    );
    setMusicMetaData(musicNftMetaData);
  };

  return (
    <div
      style={{
        background: "#ffffff",
        boxShadow: "1px 0px 12px 1px rgba(0,0,0,0.35)",
        zIndex: "2",
        position: "fixed",
        bottom: "1em",
        left: "1em",
        display: "flex",
        maxWidth: "500px",
        flexDirection: "column",
        padding: ".7em 1em",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title style={{ margin: "0" }} level={5}>
          {musicMetaData?.body.title}
        </Title>
        <Text type="secondary">{musicMetaData?.body.artist}</Text>
      </div>
      <audio
        autoPlay
        loop
        controls
        src={`${ipfsToHttps(musicNft.assetUri)}`}
      ></audio>
    </div>
  );
};

export default StickyPlayer;
