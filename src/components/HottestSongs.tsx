import React, { useState, useEffect, useContext } from "react";
import MintPreModal from "./MintPreModal";
import MintModal from "./MintModal";
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSIC } from "../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import { NFTStorage, File } from "nft.storage";
import { MusicNftMetaData } from "../types/MusicNFTData";
import {
  MusicNFT__factory,
  ZoraAsk__factory,
  ZoraModuleManager__factory,
} from "../contracts";
import {
  AdvNFTAddr,
  MusicNFTAddr,
  ZoraAskAddr,
  ZoraModuleManagerAddr,
} from "../env";
import { AdvNftMetaData } from "../types/AdvNFTData";
import { BigNumber } from "ethers";
import SongList from "./SongList";
import Web3Modal from "web3modal";
import { providers } from "ethers";
import { WalletContext } from "../contexts/WalletContext";

// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

const HottestSongs: React.FC = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const walletContext = useContext(WalletContext);
  // const {
  //   loading: isLoadingAllMusic,
  //   data: allMusicConnection,
  //   error: allMusicError,
  // } = useQuery<GetAllMusic>(GET_ALL_MUSIC, { variables: {} });

  // function to handle toggling of minting modal
  const handleModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleMintForm = async (formData: any) => {
    try {
      const signer = (await walletContext.getWeb3Provider()).getSigner();
      setIsMinting(true);

      // store metadata of music on nft.storage
      const musicAssetHash = await client.storeBlob(
        formData.upload[0].originFileObj
      );

      // create metadata object for music nft
      const metaDataObj: MusicNftMetaData = {
        body: {
          artist: formData.songArtist,
          artwork: {
            info: {
              mimeType: "image/jpeg",
              uri: "cover image uri",
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
          300000
        )
        .then((e) => e.wait());
      console.log("events");
      console.log(resCreateMusicWithAdv);
      const advNftID = resCreateMusicWithAdv.events?.[2].args
        ?.tokenId as BigNumber;

      const zoraModuleManager = ZoraModuleManager__factory.connect(
        ZoraModuleManagerAddr,
        signer
      );

      const isModuleApproved = await zoraModuleManager.isModuleApproved(
        walletContext.walletAddress,
        ZoraAskAddr
      );
      if (!isModuleApproved) {
        console.log("Setting module approval");

        await zoraModuleManager.setApprovalForModule(ZoraAskAddr, true);
      }

      console.log("Creating ask");
      console.log("adv id is", advNftID);

      const zoraNft = ZoraAsk__factory.connect(ZoraAskAddr, signer);
      await zoraNft.createAsk(
        AdvNFTAddr,
        advNftID.toNumber(),
        123,
        "0x0000000000000000000000000000000000000000",
        walletContext.walletAddress,
        0
      );
      // end minting
      setIsMinting(false);
      handleModal();
    } catch (err: any) {
      setIsMinting(false);
      console.log(err);
      console.log(err.stack);
    }

    // close modal
  };

  const playSong = () => {};

  return (
    <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
      <h2 className="text-2xl font-bold">Hottest Songs</h2>
      <h4>Place your ads under the hottest songs</h4>
      <MintPreModal setDisplayModal={setDisplayModal} />
      <MintModal
        onHandleModal={handleModal}
        onHandleMintForm={handleMintForm}
        isVisible={displayModal}
        isMinting={isMinting}
      />
      <SongList />
    </div>
  );
};

export default HottestSongs;
