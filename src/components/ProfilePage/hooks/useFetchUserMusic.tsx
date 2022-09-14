import { useAccount } from "wagmi";
import {useQuery} from '@apollo/client'
import { GetAllMusic } from "../../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import { GET_USER_MUSIC } from "../../../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";

 const useFetchUserMusic = () =>{

    const {address} = useAccount()
  
      const {
          loading: isLoading,
          data: allMusic,
          error: error,
        } = useQuery<GetAllMusic>(GET_USER_MUSIC,{
          variables: {
            userAddress: address?.toLowerCase()
          },
        });
  
        const music = allMusic?.musicNFTs
  
        return  {music,isLoading,error}
  }


  export default useFetchUserMusic
  
