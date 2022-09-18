import Header from "../../src/components/Header/header";
import { useConnectModal } from "@rainbow-me/rainbowkit";
// antd imports
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Radio, Typography } from "antd";
import type { RadioChangeEvent } from "antd";

import { useQuery } from "@apollo/client";
import { AdvNFTAddr, MarketPlaceAddr } from "../../src/env";
import React, { useState } from "react";
import { AdvNftMetaData } from "../../src/types/AdvNFTData";
// custom-component imports
import AdModal from "../../src/components/AdModal/AdModal";
import { useSigner } from "wagmi";

import {
  GetUnsold,
  GetUnsold_marketItems,
} from "../../src/graph-ql/queries/GET_UNSOLD/__generated__/GetUnsold";
import { GET_UNSOLD } from "../../src/graph-ql/queries/GET_UNSOLD/getUnsold";
import { AdvNFT__factory, MarketPlace__factory } from "../../src/contracts";
import { NFTStorage } from "nft.storage";
import { AdModalFormValues } from "../../src/components/AdModal/AdModalForm/AdModalForm.types";
import { asyncStore } from "../../src/services/ipfs/nftstorage";
import AdListItem from "../../src/components/AdMarketPlace/AdListItem";
import { GetAllMusic_musicNFTs } from "../../src/graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import StickyPlayer from "../../src/components/StickyPlayer/StickyPlayer";

// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});
const { Title } = Typography;

const AdMarketPlace: React.FC = () => {
  const { data: signer } = useSigner();
  const [selectedAdv, setSelectedAdv] = useState<GetUnsold_marketItems>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isCreatingAd, setIsCreatingAd] = useState<boolean>(false);

  const handleAdModal = () => {
    setShowModal(!showModal);
  };

  const handleAdForm = async (formData: AdModalFormValues) => {
    if (!formData.bannerImage[0].originFileObj) {
      //TODO: error
      return;
    }
    try {
      setIsCreatingAd(true);

      const { hash: adImageHash, storePromise: storeAdImagePromise } =
        await asyncStore(client, formData.bannerImage[0].originFileObj);

      const advNftDataObj: AdvNftMetaData = {
        description: `Adv nft for NFT`,
        mimeType: "image/jpeg",
        name: `${selectedAdv?.itemId} ADV NFT`,
        version: "",
        external_url: formData.adUrl,
      };

      console.log("handleAdForm: Adding MetaData to IPFS");

      if (!signer) {
        return;
      }
      const { hash: metaDataHash, storePromise: storeMetaDataPromise } =
        await asyncStore(client, new Blob([JSON.stringify(advNftDataObj)]));

      const adNft = AdvNFT__factory.connect(AdvNFTAddr, signer);
      const marketPlace = MarketPlace__factory.connect(MarketPlaceAddr, signer);

      if (!selectedAdv?.token.id) {
        throw new Error("Failed to get selected adv id");
        return;
      }
      console.log("handleAdForm: Creating Market Sale");

      await marketPlace
        .createMarketSale(AdvNFTAddr, selectedAdv?.token.id, {
          value: selectedAdv?.price,
        })
        .then((e) => e.wait());
      // invoke contract func and mint song nft with ad nft

      console.log("handleAdForm: Updating adv banner");
      const updateHashPromise = adNft
        .updateHash(selectedAdv?.token.id, metaDataHash, adImageHash)
        .then((e) => e.wait());
      // // const advNftID = resCreateMusicWithAdv.events?.[3].args
      //   ?.tokenId as BigNumber;
      await Promise.all([
        updateHashPromise,
        storeAdImagePromise,
        storeMetaDataPromise,
      ]);
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
          onHandleAdForm={(d) => handleAdForm(d)}
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
  const { data: allAsksConnection } = useQuery<GetUnsold>(GET_UNSOLD, {
    variables: {
      nftContractAddr: AdvNFTAddr.toLowerCase(),
    },
  });
  const [selectedSong, setSelectedSong] =
    useState<Omit<GetAllMusic_musicNFTs, "advNfts">>();

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
  const { data: signer } = useSigner();
  const { openConnectModal } = useConnectModal();
  return (
    <>
      {selectedSong && (
        <StickyPlayer
          onClosePlayer={() => setSelectedSong(undefined)}
          musicNft={selectedSong}
        />
      )}
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
      <div className="flex flex-wrap justify-center mb-4">
        {allAsksConnection?.marketItems.map((e) => (
          <AdListItem
            key={e.itemId}
            marketItem={e}
            onBuyClick={!signer ? openConnectModal : () => onRentClick(e)}
            onPlaySong={() => setSelectedSong(e.token.musicNFT)}
          />
        ))}
      </div>
    </>
  );
};

export default AdMarketPlace;
