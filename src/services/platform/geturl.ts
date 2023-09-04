import { Network, Platform } from "@/types/Platform";

const replace_chars = /([^a-zA-Z0-9])+/g;
export const getPlatformUrl = (platform: Platform, artist: string, title: string, chainId: Network, platform_internal_id: string) => {
    if (platform == "sound") {
        return `https://www.sound.xyz/${artist
            .replace(replace_chars, "-")}/${title
                .replace(replace_chars, "-")}`
    } else if (platform == "zora") {
        let _chainId: string = chainId;
        if (chainId == "ethereum") {
            _chainId = "eth"
        }
        return `https://zora.co/collect/${_chainId}:${platform_internal_id}`
    } else if (platform == "catalog") {
        return `https://beta.catalog.works/${artist
            .replace(replace_chars, "-")}/${title
                .replaceAll(replace_chars, "-")
            }`
    }
}