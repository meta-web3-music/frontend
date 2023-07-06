export async function fetchDe<T>(arUrl: string): Promise<T | undefined> {
    const url = deToHttps(arUrl)
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