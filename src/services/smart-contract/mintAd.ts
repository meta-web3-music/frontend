import { CIDString } from "nft.storage";
import { AdvNFTAddr } from "../../env";
import { asyncStore } from "../ipfs/nftstorage";
import { AdvNftMetaData } from "../../types/AdvNFTData";
import { PublicClient, WalletClient, getContract, zeroAddress } from "viem";
import AdvNFT from "@/contracts/abis/AdvNFT";

export const mintAd = async (songName: string, musicTokenId: bigint, expirationDuration: number, publicClient: PublicClient, walletClient: WalletClient) => {

    if (!walletClient.account) {
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
        const adNft = getContract({
            address: AdvNFTAddr,
            abi: AdvNFT,
            publicClient,
            walletClient,
        });

        // TODO onLogs
        // invoke contract func and mint ad nft
        const createdAdHash = await adNft.write.
            createAdSpace([musicTokenId,
                advNftMetaDataHash,
                // TODO: generate this, maybe not important for mvp
                "",
                expirationDuration * 86400], { account: walletClient.account, chain: walletClient.chain });
        // TODO unwatch
        adNft.watchEvent.Transfer({ from: zeroAddress, to: walletClient.account.address }, {
            onLogs: (e) => {
                const event = e.filter(ee => ee.transactionHash == createdAdHash);
                if (event.length > 1) {
                    throw new Error("")
                }
            }
        })
        // const adTokenId = resCreateAd.events?.[0].args?.tokenId as bigint
        //TODO remove ethers
        await Promise.all([...storePromises]);
        return BigInt(3)
        // end minting
    } catch (err: unknown) {
        console.log(err);
    }

    // close modal
};