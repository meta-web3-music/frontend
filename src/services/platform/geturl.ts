import { Network, Platform } from "@/types/Platform";

export const getPlatformUrl = (platform: Platform, artist: string, title: string, chainId: Network, platform_internal_id: string) => {
    if (platform == "sound") {
        return `https://www.sound.xyz/${artist
            .split(" ")
            .join("-")}/${title
                .replace("(", "")
                .replace(")", "")
                .split(" ")
                .join("-")}`
    } else if (platform == "zora") {
        let _chainId: string = chainId;
        if (chainId == "ethereum") {
            _chainId = "eth"
        }
        return `https://zora.co/collect/${_chainId}:${platform_internal_id}`
    } else if (platform == "catalog") {
        return `https://beta.catalog.works/${artist
            .split(" ")
            .join("-")}/${title
                .replace(" (", "-")
                .replace(") ", "-")
                .replace(" [", "-")
                .replace("] ", "-")
                .replace("]", "-")
                .split(" ")
                .join("-")}`
    }
}