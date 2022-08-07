import React, { useState, useEffect } from "react";
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
import SongList from './SongList'
import Web3Modal from "web3modal";
import { providers } from "ethers";

import { Typography } from "antd";

const {Text,Title} = Typography;

// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

interface HottestSongsProps{
  signer: any
}

type songShape={
  name:string,
  artist:string,
  url:string
}

const HottestSongs: React.FC<HottestSongsProps> = ({signer}) => {

  const [displayModal, setDisplayModal] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [selectedSong,setSelectedSong] = useState({name:'Unknown',artist:'Unknown',url:''});
  const [isFetchingBanner, setIsFetchingBanner] = useState(false);

  // function to handle toggling of minting modal
  const handleModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleMintForm = async (formData: any) => {

    try{
    // start minting
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
    // end minting
    setIsMinting(false);
  }catch(err){
    setIsMinting(false);
    console.log(err)
    handleModal()
  }

    // close modal
    handleModal();
  };

  const handlePlaySong = async(song:songShape) =>{
    try{
      setIsFetchingBanner(true);
      //set local state
      setSelectedSong({
        name:song.name,
        artist: song.artist,
        url: song.url
      })
    }catch(err){
      setIsFetchingBanner(false);
    }
      // set selected Song state
      // set banner place holder to start loading while fetching image from ipfs

  }

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
      <SongList/>
      <StickyPlayer selectedSong={selectedSong}/>
    </div>
  );
};

export default HottestSongs;


interface StickyPlayerProps{
  selectedSong:songShape
}

const StickyPlayer: React.FC<StickyPlayerProps> = ({selectedSong}) =>{
  return(
    <div style={{background:'#ffffff',boxShadow:'1px 0px 12px 1px rgba(0,0,0,0.35)',zIndex:'2',position:'absolute',bottom:'1em',left:'1em',display:'flex',maxWidth:'500px',flexDirection:'column',padding:'.7em 1em'}}>
     <div style={{display:'flex',flexDirection:'column'}}>
      <Title style={{margin:'0'}} level={5}>{selectedSong?.name}</Title>
      <Text type="secondary">{selectedSong?.artist}</Text>
      </div> 
      <audio controls>
        <source src={selectedSong?.url} />
      </audio>
    </div>
  )
}