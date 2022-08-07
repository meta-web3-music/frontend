import Header from "../../src/components/header";
import { Typography, List, Button } from "antd";
import { useRouter } from "next/router";
import { GetAllAsks } from "../../src/graph-ql/queries/GET_ALL_ASKS/__generated__/GetAllAsks";
import { GET_ALL_ASKS } from "../../src/graph-ql/queries/GET_ALL_ASKS/getAllAsks";
import { useQuery } from "@apollo/client";
import { AdvNFTAddr } from "../../src/env";

const { Title, Text } = Typography;

const AdMarketPlace: React.FC = () => {
  const router = useRouter();

  const navigateToSong = (songId: number) => {
    router.push(`/adMarketPlace/${songId}`);
  };
  return (
    <>
      <Header />
      <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
        <Title level={2}>Ad Marketplace</Title>
        <Adlist onNavigateToSongPage={navigateToSong} />
      </div>
    </>
  );
};

export default AdMarketPlace;

const listData = [
  {
    id: 1,
    name: "Call me by name",
    ownerAddress: "0x34...7463",
    artist: "Mujahid",
    adSpacePrice: "0.2",
    music: "ipfs url string to be ste to source",
    thumbnail: "music thumbnail string if it exists",
    noOfViews: "3M",
  },
  {
    id: 2,
    name: "Last Last",
    ownerAddress: "0x34...7463",
    artist: "Burna Boy",
    adSpacePrice: "0.2",
    music: "ipfs url string to be ste to source",
    thumbnail: "music thumbnail string if it exists",
    noOfViews: "360K",
  },
  {
    id: 3,
    name: "Girls like us",
    ownerAddress: "0x34...7463",
    artist: "Zoe wooes",
    adSpacePrice: "0.2",
    music: "ipfs url string to be ste to source",
    thumbnail: "music thumbnail string if it exists",
    noOfViews: "430K",
  },
];

interface AdlistProp {
  onNavigateToSongPage: (songId: number) => void;
}

const Adlist: React.FC<AdlistProp> = ({ onNavigateToSongPage }) => {
  const {
    loading: isLoadingAllAsks,
    data: allAsksConnection,
    error: allAskError,
  } = useQuery<GetAllAsks>(GET_ALL_ASKS, {
    variables: {
      nftContractAddr: AdvNFTAddr.toLowerCase(),
    },
  });

  return (
    <List
      loading={isLoadingAllAsks}
      style={{
        width: "700px",
        alignSelf: "center",
        border: "1px solid #e5e5e5",
        borderRadius: "20px",
        padding: "1em",
      }}
      itemLayout="horizontal"
      dataSource={allAsksConnection?.asks}
      renderItem={(item) => (
        <List.Item
          extra={
            <Button
              onClick={() => onNavigateToSongPage(parseInt(item.token.id))}
            >
              Rent Space
            </Button>
          }
        >
          <List.Item.Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={
              <TitleNode
                name="TODO: fetch song name from ipfs"
                ownerAddress={item.token.owner.id}
              />
            }
            description="TODO: fetch desc from ipfs"
          />
        </List.Item>
      )}
    />
  );
};

interface TitleProps {
  name: string;
  ownerAddress: string;
}

const TitleNode: React.FC<TitleProps> = ({ name, ownerAddress }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title style={{ marginRight: "5px", marginBottom: "0px" }} level={5}>
        {name}
      </Title>
      <span
        style={{
          background: "#f4f4f4",
          padding: "2px 6px",
          borderRadius: "20px",
        }}
      >
        {ownerAddress}
      </span>
    </div>
  );
};
