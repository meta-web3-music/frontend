import {useState} from 'react';

// antd imports
import {List,Typography,Button} from 'antd'
const {Title} = Typography;

import {useQuery} from '@apollo/client'

// wagmi imports
import { useAccount, useSigner } from 'wagmi';

// contract imports
import { AdvNFT__factory, MarketPlace__factory } from '../../../contracts';
import { AdvNFTAddr, MarketPlaceAddr } from '../../../env';

// custom-components imports
import ListItem from '../../Shared/ListItem/ListItem';
// import MusicListItem from './MusicListItem';


import { GET_ADVERTISER_ADS } from '../../../graph-ql/queries/GET_ALL_ADS/getAllAds';
import { GetAdvertiserAds } from '../../../graph-ql/queries/GET_ALL_ADS/__generated__/GetAdvertiserAds';
import { asyncStore } from '../../../services/ipfs/nftstorage';
import { NFTStorage } from 'nft.storage';
import { AdvNftMetaData } from '../../../types/AdvNFTData';


// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

const AdvertisementTab: React.FC = () =>{

// query for data
// pass data to components
// fetchMetadata uri's for ad music
// replace image with new


const {address} = useAccount()
const {data:signer} = useSigner()
const [isBurningAd,setIsBurningAd] = useState(false)
const [isReplacingAd,setIsReplacingAd] = useState(false)
const [selectedAd, setSelectedAd] = useState({})
  
const {
    loading: isLoading,
    data: allAds,
    error: error,
  } = useQuery<GetAdvertiserAds>(GET_ADVERTISER_ADS,{
    variables: {
      advertiserAddress: address?.toLowerCase(),
    },
  });

  const burnAdHandler = async() =>{
   const adNftContract = AdvNFT__factory.connect(AdvNFTAddr,signer);
   try{
    setIsBurningAd(true)
     const res = await adNftContract.burn(selectedAd.tokenId)
     setIsBurningAd(false)
   }catch(err:any){
    console.log(err)
    setIsBurningAd(false)
    throw new Error('Error while buring Ads',err)
   }
  }


  const replaceAdHandler = async(formData:any)=>{

    formData.bannerImage[0].originFileObj

    const { hash: adImageHash, storePromise: storeAdImagePromise } =
        await asyncStore(client, formData.bannerImage[0].originFileObj);

        const advNftDataObj: AdvNftMetaData = {
          description: `Adv nft for NFT`,
          mimeType: "image/jpeg",
          name: `${selectedAd?.token.id} ADV NFT`,
          version: "",
          external_url: formData.adUrl,
        };

        const { hash: metaDataHash, storePromise: storeMetaDataPromise } =
        await asyncStore(client, new Blob([JSON.stringify(advNftDataObj)]));

        const adNftContract = AdvNFT__factory.connect(AdvNFTAddr, signer);
        const marketPlaceContract = MarketPlace__factory.connect(MarketPlaceAddr, signer);

  
    try{
      setIsReplacingAd(true);
      
      console.log("handleAdForm: Creating Market Sale");

      await marketPlaceContract
        .createMarketSale(AdvNFTAddr, selectedAd?.token.id, {
          value: selectedAd?.price,
        })
        .then((e) => e.wait());
      // invoke contract func and mint song nft with ad nft

      console.log("handleAdForm: Updating adv banner");
      const updateHashPromise = adNftContract
        .updateHash(selectedAd?.token.id, metaDataHash, adImageHash)
        .then((e) => e.wait());

        await Promise.all([
          updateHashPromise,
          storeAdImagePromise,
          storeMetaDataPromise,
        ]);
        
      setIsReplacingAd(false)
    }catch(err:any){
      console.log(err)
      setIsReplacingAd(false)
      throw new Error('Error while replacing Ads',err)
    }
  }

  console.log(allAds)

    return (
      <>

      </>
    )
}

export default AdvertisementTab









