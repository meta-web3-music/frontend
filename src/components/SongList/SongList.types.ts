import { GetAllMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";

interface SongListProps {
  playSong: (musicNft: GetAllMusicQuery["octaveTokens"][0]) => void;
}

export type { SongListProps }