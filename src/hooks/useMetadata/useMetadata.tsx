import {useEffect, useState} from 'react'
import { fetchIpfs } from '../../services/ipfs/fetchIpfs';
import { GetUserListedMusic_musicNFTs } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetUserListedMusic";
import { MusicNftMetaData } from "../../types/MusicNFTData";


// accept metadata directly
 

export const useMusicMetadata = (item:GetUserListedMusic_musicNFTs) =>{
    
const [music, setMusic] = useState<MusicNftMetaData>();

  const fetchMetaData = async () => {
    const musicMetaData = await fetchIpfs<MusicNftMetaData>(
      item.metaDataUri
    );
    setMusic(musicMetaData);
  };

  useEffect(() => {
    fetchMetaData();
  }, []);

  return music;
}


    