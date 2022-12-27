import { BigNumber, BigNumberish, Signer } from "ethers";
import { CIDString } from "nft.storage";
import { FetchSignerResult } from "@wagmi/core";
import { AdvNFT__factory } from "../../contracts";
import { AdvNFTAddr } from "../../env";
import { asyncStore } from "../ipfs/nftstorage";
import { AdvNftMetaData } from "../../types/AdvNFTData";

export const mintAd = async (songName: string, musicTokenId: BigNumberish, expirationDuration: number, signer: FetchSignerResult<Signer>) => {

    if (!signer) {
        //TODO: error
        return;
    }
    try {
        const storePromises: Promise<CIDString>[] = [];
        // store metadata of music on nft.storage


        // create metadata object for advertisement nft
        const advNftDataObj: AdvNftMetaData = {
            description: `Adv nft for ${songName} NFT`,
            mimeType: "image/jpeg",
            name: `${songName}ADV NFT`,
            version: "",
            external_url: "",
            ad_audio_url: "",
            ad_description: "",
            ad_title: ""
        };
        // store advertisement nft metadata on nft.storage
        const {
            hash: advNftMetaDataHash,
            storePromise: storeAdvNFTMetaDataPromise,
        } = await asyncStore(new Blob([JSON.stringify(advNftDataObj)]));
        storePromises.push(storeAdvNFTMetaDataPromise);

        // connect to ad nft smart-contract
        const advNft = AdvNFT__factory.connect(AdvNFTAddr, signer);

        // invoke contract func and mint ad nft
        const resCreateAd = await advNft.
            createAdSpace(musicTokenId,
                advNftMetaDataHash,
                // TODO: generate this, maybe not important for mvp
                "",
                expirationDuration * 86400).
            then(e => e.wait())
        const adTokenId = resCreateAd.events?.[0].args?.tokenId as BigNumber

        await Promise.all([...storePromises]);
        return adTokenId
        // end minting
    } catch (err: unknown) {
        console.log(err);
    }

    // close modal
};