import React, { useState, useEffect } from "react";
import MintPreModal from "./MintPreModal";
import MintModal from "./MintModal";
import { FaCaretDown } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSIC } from "../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import { NFTStorage, File } from "nft.storage";
import SongList from './SongList'

// initialize new nft instance
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


    try{
      setIsMinting(true)

      // store music file in IPFS 
      const musicMetaDataHash = await client.storeBlob(
        formData.upload[0].originFileObj
      );
      console.log(musicMetaDataHash)

      // create nft object
      const nftMetaData={
        image: formData.upload[0].originFileObj, // use image Blob as `image` field
        name: formData.songName,
        mimeType:'audio/wav',
        description: "This is a hackathon project. Where is it all being stored?",
      }

      const metadata = await client.store(nftMetaData);
      console.log(metadata)

      
      // create payload object for smart-contract
      // TODO: add artistName, adSpacePrice when creating contract
      const nftPayload = {
        musicMetaDataHash:metadata.url,
        advMetaDataHash: '',
        advExpirationDuration: 300000, // 3days
      }
      // make request to contract
      // getback tokenId and store in state

      const stateObject ={
        id:'', // returned token ID from contract
        name: formData.name,
        ownerAddress: '0x34...7463',
        artist: formData.artist,
        adSpacePrice: '0.2',
        music:musicMetaDataHash, // preferably get ipfs url
        noOfViews:'3M'
      }

      // save in state locally

      // close modal
      handleModal();
    }catch(err){
      setIsMinting(false)
      console.log(err)
      handleModal();
    }

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
