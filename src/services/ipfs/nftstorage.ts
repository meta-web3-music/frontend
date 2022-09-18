import { CIDString, NFTStorage } from "nft.storage"

type AsyncStoreRes = {
    storePromise: Promise<CIDString>;
    hash: string;
}

export const asyncStore = async (client: NFTStorage, blob: Blob): Promise<AsyncStoreRes> => {
    const res = await NFTStorage.encodeBlob(
        blob
    );
    const storeCarPromise = NFTStorage.storeCar(client, res.car);
    return {
        storePromise: storeCarPromise,
        hash: res.cid.toString()
    }
}