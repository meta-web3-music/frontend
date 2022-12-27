import { BigNumber, Signer } from "ethers";
import { CIDString } from "nft.storage";
import { FetchSignerResult } from "@wagmi/core";
import { MintMusicFormValues } from "../../components/MintSongButton/MintSongModal/MintForm/MintForm.types";
import { MusicNFT__factory } from "../../contracts";
import { MusicNFTAddr } from "../../env";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import { asyncStore } from "../ipfs/nftstorage";

export const mintMusic = async (formData: MintMusicFormValues, signer: FetchSignerResult<Signer>) => {
    const songFile = formData.songFile.item(0)
    const artWorkFile = formData.artWorkFile.item(0)

    if (
        !signer ||
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

        // create metadata object for music nft
        const metaDataObj: MusicNftMetaData = {
            body: {
                artist: formData.artistName,
                artwork: {
                    info: {
                        mimeType: "image/jpeg",
                        uri: "ipfs://" + artWorkHash,
                    },
                    isNft: false,
                    nft: null,
                },
                duration: 100,
                mimeType: "audio/mp3",
                project: null,
                title: formData.songName,
                trackNumber: "",
                version: "",
                visualizer: "",
            },
        };
        // store music nft metadata on nft.storage
        const {
            hash: musicMetaDataHash,
            storePromise: storeMusicMetaDataPromise,
        } = await asyncStore(new Blob([JSON.stringify(metaDataObj)]));
        storePromises.push(storeMusicMetaDataPromise);

        // connect to music nft smart-contract
        const musicNft = MusicNFT__factory.connect(MusicNFTAddr, signer);

        // invoke contract func and mint song nft
        const resCreateMusic = await musicNft.createMusic(musicMetaDataHash, musicAssetHash).then((e) => e.wait());
        const musicTokenId = resCreateMusic.events?.[0].args?.tokenId as BigNumber
        await Promise.all([...storePromises]);

        return musicTokenId;
        // end minting
    } catch (err: unknown) {
        console.log(err);
    }

    // close modal
};