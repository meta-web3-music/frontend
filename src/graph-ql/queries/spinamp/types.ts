export type Metadata = {
    bpm?: number;
    key?: string;
    isrc?: null;
    name?: string;
    tags?: null;
    genre?: string;
    image?: string;
    title?: string;
    artist?: string;
    lyrics?: Lyrics;
    artwork?: Artwork;
    credits?: null;
    license?: string;
    project?: null;
    version?: string;
    duration?: number;
    mimeType?: string;
    publisher?: null;
    attributes?: Attribute[];
    visualizer?: null;
    description?: string;
    recordLabel?: null;
    trackNumber?: number;
    external_url?: string;
    animation_url?: string;
    losslessAudio?: string;
    locationCreated?: string;
    nftSerialNumber?: number;
    originalReleaseDate?: null;
}

export type Artwork = {
    nft?: null;
    uri?: string;
    mimeType?: string;
}

export type Attribute = {
    value?: string;
    trait_type?: string;
}

export type Lyrics = {
    nft?: null;
    text?: string;
}
