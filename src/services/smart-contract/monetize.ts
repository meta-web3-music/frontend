import { Octav3Addr } from "../../env";
import { PublicClient, WalletClient, getContract } from "viem";
import Octave from "@/contracts/abis/Octave";

export const monetize = async (contractAddr: string, tokenId: bigint, metadataUri: string, platform: string, chainId: string, platformTokenId: string, publicClient: PublicClient, walletClient: WalletClient) => {
    if (!walletClient.account) {
        //TODO error
        return
    }
    try {
        // connect to market smart-contract
        const adNft = getContract({
            address: Octav3Addr,
            abi: Octave,
            publicClient,
            walletClient,
        });

        // invoke contract func and mint ad nft
        await adNft.write.
            openForMonetize([contractAddr as `0x${string}`,
                tokenId,
                metadataUri, platform, chainId, platformTokenId], { account: walletClient.account, chain: walletClient.chain })

        // end minting
    } catch (err: unknown) {
        console.log(err);
    }
};