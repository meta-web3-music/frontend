import { CIDString, NFTStorage } from "nft.storage"

export const nftStorageClient = new NFTStorage({
    token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

type AsyncStoreRes = {
    storePromise: Promise<CIDString>;
    hash: string;
}

export const asyncStore = async (blob: Blob): Promise<AsyncStoreRes> => {
    const res = await NFTStorage.encodeBlob(
        blob
    );
    const storeCarPromise = NFTStorage.storeCar(nftStorageClient, res.car);
    return {
        storePromise: storeCarPromise,
        hash: res.cid.toString()
    }
}