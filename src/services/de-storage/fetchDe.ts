export async function fetchDe<T>(resourceUrl: string): Promise<T | undefined> {

    if (resourceUrl.startsWith("data:application/json;base64,")) {
        const json_str = atob(resourceUrl.substring(29))

        return JSON.parse(json_str)
    }
    const url = deToHttps(resourceUrl)
    const fetchRes = await fetch(url);
    try {
        const fetchJson = await fetchRes.json();
        return fetchJson as T

    } catch (error) {
        return undefined
    }
}

// helper function to transform uri with this format: ar://
export function deToHttps(url: string) {
    if (url.startsWith("ar://")) {
        const arPrefix = "https://arweave.net/";
        return url.replace("ar://", arPrefix);
    } else if (url.startsWith("ipfs://")) {
        const ipfsPrefix = "https://nftstorage.link/ipfs/";
        return url.replace("ipfs://", ipfsPrefix);
    } else {
        return url
    }
}