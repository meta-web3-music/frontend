import { FetchSignerResult } from "@wagmi/core";
import { Signer } from "ethers";
import { AdModalFormValues } from "../../components/AdModal/AdModalForm/AdModalForm.types";
import { AdvNFT__factory, MarketPlace__factory } from "../../contracts";
import { AdvNFTAddr, MarketPlaceAddr } from "../../env";
import { GetUnsold_marketItems } from "../../graph-ql/queries/GET_UNSOLD/__generated__/GetUnsold";
import { AdvNftMetaData } from "../../types/AdvNFTData";
import { asyncStore } from "../ipfs/nftstorage";


export const buyAdvNft = async (formData: AdModalFormValues, advNft: GetUnsold_marketItems, signer: FetchSignerResult<Signer>) => {
    if (!formData.bannerImage[0].originFileObj) {
        //TODO: error
        return;
    }

    const { hash: adImageHash, storePromise: storeAdImagePromise } =
        await asyncStore(formData.bannerImage[0].originFileObj);

    const advNftDataObj: AdvNftMetaData = {
        description: `Adv nft for NFT`,
        mimeType: "image/jpeg",
        name: `${advNft?.itemId} ADV NFT`,
        version: "",
        external_url: formData.adUrl,
    };

    console.log("handleAdForm: Adding MetaData to IPFS");

    if (!signer) {
        return;
    }
    const { hash: metaDataHash, storePromise: storeMetaDataPromise } =
        await asyncStore(new Blob([JSON.stringify(advNftDataObj)]));

    const adNft = AdvNFT__factory.connect(AdvNFTAddr, signer);
    const marketPlace = MarketPlace__factory.connect(MarketPlaceAddr, signer);

    if (!advNft?.token.id) {
        throw new Error("Failed to get selected adv id");
        return;
    }
    console.log("handleAdForm: Creating Market Sale");

    await marketPlace
        .createMarketSale(AdvNFTAddr, advNft?.token.id, {
            value: advNft?.price,
        })
        .then((e) => e.wait());
    // invoke contract func and mint song nft with ad nft

    console.log("handleAdForm: Updating adv banner");
    const updateHashPromise = adNft
        .updateHash(advNft?.token.id, metaDataHash, adImageHash)
        .then((e) => e.wait());
    // // const advNftID = resCreateMusicWithAdv.events?.[3].args
    //   ?.tokenId as BigNumber;
    await Promise.all([
        updateHashPromise,
        storeAdImagePromise,
        storeMetaDataPromise,
    ]);
};