import { useQuery } from "@apollo/client";
import { List, Typography } from "antd";
import { GET_ALL_MUSIC } from "../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

const { Title } = Typography;

const listData = [
  {
    name: "Call me by name",
    ownerAddress: "0x34...7463",
    artist: "Mujahid",
    adSpacePrice: "0.2",
    music: "ipfs url string to be ste to source",
    thumbnail: "music thumbnail string if it exists",
    noOfViews: "3M",
  },
  {
    name: "Last Last",
    ownerAddress: "0x34...7463",
    artist: "Burna Boy",
    adSpacePrice: "0.2",
    music: "ipfs url string to be ste to source",
    thumbnail: "music thumbnail string if it exists",
    noOfViews: "360K",
  },
  {
    name: "Girls like us",
    ownerAddress: "0x34...7463",
    artist: "Zoe wooes",
    adSpacePrice: "0.2",
    music: "ipfs url string to be ste to source",
    thumbnail: "music thumbnail string if it exists",
    noOfViews: "430K",
  },
];

const NftSongList: React.FC = () => {
  const {
    loading: isLoadingAllMusic,
    data: allMusicConnection,
    error: allMusicError,
  } = useQuery<GetAllMusic>(GET_ALL_MUSIC);
const ipfsPrefix = 'https://ipfs.io/ipfs/'
const metaData = allMusicConnection?.musicNFTs[0]
  console.log(metaData)
  // console.log(metaData && ipfsPrefix.concat(metaData?.substring(7)))
  return (
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
        <List.Item
        >
          <List.Item.Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<TitleNode name="Anonymous" ownerAddress={item.owner.id} />}
            description={`Burna Boy`}
            />
            <SongNode assetUri={item.assetUri} />
        </List.Item>
      )}
    />
  );
};

export default NftSongList;

interface TitleProps {
  name: string;
  ownerAddress: string;
}

// helper function to transform uri with this format: ipfs://
const transformIpfsUri = (uri:string) =>{
  const ipfsPrefix = 'https://ipfs.io/ipfs/';
  const uriWithRemovedIpfsPrefix = uri.substring(7);
  const correctIpfsUri = ipfsPrefix.concat(uriWithRemovedIpfsPrefix);
  return correctIpfsUri
}

const TitleNode: React.FC<TitleProps> = ({ name, ownerAddress }) => {


  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title style={{ marginRight: "5px" }} level={5}>
        {name}
      </Title>
      <span
        style={{
          background: "#f4f4f4",
          padding: "2px 6px",
          borderRadius: "20px",
        }}
      >
        {`${ownerAddress.substring(0,4)}...${ownerAddress.substring(ownerAddress.length - 4)}`}
      </span>
    </div>
  );
};

interface SongNodeProps{
  assetUri: string
}

const SongNode: React.FC<SongNodeProps> = ({assetUri}) =>{
  const correctAssetUri = transformIpfsUri(assetUri);
  return(
    <audio controls >
      <source src={correctAssetUri&&correctAssetUri} type="audio/mpeg" />
    </audio>
  )
}