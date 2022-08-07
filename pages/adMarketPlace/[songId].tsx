import {useContext, useEffect,useState} from 'react'
import { useRouter } from "next/router"
import { Typography,Button } from 'antd'
import AdModal from '../../src/components/AdModal'
import { NFTStorage, File } from "nft.storage";
import { AdvNftMetaData } from "../../src/types/AdvNFTData";
import { BigNumber } from "ethers";
import {
    AdvNFT__factory,
    ZoraAsk__factory,
    ZoraModuleManager__factory,
  } from "../../src/contracts";
  import {
    AdvNFTAddr,
    ZoraAskAddr,
    ZoraModuleManagerAddr,
  } from "../../src/env";
import { NextPage } from 'next';
import { WalletContext } from '../../src/contexts/WalletContext';

// create client instance for nft.storage
const client = new NFTStorage({
    token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
  });


const {Title, Text} = Typography;

const SongAdPage = () =>{
  const walletContext = useContext(WalletContext)
    const router = useRouter()
    
    const [selectedSong,setSelectedSong] =useState<object>()
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isCreatingAd, setIsCreatingAd] = useState<boolean>(false)

    useEffect(() => {
      const {songId} = router.query;
      const songObject = listData.find(song=>song.id === Number(songId))
      // fetch data for this particular song
      // use graphql to do this.

      //update state
      setSelectedSong(songObject);
    }, [])


    const handleAdModal = () =>{
        setShowModal(!showModal);
    }

    const navigateBack = () =>{
        router.push('/adMarketPlace')
    }

    const handleAdForm = async(formData:any) =>{
    
    try{
    // start creating add
    setIsCreatingAd(true);

    // store metadata of ad image on nft.storage
    const adImageHash = await client.storeBlob(
      formData.adFile[0].originFileObj
    );

    // create metadata object for advertisement nft
    const advNftDataObj: AdvNftMetaData = {
        description: `Adv nft for NFT`,
        mimeType: "image/jpeg",
        name: `${formData.rentDuration}ADV NFT`,
        version: "",
      };

    console.log(adImageHash)
   const signer = (await walletContext.getWeb3Provider()).getSigner()

    // connect to music nft smart-contract
    const adNft = AdvNFT__factory.connect(AdvNFTAddr, signer);


    // invoke contract func and mint song nft with ad nft
    const resAdvImageCreation = await adNft.updateHash(
            formData.rentDuration
      )
      .then((e) => e.wait());
    // const advNftID = resCreateMusicWithAdv.events?.[3].args
      ?.tokenId as BigNumber;

      setIsCreatingAd(false)
    }catch(err){
        setIsCreatingAd(false)
        // close modal
        handleAdModal()
    }
    
    // close modal
    handleAdModal()

      }

    return(
        <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
            <Button type='link' style={{marginBottom:'1em'}} onClick={navigateBack} >Back to marketplace</Button>

            <Title level={2}>{selectedSong && selectedSong.name}</Title>

            <div style={{display:'flex', flexDirection:'column',alignItems:'center', border:'1px dashed #e5e5e5',padding:'1.5em'}}>
                <Title level={5}>Mint Song NFT</Title>
                <Text type='secondary'>
                    Increase your business outreach by renting an adspace here
                </Text>
                <Button onClick={handleAdModal} >
                    Mint
                </Button>

                <AdModal isCreatingAd={isCreatingAd} onHandleAdForm={handleAdForm} onHandleModal={handleAdModal} isVisible={showModal}/>

             </div>
        </div>
    )
}

export default SongAdPage

const listData = [
    {
      id:1,
      name: 'Call me by name',
      ownerAddress: '0x34...7463',
      artist: 'Mujahid',
      adSpacePrice: '0.2',
      music:'ipfs url string to be ste to source',
      thumbnail: 'music thumbnail string if it exists',
      noOfViews:'3M'
    },
    {
      id:2,
      name: 'Last Last',
      ownerAddress: '0x34...7463',
      artist: 'Burna Boy',
      adSpacePrice: '0.2',
      music:'ipfs url string to be ste to source',
      thumbnail: 'music thumbnail string if it exists',
      noOfViews:'360K'
    },
    {
      id:3,
      name: 'Girls like us',
      ownerAddress: '0x34...7463',
      artist: 'Zoe wooes',
      adSpacePrice: '0.2',
      music:'ipfs url string to be ste to source',
      thumbnail: 'music thumbnail string if it exists',
      noOfViews:'430K'
    },
  
  ]