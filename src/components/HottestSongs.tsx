import React, { useState, useEffect } from "react";
import MintPreModal from "./MintPreModal";
import MintModal from "./MintModal";
import { FaCaretDown } from "react-icons/fa";
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
import SongList from './SongList'

// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});


const HottestSongs: React.FC = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [allSongs, setAllSongs] = useState([])

  const {
    loading: isLoadingAllMusic,
    data: allMusicConnection,
    error: allMusicError,
  } = useQuery<GetAllMusic>(GET_ALL_MUSIC, { variables: {} });

  // function to handle toggling of minting modal
  const handleModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleMintForm = async (formData: any) => {
    // query IPFS and store music
    // take back returned music CID
    // create an object payload, stringify and pass as argument to contract function
    const musicAssetHash = await client.storeBlob(
      formData.upload[0].originFileObj
    );
    console.log(musicAssetHash);
    const metaDataObj: MusicNftMetaData = {
      body: {
        artist: "Artist",
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
        notes: "",
        project: null,
        title: "song title",
        trackNumber: "",
        version: "",
        visualizer: "",
      },
    };

    const musicMetadataHash = await client.storeBlob(
      new Blob([JSON.stringify(metaDataObj)])
    );

    const advNftDataObj: AdvNftMetaData = {
      description: "Adv nft for music xyz",
      mimeType: "image/jpeg",
      name: "ADV NFT",
      version: "",
    };

    const advNftMetaDataHash = await client.storeBlob(
      new Blob([JSON.stringify(advNftDataObj)])
    );

    const musicNft = MusicNFT__factory.connect(MusicNFTAddr, signer);
    const resCreateMusicWithAdv = await musicNft
      .createMusicWithAdv(
        musicMetadataHash,
        musicAssetHash,
        advNftMetaDataHash,
        // TODO: generate this, maybe not important for mvp
        "advAssetHash",
        1000
      )
      .then((e) => e.wait());
    const advNftID = resCreateMusicWithAdv.events?.[3].args
      ?.tokenId as BigNumber;

    const zoraModuleManager = ZoraModuleManager__factory.connect(
      ZoraModuleManagerAddr,
      signer
    );

    const isModuleApproved = await zoraModuleManager.isModuleApproved(
      "user addr",
      ZoraAskAddr
    );
    if (!isModuleApproved) {
      await zoraModuleManager.setApprovalForModule(ZoraAskAddr, true);
    }
    const zoraNft = ZoraAsk__factory.connect(ZoraAskAddr, signer);
    await zoraNft.createAsk(
      AdvNFTAddr,
      advNftID,
      123,
      "0x0000000000000000000000000000000000000000",
      "todo: user addr",
      ""
    );

    // close modal
    handleModal();
  };

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
      <SongList songList={allSongs}/>
    </div>
  );
};

export default HottestSongs;
