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


const AdvertisementTab: React.FC = () =>{

// query for data
// pass data to components
// fetchMetadata uri's for ad music
// replace image with new


const {address} = useAccount()
  
const {
    loading: isLoading,
    data: allAds,
    error: error,
  } = useQuery<GetAdvertiserAds>(GET_ADVERTISER_ADS,{
    variables: {
      advertiserAddress: address?.toLowerCase(),
    },
  });

  console.log(allAds)

  

    return (
      <>


      </>
    )
}

export default AdvertisementTab









