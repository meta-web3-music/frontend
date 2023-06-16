import { GetAllMusicQuery } from "../../graph-ql/queries/muzik/__generated__/graphql"
interface AdBannerProps {
    advNft?: GetAllMusicQuery["musicNFTs"][0]["advNfts"][0]
}

export type { AdBannerProps }