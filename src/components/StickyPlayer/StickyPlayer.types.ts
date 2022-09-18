import { GetAllMusic_musicNFTs } from "../../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";

export interface StickyPlayerProps {
  musicNft: Omit<GetAllMusic_musicNFTs, "advNfts">;
  onClosePlayer: () => void;
}
