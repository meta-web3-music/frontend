import { GetMyMusicQuery as GetMyMusicQuerySpinamp } from "@/graph-ql/queries/spinamp/__generated__/graphql";

export type SpinampMusicNft = NonNullable<
    NonNullable<
        NonNullable<
            NonNullable<GetMyMusicQuerySpinamp["allProcessedTracks"]>["nodes"][0]
        >["nftsProcessedTracksByProcessedTrackId"]["nodes"][0]
    >["nftByNftId"]
>