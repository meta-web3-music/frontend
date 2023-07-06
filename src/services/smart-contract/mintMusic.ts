import { CIDString } from "nft.storage";
import { MintMusicFormValues } from "../../components/MintSongButton/MintSongModal/MintForm/MintForm.types";
import { MusicNFTAddr } from "../../env";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import { asyncStore } from "../ipfs/nftstorage";
import { PublicClient, WalletClient, getContract, zeroAddress } from "viem";
import MusicNFT from "@/contracts/abis/MusicNFT";

export const mintMusic = async (formData: MintMusicFormValues, publicClient: PublicClient, walletClient: WalletClient) => {
    if (!walletClient.account) {
        //TODO error
        return
    }
    const songFile = formData.songFile.item(0)
    const artWorkFile = formData.artWorkFile.item(0)

    if (
        !songFile ||
        !artWorkFile
    ) {
        //TODO: error
        return;
    }
    try {
        const storePromises: Promise<CIDString>[] = [];
        // store metadata of music on nft.storage

        const { hash: musicAssetHash, storePromise: storeMusicAssetPromise } =
            await asyncStore(songFile);
        storePromises.push(storeMusicAssetPromise);

        const { hash: artWorkHash, storePromise: storeArtWorkHash } =
            await asyncStore(artWorkFile);
        storePromises.push(storeArtWorkHash);

        // TODO 
        // create metadata object for music nft
        const metaDataObj: MusicNftMetaData = {
            artist: formData.artistName,
            artwork: {
                mimeType: "image/jpeg",
                uri: "ipfs://" + artWorkHash,
                nft: null,
            },
            duration: 100,
            mimeType: "audio/mp3",
            title: formData.songName,
            version: "",
            animation_url: "ipfs://" + musicAssetHash, attributes: [],
            description: "",
            external_url: "",
            genre: "",
            image: "",
            license: "",
            losslessAudio: "ipfs://" + musicAssetHash,
            name: "",
            nftSerialNumber: 0,
            trackNumber: 0
        };
        // store music nft metadata on nft.storage
        const {
            hash: musicMetaDataHash,
            storePromise: storeMusicMetaDataPromise,
        } = await asyncStore(new Blob([JSON.stringify(metaDataObj)]));
        storePromises.push(storeMusicMetaDataPromise);

        // connect to music nft smart-contract
        const musicNft = getContract({
            address: MusicNFTAddr,
            abi: MusicNFT,
            publicClient,
            walletClient,
        });

        // invoke contract func and mint song nft
        const createMusicHash = await musicNft.write.createMusic([musicMetaDataHash, musicAssetHash], { account: walletClient.account, chain: walletClient.chain })
        // TODO unwatch
        musicNft.watchEvent.Transfer({ from: zeroAddress, to: walletClient.account.address }, {
            onLogs: (e) => {
                const event = e.filter(ee => ee.transactionHash == createMusicHash);
                if (event.length > 1) {
                    throw new Error("")
                }
            }
        })
        await Promise.all([...storePromises]);

        return 0;
        // end minting
    } catch (err: unknown) {
        console.log(err);
    }

    // close modal
};