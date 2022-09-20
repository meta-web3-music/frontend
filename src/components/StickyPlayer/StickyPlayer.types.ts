import { TMusicPlayer_MusicNft } from "../MusicPlayer/MusicPlayer";

export interface StickyPlayerProps {
  musicNft?: TMusicPlayer_MusicNft;
  onClosePlayer: () => void;
}
