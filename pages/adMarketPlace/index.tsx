import { useState } from "react";

// antd imports
import { Typography} from "antd";
const { Title, Text } = Typography;

import {
  GetAllAsks_asks,
} from "../../src/graph-ql/queries/GET_ALL_ASKS/__generated__/GetAllAsks";

import { AdvNFTAddr, ZoraAskAddr } from "../../src/env";
import { AdvNftMetaData } from "../../src/types/AdvNFTData";

// custom-component imports
import AdModal from "../../src/components/AdModal/AdModal";
import Header from "../../src/components/Header/header";
import Adlist from "../../src/components/MarketPlacePage/Adlist/Adlist";

// wagmi imports
import {useSigner} from 'wagmi'

import { NFTStorage, File } from "nft.storage";

import {
  AdvNFT__factory,
  ZoraAsk__factory,
} from "../../src/contracts";



// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

const AdMarketPlace: React.FC = () => {


  const [selectedAdv, setSelectedAdv] = useState<GetAllAsks_asks>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isCreatingAd, setIsCreatingAd] = useState<boolean>(false);
  const {data: signer} = useSigner()

  const handleAdModal = () => {
    setShowModal(!showModal);
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

      const adNft = AdvNFT__factory.connect(AdvNFTAddr, signer);
      const zoraAsks = ZoraAsk__factory.connect(ZoraAskAddr, signer);
      const zeroAddr = "0x0000000000000000000000000000000000000000";
      console.log(selectedAdv);
      if (!selectedAdv?.token.id) {
        throw new Error("Failed to get selected adv id");
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


export default AdMarketPlace;
