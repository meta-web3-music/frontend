import { BehaviorSubject } from "rxjs"
import { TMusicPlayer_MusicNft } from "../components/MusicPlayer/MusicPlayer"

export const MusicPlayerSub = new BehaviorSubject<TMusicPlayer_MusicNft | undefined>(undefined)