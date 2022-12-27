import { FetchSignerResult } from "@wagmi/core";
import { BigNumberish, Signer } from "ethers";
import { BuyAdFormValues } from "../../components/BuyAdModal/BuyAdForm.types";
import { AdvNFT__factory, MarketPlace__factory } from "../../contracts";
import { AdvNFTAddr, MarketPlaceAddr } from "../../env";
import { GetUnsold_marketItems } from "../../graph-ql/queries/GET_UNSOLD/__generated__/GetUnsold";
import { AdvNftMetaData } from "../../types/AdvNFTData";
import { asyncStore } from "../ipfs/nftstorage";


export const buyAdvNft = async (formData: BuyAdFormValues, marketItemId:BigNumberish,advNftId: BigNumberish,price : BigNumberish, signer: FetchSignerResult<Signer>) => {

    const bannerImage = formData.bannerImage.item(0)
    const advAudio = formData.advAudioFile.item(0)
    if (!bannerImage || !advAudio) {
        //TODO: error
        return;
    }

    const { hash: adImageHash, storePromise: storeAdImagePromise } =
        await asyncStore(bannerImage);

    const { hash: adAudioHash, storePromise: storeAdAudioPromise } =
        await asyncStore(advAudio);
    const advNftDataObj: AdvNftMetaData = {
        description: `Adv nft for NFT`,
        mimeType: "image/jpeg",
        name: `${advNftId} ADV NFT`,
        version: "",
        external_url: formData.adUrl,
        ad_audio_url: `ipfs://${adAudioHash}`,
        ad_description: formData.advDesc,
        ad_title: formData.advTitle
    };

    console.log("handleAdForm: Adding MetaData to IPFS");

    if (!signer) {
        return;
    }
    const { hash: metaDataHash, storePromise: storeMetaDataPromise } =
        await asyncStore(new Blob([JSON.stringify(advNftDataObj)]));

    const adNft = AdvNFT__factory.connect(AdvNFTAddr, signer);
    const marketPlace = MarketPlace__factory.connect(MarketPlaceAddr, signer);

    console.log("handleAdForm: Creating Market Sale");
    await marketPlace
        .createMarketSale(AdvNFTAddr, marketItemId, {
            value: price,
        })
        .then((e) => e.wait());
    // invoke contract func and mint song nft with ad nft

    console.log("handleAdForm: Updating adv banner");
    const updateHashPromise = adNft
        .updateHash(advNftId, adImageHash, metaDataHash)
        .then((e) => e.wait());
    // // const advNftID = resCreateMusicWithAdv.events?.[3].args
    //   ?.tokenId as BigNumber;
    await Promise.all([
        updateHashPromise,
        storeAdImagePromise,
        storeAdAudioPromise,
        storeMetaDataPromise,
    ]);
};