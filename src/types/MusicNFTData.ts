export interface MusicNftMetaData {
    animation_url: string;
    artist: string;
    artwork: Artwork;
    attributes: Attribute[];
    description: string;
    duration: number;
    external_url: string;
    genre: string;
    image: string;
    license: string;
    losslessAudio: string;
    mimeType: string;
    nftSerialNumber: number;
    name: string;
    title: string;
    trackNumber: number;
    version: string;
}

export type Artwork = {
    mimeType: string;
    uri: string;
    nft: null;
}

export type Attribute = {
    trait_type?: string;
    value: string;
}
