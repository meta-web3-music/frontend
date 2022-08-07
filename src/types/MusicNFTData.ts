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
    project: any
    title: string
    trackNumber: any
    version: string
    visualizer: any
}

interface Artwork {
    info: Info
    isNft: boolean
    nft: any
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
