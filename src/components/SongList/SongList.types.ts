import { GetAllMusic_musicNFTs } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

interface SongListProps {
  playSong: (musicNft: GetAllMusic_musicNFTs) => void;
}

export type { SongListProps }