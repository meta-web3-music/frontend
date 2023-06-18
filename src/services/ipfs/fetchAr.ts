export async function fetchAr<T>(arUrl: string): Promise<T | undefined> {
    const url = arToHttps(arUrl)
    const fetchRes = await fetch(url);
    try {
        const fetchJson = await fetchRes.json();
        return fetchJson as T

    } catch (error) {
        return undefined
    }
}

// helper function to transform uri with this format: ar://
export function arToHttps(arUrl: string) {
    const arPrefix = "https://arweave.net/";
    const url = arUrl.replace("ar://", arPrefix);
    return url
}