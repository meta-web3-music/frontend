import Header from "../../src/components/Header/header";
import { useConnectModal } from "@rainbow-me/rainbowkit";
// antd imports
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space, Radio, Typography, List } from "antd";
import type { RadioChangeEvent } from "antd";

import { useQuery } from "@apollo/client";
import { AdvNFTAddr, MarketPlaceAddr } from "../../src/env";
import React, { useCallback, useEffect, useState } from "react";
import { AdvNftMetaData } from "../../src/types/AdvNFTData";
// custom-component imports
import AdModal from "../../src/components/AdModal/AdModal";
import { useSigner } from "wagmi";

import { fetchIpfs } from "../../src/services/ipfs/fetchIpfs";
import {
  GetUnsold,
  GetUnsold_marketItems,
} from "../../src/graph-ql/queries/GET_UNSOLD/__generated__/GetUnsold";
import { GET_UNSOLD } from "../../src/graph-ql/queries/GET_UNSOLD/getUnsold";
import { MarketPlace__factory } from "../../src/contracts";

const { Title } = Typography;

const AdMarketPlace: React.FC = () => {
  const { data: signer } = useSigner();
  const [selectedAdv, setSelectedAdv] = useState<GetUnsold_marketItems>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isCreatingAd, setIsCreatingAd] = useState<boolean>(false);

  const handleAdModal = () => {
    setShowModal(!showModal);
  };

  const handleAdForm = async () => {
    try {
      setIsCreatingAd(true);

      console.log("handleAdForm: Adding MetaData to IPFS");

      if (!signer) {
        return;
      }
      const marketPlace = MarketPlace__factory.connect(MarketPlaceAddr, signer);

      if (!selectedAdv?.token.id) {
        throw new Error("Failed to get selected adv id");
      }
      console.log("handleAdForm: Creating Market Sale");

      await marketPlace
        .createMarketSale(AdvNFTAddr, selectedAdv?.token.id, {
          value: selectedAdv?.price,
        })
        .then((e) => e.wait());
      // invoke contract func and mint song nft with ad nft

      console.log("handleAdForm: Updating adv banner");
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

  const handleRentClick = (advNft: GetUnsold_marketItems) => {
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
  onRentClick: (advNft: GetUnsold_marketItems) => void;
}

const Adlist: React.FC<AdlistProp> = ({ onRentClick }) => {
  const { data: signer } = useSigner();
  const { openConnectModal } = useConnectModal();
  const { loading: isLoadingAllAsks, data: allAsksConnection } =
    useQuery<GetUnsold>(GET_UNSOLD, {
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
        dataSource={allAsksConnection?.marketItems}
        renderItem={(item) => {
          return (
            <List.Item
              extra={
                <Button
                  onClick={!signer ? openConnectModal : () => onRentClick(item)}
                >
                  Rent Ad Space
                </Button>
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
  item: GetUnsold_marketItems;
}

const TitleNode: React.FC<TitleProps> = ({ item }) => {
  const [metaData, setMetaData] = useState<AdvNftMetaData>();
  const fetchMetaData = useCallback(async () => {
    const advMetaData = await fetchIpfs<AdvNftMetaData>(
      item.token.metaDataHash
    );
    setMetaData(advMetaData);
  }, [item]);
  useEffect(() => {
    fetchMetaData();
  }, [fetchMetaData, item]);
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
