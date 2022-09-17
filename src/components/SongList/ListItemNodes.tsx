import { useState, useEffect, useCallback } from "react";
// antd imports
import { Typography, Button } from "antd";
const { Title } = Typography;

//utils
import { MusicNftMetaData } from "../../types/MusicNFTData";
import { fetchIpfs } from "../../services/ipfs/fetchIpfs";
import { GetAllMusic_musicNFTs } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
interface TitleProps {
  musicItem: GetAllMusic_musicNFTs;
}
const TitleNode: React.FC<TitleProps> = ({ musicItem }) => {
  const [metadata, setMetaData] = useState<MusicNftMetaData>();

  const fetchMetaData = useCallback(async () => {
    const musicMetaData = await fetchIpfs<MusicNftMetaData>(
      musicItem.metaDataUri
    );
    setMetaData(musicMetaData);
  }, [musicItem]);
  useEffect(() => {
    fetchMetaData();
  }, [fetchMetaData]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title style={{ marginRight: "5px" }} level={5}>
        {metadata?.body.title}
      </Title>
      <span
        style={{
          background: "#f4f4f4",
          padding: "2px 6px",
          borderRadius: "20px",
        }}
      >
        {`${musicItem.owner.id.substring(
          0,
          4
        )}...${musicItem.owner.id.substring(musicItem.owner.id.length - 4)}`}
      </span>
    </div>
  );
};

interface SongNodeProps {
  playSong: (musicNft: GetAllMusic_musicNFTs) => void;
  musicItem: GetAllMusic_musicNFTs;
}

const SongNode: React.FC<SongNodeProps> = ({ musicItem, playSong }) => {
  return (
    <Button onClick={() => playSong(musicItem)} type="primary">
      Play song
    </Button>
  );
};

export { TitleNode, SongNode };
