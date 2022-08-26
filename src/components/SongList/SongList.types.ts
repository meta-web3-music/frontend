import { GetAllMusic_musicNFTs } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

interface SongListProps{
    // playSong:(uri:string)=>void,
    dataSource: GetAllMusic_musicNFTs[],
    isLoadingMusic:boolean
  }

  export type {SongListProps}