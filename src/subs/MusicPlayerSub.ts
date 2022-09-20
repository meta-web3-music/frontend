import { Subject } from "rxjs"
import { TMusicPlayer_MusicNft } from "../components/MusicPlayer/MusicPlayer"

export const MusicPlayerSub = new Subject<TMusicPlayer_MusicNft | undefined>()