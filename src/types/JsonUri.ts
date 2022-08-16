export interface JSONUri {
    name: string
    symbol: string
    description: string
    seller_fee_basis_points: number
    image: string
    animation_url?: string
    external_url: string
    attributes: Attribute[]
    collection: Collection
    properties: Properties

}

export interface MusicJsonUri extends JSONUri {
    adv_meta_data_addr: string
}

export interface AdvJsonUri extends JSONUri {
    music_meta_data_addr: string
}

export interface Attribute {
    trait_type: string
    value: string
}

export interface Collection {
    name: string
    family: string
}

export interface Properties {
    files: OffChainFile[]
    category: string
    creators: Creator[]
}

export interface OffChainFile {
    uri: string
    type: string
    cdn?: boolean
}

export interface Creator {
    address: string
    share: number
}

export function NewMusicJson(adv_meta_data_addr: string, songName: string, owner: string, imageFile: OffChainFile, audioFile: OffChainFile): string {
    const jsonObj = {
        animation_url: audioFile.uri,
        attributes: [],
        collection: {
            family: "soltunes music",
            name: "Soltunes Collection"
        },
        description: "Soltunes music",
        external_url: "",
        image: imageFile.uri,
        name: songName,
        properties: {
            files: [
                imageFile, audioFile
            ],
            category: "audio",
            creators: [{
                address: owner,
                share: 100
            }]
        },
        symbol: "MUZ",
        seller_fee_basis_points: 5,
        adv_meta_data_addr
    }
    return JSON.stringify(jsonObj)
}

export function NewAdvJson(music_meta_data_addr: string, songName: string, owner: string, imageFile: OffChainFile): string {
    const jsonObj = {
        attributes: [],
        collection: {
            family: "soltunes adv",
            name: "Soltunes Collection"
        },
        description: "Soltunes adv",
        external_url: "",
        image: imageFile.uri,
        name: songName,
        properties: {
            files: [
                imageFile
            ],
            category: "image",
            creators: [{
                address: owner,
                share: 100
            }]
        },
        symbol: "ADV",
        seller_fee_basis_points: 5,
        music_meta_data_addr
    }
    return JSON.stringify(jsonObj)
}