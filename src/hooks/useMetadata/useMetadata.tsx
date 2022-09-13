import {useEffect, useState} from 'react'
import { fetchIpfs } from '../../services/ipfs/fetchIpfs';
import { GetAllMusic_musicNFTs } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import { MusicNftMetaData } from "../../types/MusicNFTData";

export const useMusicMetadata = (item:GetAllMusic_musicNFTs) =>{
    
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


    