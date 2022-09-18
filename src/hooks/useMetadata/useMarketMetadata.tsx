import {useEffect, useState} from 'react'
import { fetchIpfs } from '../../services/ipfs/fetchIpfs';
import { GetUserUnsold_marketItems, GetUserUnsold_marketItems_token_musicNFT} from "../../graph-ql/queries/GET_UNSOLD//__generated__/GetUserUnsold";



// accept metadata directly
 

export const useMarketMetadata = (item:GetUserUnsold_marketItems) =>{
    
const [music, setMusic] = useState<unknown>();

  const fetchMetaData = async () => {
    const musicMetaData = await fetchIpfs(
      item.token.musicNFT.metaDataUri
    );
    setMusic(musicMetaData);
  };

  useEffect(() => {
    fetchMetaData();
  }, []);

  return music;
}


    