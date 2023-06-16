import { BigNumberish, Signer } from "ethers";
import { AdvNFTAddr, MarketPlaceAddr } from "../../env";
import { PublicClient, WalletClient, getContract } from "viem";
import AdvNFT from "@/contracts/abis/AdvNFT";
import MarketPlace from "@/contracts/abis/MarketPlace";

export const placeAdToMarket = async (adTokenId: bigint, price: bigint, publicClient: PublicClient, walletClient: WalletClient) => {
    if (!walletClient.account) {
        //TODO error
        return
    }
    try {
        // connect to market smart-contract
        const adNft = getContract({
            address: MarketPlaceAddr,
            abi: MarketPlace,
            publicClient,
            walletClient,
        });

        // invoke contract func and mint ad nft
        await adNft.write.
            createMarketItem([AdvNFTAddr,
                adTokenId,
                // TODO: generate this, maybe not important for mvp
                price], { account: walletClient.account, chain: walletClient.chain })

        // end minting
    } catch (err: unknown) {
        console.log(err);
    }
};