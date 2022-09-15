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
            userAddress:'0x485a3fbc66ccddcd0bf65c7f4a318d08878d411b',
            expirationTime: 0
          },
        });
  
        const ads = allAds?.advNFTs
  
        return  {ads,isLoading,error}
  }


  export default useFetchExpiredAds
  
