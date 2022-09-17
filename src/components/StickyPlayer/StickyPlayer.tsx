import { useEffect, useState } from "react";

// antd imports
import { Typography, Card, Button } from "antd";
import { CloseOutlined } from '@ant-design/icons';
const { Text, Title } = Typography;

// utility imports
import { fetchIpfs, ipfsToHttps } from "../../services/ipfs/fetchIpfs";

// type imports
import { StickyPlayerProps } from "./StickyPlayer.types";
import { MusicNftMetaData } from "../../types/MusicNFTData";


// COMPONENT
const StickyPlayer: React.FC<StickyPlayerProps> = ({ onClosePlayer, musicNft }) => {
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
    <Card
      size='small'
      title={<TitleNode musicMetaData={musicMetaData}/>}
      extra={<CloseOutlined onClick={onClosePlayer} />}
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
      
      <audio
        autoPlay
        loop
        controls
        src={`${ipfsToHttps(musicNft.assetUri)}`}
      ></audio>
    </Card>
  );
};

export default StickyPlayer;

interface TitleNodeProps{
  musicMetaData: MusicNftMetaData | undefined
}

const TitleNode: React.FC<TitleNodeProps> = ({musicMetaData})=>{
  return(
    <div style={{ display: "flex", flexDirection: "column" }}>
        <Title style={{ margin: "0" }} level={5}>
          {musicMetaData?.body.title}
        </Title>
        <Text type="secondary">{musicMetaData?.body.artist}</Text>
      </div>
  )
}