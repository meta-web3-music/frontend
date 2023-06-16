import { GetAllMusicQuery } from "@/graph-ql/queries/muzik/__generated__/graphql";

interface SongListProps {
  playSong: (musicNft: GetAllMusicQuery["musicNFTs"][0]) => void;
}

export type { SongListProps }