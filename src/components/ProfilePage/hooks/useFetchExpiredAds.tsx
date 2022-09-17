import { useAccount } from "wagmi";
import {useQuery} from '@apollo/client'
import { GetUserExpiredAdspaces } from "../../../graph-ql/queries/GET_ALL_ADS/__generated__/GetUserExpiredAdspaces";
import { GET_USER_EXPIRED_ADSPACES } from "../../../graph-ql/queries/GET_ALL_ADS/getAllAds";

 const useFetchExpiredAds = () =>{

    const {address} = useAccount()
  
      const {
          loading: isLoading,
          data: allAds,
          error: error,
        } = useQuery<GetUserExpiredAdspaces>(GET_USER_EXPIRED_ADSPACES,{
          variables: {
            userAddress:address?.toLowerCase(),
            expirationTime: 0
          },
        });
  
        const ads = allAds?.advNFTs
  
        return  {ads,isLoading,error}
  }


  export default useFetchExpiredAds
  
