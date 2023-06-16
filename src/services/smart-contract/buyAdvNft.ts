import { BuyAdFormValues } from "../../components/BuyAdModal/BuyAdForm.types";
import { AdvNFTAddr, MarketPlaceAddr } from "../../env";
import { AdvNftMetaData } from "../../types/AdvNFTData";
import { asyncStore } from "../ipfs/nftstorage";
import AdvNFT from '../../contracts/abis/AdvNFT'
import { PublicClient, WalletClient, getContract, parseAbi } from 'viem'
import MarketPlace from "@/contracts/abis/MarketPlace";



export const buyAdvNft = async (formData: BuyAdFormValues, marketItemId: bigint, advNftId: bigint, price: bigint, publicClient: PublicClient, walletClient: WalletClient) => {
    if (!walletClient.account) return;
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

    if (!walletClient) {
        return;
    }
    const { hash: metaDataHash, storePromise: storeMetaDataPromise } =
        await asyncStore(new Blob([JSON.stringify(advNftDataObj)]));
    const adNft = getContract({
        address: AdvNFTAddr,
        abi: AdvNFT,
        publicClient,
        walletClient,
    });
    const marketPlace = getContract({
        address: MarketPlaceAddr,
        abi: MarketPlace,
        publicClient,
        walletClient
    });
    console.log("handleAdForm: Creating Market Sale");
    await marketPlace.write
        .createMarketSale([AdvNFTAddr, marketItemId], { account: walletClient.account, chain: walletClient.chain, value: price })
    // invoke contract func and mint song nft with ad nft

    console.log("handleAdForm: Updating adv banner");
    const updateHashPromise = adNft.
        write.updateHash([advNftId, adImageHash, metaDataHash], { account: walletClient.account, chain: walletClient.chain })
    // // const advNftID = resCreateMusicWithAdv.events?.[3].args
    //   ?.tokenId as BigNumber;
    await Promise.all([
        updateHashPromise,
        storeAdImagePromise,
        storeAdAudioPromise,
        storeMetaDataPromise,
    ]);
};