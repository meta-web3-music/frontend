import { useContext } from "react";
import Header from "../../src/components/header";
import { Typography, List, Button } from "antd";
import { useRouter } from "next/router";
import {
  GetAllAsks,
  GetAllAsks_asks,
} from "../../src/graph-ql/queries/GET_ALL_ASKS/__generated__/GetAllAsks";
import { GET_ALL_ASKS } from "../../src/graph-ql/queries/GET_ALL_ASKS/getAllAsks";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import AdModal from "../../src/components/AdModal";
import { NFTStorage, File } from "nft.storage";
import { WalletContext } from "../../src/contexts/WalletContext";

const { Title, Text } = Typography;

// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

const AdMarketPlace: React.FC = () => {
  const walletContext = useContext(WalletContext);
  const router = useRouter();
  const [selectedSong, setSelectedSong] = useState<object>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isCreatingAd, setIsCreatingAd] = useState<boolean>(false);

  useEffect(() => {
    const { songId } = router.query;
    const songObject = listData.find((song) => song.id === Number(songId));
    // fetch data for this particular song
    // use graphql to do this.

    //update state
    setSelectedSong(songObject);
  }, []);

  const handleAdModal = () => {
    setShowModal(!showModal);
  };

  const navigateBack = () => {
    router.push("/adMarketPlace");
  };

  const handleAdForm = async (formData: any) => {
    try {
      // start creating add
      setIsCreatingAd(true);

      // store metadata of ad image on nft.storage
      const adImageHash = await client.storeBlob(
        formData.adFile[0].originFileObj
      );

      // create metadata object for advertisement nft
      const advNftDataObj: AdvNftMetaData = {
        description: `Adv nft for NFT`,
        mimeType: "image/jpeg",
        name: `${formData.rentDuration}ADV NFT`,
        version: "",
      };

      console.log(adImageHash);
      const signer = (await walletContext.getWeb3Provider()).getSigner();

      // connect to music nft smart-contract
      const adNft = AdvNFT__factory.connect(AdvNFTAddr, signer);

      // invoke contract func and mint song nft with ad nft
      // const resAdvImageCreation = await adNft.updateHash(
      //         formData.rentDuration
      //   )
      //   .then((e) => e.wait());
      // // const advNftID = resCreateMusicWithAdv.events?.[3].args
      //   ?.tokenId as BigNumber;

      setIsCreatingAd(false);
    } catch (err) {
      setIsCreatingAd(false);
      // close modal
      handleAdModal();
    }

    // close modal
    handleAdModal();
  };

  return (
    <>
      <Header />
      <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
        <Title level={2}>Ad Marketplace</Title>
        <Adlist onHandleModal={handleAdModal} />

        <AdModal
          isCreatingAd={isCreatingAd}
          onHandleAdForm={handleAdForm}
          onHandleModal={handleAdModal}
          isVisible={showModal}
        />
      </div>
    </>
  );
};

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
  onHandleModal: () => void;
}

const Adlist: React.FC<AdlistProp> = ({ onHandleModal }) => {
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
      renderItem={(item) => {
        return (
          <List.Item
            extra={<Button onClick={onHandleModal}>Rent Space</Button>}
          >
            <List.Item.Meta
              // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<TitleNode item={item} />}
              description="TODO: fetch desc from ipfs"
            />
          </List.Item>
        );
      }}
    />
  );
};

interface TitleProps {
  item: GetAllAsks_asks;
}

const TitleNode: React.FC<TitleProps> = ({ item }) => {
  const [metaData, setMetaData] = useState<AdvNftMetaData>();

  const fetchMetaData = async () => {
    const metaDataHash = item.token.metaDataHash;
    const ipfsPrefix = "https://ipfs.io/ipfs/";
    const url = ipfsPrefix + metaDataHash.replace("ipfs://", "");
    const fetchRes = await fetch(url);
    const fetchJson = await fetchRes.json();
    setMetaData(fetchJson as AdvNftMetaData);
  };
  useEffect(() => {
    fetchMetaData();
  }, [item]);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title style={{ marginRight: "5px", marginBottom: "0px" }} level={5}>
        {metaData?.name}
      </Title>
      <span
        style={{
          background: "#f4f4f4",
          padding: "2px 6px",
          borderRadius: "20px",
        }}
      >
        {item.token.id}
      </span>
    </div>
  );
};

export default AdMarketPlace;
