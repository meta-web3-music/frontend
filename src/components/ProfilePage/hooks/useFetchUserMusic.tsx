import { useAccount } from "wagmi";
import {useQuery} from '@apollo/client'

import { GET_USER_UNSOLD } from "../../../graph-ql/queries/GET_UNSOLD/getUnsold";
import { GetUserUnsold } from "../../../graph-ql/queries/GET_UNSOLD/__generated__/GetUserUnsold";

 const useFetchUserMusic = () =>{

    const {address} = useAccount()
  
      const {
          loading: isLoading,
          data: allAsk,
          error: error,
        } = useQuery<GetUserUnsold>(GET_USER_UNSOLD,{
          variables: {
            sellerAddress:address?.toLowerCase()
          },
        });
  
        const music = allAsk?.marketItems
  
        return  {music,isLoading,error}
  }


  export default useFetchUserMusic
  
