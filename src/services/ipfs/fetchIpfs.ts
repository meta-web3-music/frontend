// helper function to transform uri with this format: ipfs://
export async function fetchIpfs<T>(ipfsUrl: string): Promise<T> {
    const url = ipfsToHttps(ipfsUrl)
    const fetchRes = await fetch(url);
    const fetchJson = await fetchRes.json();
    return fetchJson as T
}

export function ipfsToHttps(ipfsUrl: string) {
    const ipfsPrefix = "https://nftstorage.link/ipfs/";
    const url = ipfsUrl.replace("ipfs://", ipfsPrefix);
    return url
}