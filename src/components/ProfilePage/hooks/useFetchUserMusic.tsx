import { useAccount } from "wagmi";
import {useQuery} from '@apollo/client'
import { GetUserListedMusic } from "../../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetUserListedMusic";
import { GET_USER_LISTED_MUSIC } from "../../../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";

 const useFetchUserMusic = () =>{

    const {address} = useAccount()
  
      const {
          loading: isLoading,
          data: allMusic,
          error: error,
        } = useQuery<GetUserListedMusic>(GET_USER_LISTED_MUSIC,{
          variables: {
            userAddress: address?.toLowerCase()
          },
        });
  
        const music = allMusic?.musicNFTs
  
        return  {music,isLoading,error}
  }


  export default useFetchUserMusic
  
