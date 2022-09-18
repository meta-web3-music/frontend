import React, { useCallback, useEffect, useState } from "react";

import Header from "../../src/components/Header/header";
import { useConnectModal } from "@rainbow-me/rainbowkit";
// antd imports
import { Typography,List,Button} from "antd";
const { Title, Text } = Typography;

import { useQuery } from "@apollo/client";
import { AdvNFTAddr, MarketPlaceAddr } from "../../src/env";
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
import { AdvNFT__factory, MarketPlace__factory } from "../../src/contracts";
import { NFTStorage } from "nft.storage";
import { AdModalFormValues } from "../../src/components/AdModal/AdModalForm/AdModalForm.types";
import { MusicNftMetaData } from "../../src/types/MusicNFTData";

// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});


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

      const adImageHash = await client.storeBlob(
        formData.bannerImage[0].originFileObj
      );
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
      const metadataHash = await client.storeBlob(
        new Blob([JSON.stringify(advNftDataObj)])
      );
      const adNft = AdvNFT__factory.connect(AdvNFTAddr, signer);
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
      await adNft
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
  const { loading: isLoadingAllAsks, data: allAsksConnection } =
    useQuery<GetUnsold>(GET_UNSOLD, {
      variables: {
        nftContractAddr: AdvNFTAddr.toLowerCase(),
      },
    });

  

  return (
    <>
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
        renderItem={(item) => <AdvItem onRentClick={onRentClick} item={item} />}
      />
    </>
  );
};

interface AdvItemProps {
  item: GetUnsold_marketItems;
  onRentClick: (advNft: GetUnsold_marketItems) => void;
}

const AdvItem = ({ item, onRentClick }: AdvItemProps) => {
  const { data: signer } = useSigner();
  const { openConnectModal } = useConnectModal();
  const [metaData, setMetaData] = useState<MusicNftMetaData>();
  const fetchMetaData = useCallback(async () => {
    const advMetaData = await fetchIpfs<MusicNftMetaData>(
      item.token.musicNFT.metaDataUri
    );
    setMetaData(advMetaData);
  }, [item]);
  useEffect(() => {
    fetchMetaData();
  }, [fetchMetaData, item]);

  return (
    <List.Item
      extra={
        <Button onClick={!signer ? openConnectModal : () => onRentClick(item)}>
          Rent Ad Space
        </Button>
      }
    >
      <List.Item.Meta
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title
              style={{ marginRight: "5px", marginBottom: "0px" }}
              level={5}
            >
              {metaData?.body.title}
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
        }
        description={metaData?.body.artist}
      />
    </List.Item>
  );
};

export default AdMarketPlace;
