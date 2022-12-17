import React, { useState } from "react";

import { CIDString } from "nft.storage";
import { MusicNftMetaData } from "../../types/MusicNFTData";

// web3 imports
import { MarketPlace__factory, MusicNFT__factory } from "../../contracts";

import { BigNumber, ethers } from "ethers";
import { AdvNFTAddr, MusicNFTAddr, MarketPlaceAddr } from "../../env";

import { AdvNftMetaData } from "../../types/AdvNFTData";

// custom-component imports
import MintSongButton from "./MintSongButton/MintSongButton";
import MintSongModal from "./MintSongModal/MintSongModal";

// wagmi imports
import { useSigner } from "wagmi";
import { MintMusicWAdFormValues } from "./MintSongModal/MintForm/MintForm.types";
import { asyncStore } from "../../services/ipfs/nftstorage";

const MintSong: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const { data: signer } = useSigner();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleMintForm = async (formData: MintMusicWAdFormValues) => {
    if (
      !signer ||
      !formData.songFile[0].originFileObj ||
      !formData.artWorkFile[0].originFileObj
    ) {
      //TODO: error
      return;
    }
    try {
      setIsMinting(true);

      const storePromises: Promise<CIDString>[] = [];
      // store metadata of music on nft.storage

      const { hash: musicAssetHash, storePromise: storeMusicAssetPromise } =
        await asyncStore(formData.songFile[0].originFileObj);
      storePromises.push(storeMusicAssetPromise);

      const { hash: artWorkHash, storePromise: storeArtWorkHash } =
        await asyncStore(formData.artWorkFile[0].originFileObj);
      storePromises.push(storeArtWorkHash);

      // create metadata object for music nft
      const metaDataObj: MusicNftMetaData = {
        body: {
          artist: formData.artistName,
          artwork: {
            info: {
              mimeType: "image/jpeg",
              uri: "ipfs://" + artWorkHash,
            },
            isNft: false,
            nft: null,
          },
          duration: 100,
          mimeType: "audio/mp3",
          notes: `Song with price ${formData.adSpacePrice}`,
          project: null,
          title: formData.songName,
          trackNumber: "",
          version: "",
          visualizer: "",
        },
      };
      // store music nft metadata on nft.storage
      const {
        hash: musicMetaDataHash,
        storePromise: storeMusicMetaDataPromise,
      } = await asyncStore(new Blob([JSON.stringify(metaDataObj)]));
      storePromises.push(storeMusicMetaDataPromise);

      // create metadata object for advertisement nft
      const advNftDataObj: AdvNftMetaData = {
        description: `Adv nft for ${formData.songName} NFT`,
        mimeType: "image/jpeg",
        name: `${formData.songName}ADV NFT`,
        version: "",
        external_url: "",
      };

      // store advertisement nft metadata on nft.storage
      const {
        hash: advNftMetaDataHash,
        storePromise: storeAdvNFTMetaDataPromise,
      } = await asyncStore(new Blob([JSON.stringify(advNftDataObj)]));
      storePromises.push(storeAdvNFTMetaDataPromise);

      // connect to music nft smart-contract
      const musicNft = MusicNFT__factory.connect(MusicNFTAddr, signer);

      // invoke contract func and mint song nft with ad nft
      const resCreateMusicWithAdv = await musicNft
        .createMusicWithAdv(
          musicMetaDataHash,
          musicAssetHash,
          advNftMetaDataHash,
          // TODO: generate this, maybe not important for mvp
          "",
          // formData.adDuration returns number of days
          (formData.adDurationDays ?? 3) * 86400 // 1 Day == 86400 seconds
        )
        .then((e) => e.wait());
      console.log("events");
      console.log(resCreateMusicWithAdv);
      const advNftID = resCreateMusicWithAdv.events?.[2].args
        ?.tokenId as BigNumber;
      ethers.utils.parseEther;
      const advSpacePrice_BigInt = ethers.utils.parseEther(
        formData.adSpacePrice.toString()
      );
      console.log(advSpacePrice_BigInt);
      console.log("Creating market item");
      console.log("adv id is", advNftID);
      const marketPlace = MarketPlace__factory.connect(MarketPlaceAddr, signer);
      const createMarketItemPromise = marketPlace
        .createMarketItem(AdvNFTAddr, advNftID.toNumber(), advSpacePrice_BigInt)
        .then((e) => e.wait());

      await Promise.all([createMarketItemPromise, ...storePromises]);
      // end minting
      setIsMinting(false);
      toggleModal();
    } catch (err: unknown) {
      setIsMinting(false);
      console.log(err);
    }

    // close modal
  };

  return (
    <>
      <MintSongButton onToggleModal={toggleModal} />
      <MintSongModal
        isMinting={isMinting}
        isVisible={showModal}
        onHandleModal={toggleModal}
        onHandleMintForm={(formData) => handleMintForm(formData)}
      />
    </>
  );
};

export default MintSong;
