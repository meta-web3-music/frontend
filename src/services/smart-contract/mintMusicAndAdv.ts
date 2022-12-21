import { BigNumber, ethers, Signer } from "ethers";
import { CIDString } from "nft.storage";
import { FetchSignerResult } from "@wagmi/core";
import { MintMusicWAdFormValues } from "../../components/MintSong/MintSongModal/MintForm/MintForm.types";
import { MusicNFT__factory, MarketPlace__factory } from "../../contracts";
import { MusicNFTAddr, MarketPlaceAddr, AdvNFTAddr } from "../../env";
import { AdvNftMetaData } from "../../types/AdvNFTData";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import { asyncStore } from "../ipfs/nftstorage";

export const mintMusicAndAdv = async (formData: MintMusicWAdFormValues, signer: FetchSignerResult<Signer>) => {
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
                notes: `Song with price ${formData.adSpacePrice}`,
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

        // create metadata object for advertisement nft
        const advNftDataObj: AdvNftMetaData = {
            description: `Adv nft for ${formData.songName} NFT`,
            mimeType: "image/jpeg",
            name: `${formData.songName}ADV NFT`,
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

        // connect to music nft smart-contract
        const musicNft = MusicNFT__factory.connect(MusicNFTAddr, signer);

        // invoke contract func and mint song nft with ad nft
        const resCreateMusicWithAdv = await musicNft
            .createMusicWithAdv(
                musicMetaDataHash,
                musicAssetHash,
                advNftMetaDataHash,
                // TODO: generate this, maybe not important for mvp
                "",
                // formData.adDuration returns number of days
                (formData.adDurationDays ?? 3) * 86400 // 1 Day == 86400 seconds
            )
            .then((e) => e.wait());
        console.log("events");
        const advNftID = resCreateMusicWithAdv.events?.[2].args
            ?.tokenId as BigNumber;
        ethers.utils.parseEther;
        const advSpacePrice_BigInt = ethers.utils.parseEther(
            formData.adSpacePrice.toString()
        );
        console.log(advSpacePrice_BigInt);
        console.log("Creating market item");
        console.log("adv id is", advNftID);
        const marketPlace = MarketPlace__factory.connect(MarketPlaceAddr, signer);
        const createMarketItemPromise = marketPlace
            .createMarketItem(AdvNFTAddr, advNftID.toNumber(), advSpacePrice_BigInt)
            .then((e) => e.wait());

        await Promise.all([createMarketItemPromise, ...storePromises]);
        // end minting
    } catch (err: unknown) {
        console.log(err);
    }

    // close modal
};