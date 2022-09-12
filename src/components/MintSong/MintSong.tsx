import {useState} from 'react';

import { NFTStorage } from "nft.storage";
import { MusicNftMetaData } from "../../types/MusicNFTData";

// web3 imports
import {
  MusicNFT__factory,
  ZoraAsk__factory,
  ZoraModuleManager__factory,
} from "../../contracts";

import { BigNumber } from "ethers";

import {
  AdvNFTAddr,
  MusicNFTAddr,
  ZoraAskAddr,
  ZoraModuleManagerAddr,
} from "../../env";

import { AdvNftMetaData } from "../../types/AdvNFTData";

// custom-component imports
import MintSongButton from './MintSongButton/MintSongButton';
import MintSongModal from './MintSongModal/MintSongModal';


// wagmi imports
import { useSigner, useAccount } from 'wagmi'


// create client instance for nft.storage
const client = new NFTStorage({
    token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
  });


const MintSong: React.FC = () =>{ 


    const [showModal, setShowModal] = useState(false);
    const [isMinting, setIsMinting] = useState(false)
    const { data: signer } = useSigner()
    const {address} = useAccount()
   

    const toggleModal = () =>{
        setShowModal(!showModal)
    }

    const handleMintForm = async (formData: any) => {
      try { 
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
            // formData.adDuration returns number of days
            formData.adDurationDays * 86400 // 1 Day == 86400 seconds
          )
          .then((e) => e.wait());
        console.log("events");
        console.log(resCreateMusicWithAdv);
        const advNftID = resCreateMusicWithAdv.events?.[2].args
          ?.tokenId as BigNumber;
  
          // connect to zora contract
        const zoraModuleManager = ZoraModuleManager__factory.connect( 
          ZoraModuleManagerAddr,
          signer
        );
  
        const isModuleApproved = await zoraModuleManager.isModuleApproved(
          address,
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
          address,
          0
        );
        // end minting
        setIsMinting(false);
        toggleModal();
      } catch (err: any) {
        setIsMinting(false);
        console.log(err);
        console.log(err.stack);
      }
  
      // close modal
    };
     

    return(
      <>
        <MintSongButton onToggleModal={toggleModal}/>
        <MintSongModal 
          isMinting={isMinting} 
          isVisible={showModal}  
          onHandleModal={toggleModal}
          onHandleMintForm={handleMintForm}
        />
       </>
    )
}


export default MintSong