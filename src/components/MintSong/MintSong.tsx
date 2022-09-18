import React, { useState } from "react";

import { NFTStorage } from "nft.storage";
import { MusicNftMetaData } from "../../types/MusicNFTData";

// web3 imports
import { MarketPlace__factory, MusicNFT__factory } from "../../contracts";

import { BigNumber } from "ethers";

import { AdvNFTAddr, MusicNFTAddr, MarketPlaceAddr } from "../../env";

import { AdvNftMetaData } from "../../types/AdvNFTData";

// custom-component imports
import MintSongButton from "./MintSongButton/MintSongButton";
import MintSongModal from "./MintSongModal/MintSongModal";

// wagmi imports
import { useSigner } from "wagmi";
import { MintMusicWAdFormValues } from "./MintSongModal/MintForm/MintForm.types";

// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

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

      // store metadata of music on nft.storage
      const musicAssetHash = await client.storeBlob(
        formData.songFile[0].originFileObj
      );

      const artWorkHash = await client.storeBlob(
        formData.artWorkFile[0].originFileObj
      );

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
          notes: formData.adSpacePrice,
          project: null,
          title: formData.songName,
          trackNumber: "",
          version: "",
          visualizer: "",
        },
      };

      // store music nft metadata on nft.storage
      const musicMetadataHash = await client.storeBlob(
        new Blob([JSON.stringify(metaDataObj)])
      );

      // create metadata object for advertisement nft
      const advNftDataObj: AdvNftMetaData = {
        description: `Adv nft for ${formData.songName} NFT`,
        mimeType: "image/jpeg",
        name: `${formData.songName}ADV NFT`,
        version: "",
      };

      // store advertisement nft metadata on nft.storage
      const advNftMetaDataHash = await client.storeBlob(
        new Blob([JSON.stringify(advNftDataObj)])
      );

      // connect to music nft smart-contract
      const musicNft = MusicNFT__factory.connect(MusicNFTAddr, signer);

      // invoke contract func and mint song nft with ad nft
      const resCreateMusicWithAdv = await musicNft
        .createMusicWithAdv(
          musicMetadataHash,
          musicAssetHash,
          advNftMetaDataHash,
          // TODO: generate this, maybe not important for mvp
          "advAssetHash",
          // formData.adDuration returns number of days
          formData.adDurationDays ?? 3 * 86400 // 1 Day == 86400 seconds
        )
        .then((e) => e.wait());
      console.log("events");
      console.log(resCreateMusicWithAdv);
      const advNftID = resCreateMusicWithAdv.events?.[2].args
        ?.tokenId as BigNumber;

      console.log("Creating ask");
      console.log("adv id is", advNftID);
      const marketPlace = MarketPlace__factory.connect(MarketPlaceAddr, signer);
      await marketPlace.createMarketItem(AdvNFTAddr, advNftID.toNumber(), 123);

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
