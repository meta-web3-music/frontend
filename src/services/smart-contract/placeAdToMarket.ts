import { BigNumberish, Signer } from "ethers";
import { FetchSignerResult } from "@wagmi/core";
import { MarketPlace__factory } from "../../contracts";
import { AdvNFTAddr, MarketPlaceAddr } from "../../env";

export const placeAdToMarket = async (adTokenId: BigNumberish, price: BigNumberish, signer: FetchSignerResult<Signer>) => {
    if (!signer) {
        //TODO: error
        return;
    }
    try {
        // connect to ad nft smart-contract
        const marketPlace = MarketPlace__factory.connect(MarketPlaceAddr, signer);

        // invoke contract func and mint ad nft
        await marketPlace.
            createMarketItem(AdvNFTAddr,
                adTokenId,
                // TODO: generate this, maybe not important for mvp
                price).
            then(e => e.wait())

        // end minting
    } catch (err: unknown) {
        console.log(err);
    }
};