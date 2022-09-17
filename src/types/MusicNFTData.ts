export interface MusicNftMetaData {
    body: Body
    origin?: Origin
}

interface Body {
    artist: string
    artwork: Artwork
    duration: number
    mimeType: string
    notes: string
    project: null
    title: string
    trackNumber: string
    version: string
    visualizer: string
}

interface Artwork {
    info: Info
    isNft: boolean
    nft: null
}

interface Info {
    mimeType: string
    uri: string
}

interface Origin {
    algorithm: string
    encoding: string
    signature: string
    publicKey: string
}
