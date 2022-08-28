import { useContext } from "react";
import Header from "../../src/components/Header/header";

// antd imports
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space, Radio, Typography, List } from "antd";
import type { RadioChangeEvent } from "antd";

import { useRouter } from "next/router";
import {
  GetAllAsks,
  GetAllAsks_asks,
} from "../../src/graph-ql/queries/GET_ALL_ASKS/__generated__/GetAllAsks";
import { GET_ALL_ASKS } from "../../src/graph-ql/queries/GET_ALL_ASKS/getAllAsks";
import { useQuery } from "@apollo/client";
import { AdvNFTAddr, ZoraAskAddr } from "../../src/env";
import { useEffect, useState } from "react";
import { AdvNftMetaData } from "../../src/types/AdvNFTData";
// custom-component imports
import AdModal from "../../src/components/AdModal/AdModal";

import { NFTStorage, File } from "nft.storage";
import { WalletContext } from "../../src/contexts/WalletContext";
import {
  AdvNFT__factory,
  ZoraAsk__factory,
  ZoraModuleManager__factory,
} from "../../src/contracts";
import { fetchIpfs } from "../../src/services/ipfs/fetchIpfs";

const { Title, Text } = Typography;

// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

const AdMarketPlace: React.FC = () => {
  const walletContext = useContext(WalletContext);
  const router = useRouter();
  const [selectedAdv, setSelectedAdv] = useState<GetAllAsks_asks>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isCreatingAd, setIsCreatingAd] = useState<boolean>(false);

  const handleAdModal = () => {
    setShowModal(!showModal);
  };

  const navigateBack = () => {
    router.push("/adMarketPlace");
  };

  const handleAdForm = async (formData: any) => {
    try {
      setIsCreatingAd(true);
      const adImageHash = await client.storeBlob(
        formData.adFile[0].originFileObj
      );
      const advNftDataObj: AdvNftMetaData = {
        description: `Adv nft for NFT`,
        mimeType: "image/jpeg",
        name: `${formData.rentDuration}ADV NFT`,
        version: "",
      };

      console.log("handleAdForm: Adding MetaData to IPFS");

      const metadataHash = await client.storeBlob(
        new Blob([JSON.stringify(advNftDataObj)])
      );
      const signer = (await walletContext.getWeb3Provider()).getSigner();
      const adNft = AdvNFT__factory.connect(AdvNFTAddr, signer);
      const zoraAsks = ZoraAsk__factory.connect(ZoraAskAddr, signer);
      const zeroAddr = "0x0000000000000000000000000000000000000000";
      console.log(selectedAdv);
      if (!selectedAdv?.token.id) {
        throw new Error("Failed to get selected adv id");
        return;
      }
      console.log("handleAdForm: Filling Zora Asks");

      await zoraAsks
        .fillAsk(
          AdvNFTAddr,
          selectedAdv?.token.id,
          zeroAddr,
          selectedAdv?.ask_askPrice,
          zeroAddr,
          {
            value: selectedAdv?.ask_askPrice,
          }
        )
        .then((e) => e.wait);
      // invoke contract func and mint song nft with ad nft

      console.log("handleAdForm: Updating adv banner");
      const resAdvImageCreation = await adNft
        .updateHash(selectedAdv?.token.id, metadataHash, adImageHash)
        .then((e) => e.wait());
      // // const advNftID = resCreateMusicWithAdv.events?.[3].args
      //   ?.tokenId as BigNumber;
      setIsCreatingAd(false);
    } catch (err) {
      console.log(err);
      setIsCreatingAd(false);
      handleAdModal();
    }
    handleAdModal();
  };

  const handleRentClick = (advNft: GetAllAsks_asks) => {
    console.log(selectedAdv);

    setSelectedAdv(advNft);

    setShowModal(true);
  };
  return (
    <>
      <Header />
      <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
        <Title level={2}>Ad Marketplace</Title>
        <Adlist onHandleModal={handleAdModal} onRentClick={handleRentClick} />

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

interface AdlistProp {
  onHandleModal: () => void;
  onRentClick: (advNft: GetAllAsks_asks) => void;
}

const Adlist: React.FC<AdlistProp> = ({ onRentClick }) => {
  const {
    loading: isLoadingAllAsks,
    data: allAsksConnection,
    error: allAskError,
  } = useQuery<GetAllAsks>(GET_ALL_ASKS, {
    variables: {
      nftContractAddr: AdvNFTAddr.toLowerCase(),
    },
  });

  // add useState hooks here
  const [price, setPrice] = useState("100MATIC");
  const [views, setViews] = useState("100kViews");

  const onChangePrice = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setPrice(e.target.value);
  };

  //  menu items for price dropdown filter
  const priceFilterMenu = (
    <Menu
      items={[
        {
          label: (
            <Radio.Group onChange={onChangePrice} value={price}>
              <Space direction="vertical">
                <Radio value={"100MATIC"}>100 MATIC and under</Radio>
                <Radio value={"200MATIC"}>200 MATIC and under</Radio>
                <Radio value={"300MATIC"}>500 MATIC and under</Radio>
              </Space>
            </Radio.Group>
          ),
          key: "1",
        },
      ]}
    />
  );

  const onChangeViews = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setViews(e.target.value);
  };

  // menu items for number of view dropdown filter
  const viewsFilterMenu = (
    <Menu
      items={[
        {
          label: (
            <Radio.Group onChange={onChangeViews} value={views}>
              <Space direction="vertical">
                <Radio value={"1000Views"}>1000 views and under</Radio>
                <Radio value={"10kViews"}>10K views and under</Radio>
                <Radio value={"50kViews"}>50K views and under</Radio>
                <Radio value={"100kViews"}>100K views and under</Radio>
                <Radio value={"1MViews"}>1 million+ views</Radio>
              </Space>
            </Radio.Group>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <>
     {/* start dropdowns */}
     <div className="flex flex-row items-center mb-3">
        <span>Filter by</span>
        <Dropdown overlay={priceFilterMenu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="inline-block px-6 py-2 border shadow text-black font-medium text-xs leading-tight uppercase rounded-full ml-4">
              Price
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={viewsFilterMenu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="inline-block px-6 py-2 border shadow text-black font-medium text-xs leading-tight uppercase rounded-full ml-4">
              Views
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      {/* end dropdowns */}

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
          extra={
            <Button onClick={() => onRentClick(item)}>Rent Space</Button>
          }
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
      </>
  );
};

interface TitleProps {
  item: GetAllAsks_asks;
}

const TitleNode: React.FC<TitleProps> = ({ item }) => {
  const [metaData, setMetaData] = useState<AdvNftMetaData>();

  const fetchMetaData = async () => {
    const advMetaData = await fetchIpfs<AdvNftMetaData>(
      item.token.metaDataHash
    );
    setMetaData(advMetaData);
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
