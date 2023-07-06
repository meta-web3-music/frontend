export interface MusicNftMetaData {
    animation_url: string;
    artist: string;
    artwork: Artwork;
    attributes: Attribute[];
    bpm: null;
    credits: null;
    description: string;
    duration: number;
    external_url: string;
    genre: string;
    image: string;
    isrc: null;
    key: null;
    license: string;
    locationCreated: null;
    losslessAudio: string;
    lyrics: null;
    mimeType: string;
    nftSerialNumber: number;
    name: string;
    originalReleaseDate: null;
    project: null;
    publisher: null;
    recordLabel: null;
    tags: null;
    title: string;
    trackNumber: number;
    version: string;
    visualizer: null;
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
