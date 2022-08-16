import { AnchorProvider, web3 } from "@project-serum/anchor";
import { NFTStorage } from "nft.storage";
import { mintMusic } from "./mintMusic";
import { prepareAccounts } from "./prepareAccounts";
import { mintAdv } from "./mintAdv";
export type CommonMintParams = {
    provider: AnchorProvider,
    nftStorage: NFTStorage,
    songName: string,
    walletPubKey: web3.PublicKey,
}

export type NftAccounts = {
    musicMint: web3.Keypair,
    advMint: web3.Keypair,
    musicMetaData: web3.Keypair,
    advMetaData: web3.Keypair
}
export async function MintBoth(p: CommonMintParams, musicFile: Blob) {
    console.log("MintBoth: Starting to mint both");


    const [musicMint, advMint, musicMetaData, advMetaData] = prepareAccounts(4)

    const accounts = {
        musicMint,
        advMint,
        musicMetaData,
        advMetaData
    }

    await mintMusic(p, musicFile, accounts)
    await mintAdv(p, accounts)
}