import { AnchorProvider, Program, web3 } from "@project-serum/anchor";
import {
    createAssociatedTokenAccountInstruction,
    createInitializeMintInstruction,
    getAssociatedTokenAddress,
    MINT_SIZE,
    TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import advIdl from "../idl/adv_nft.json";


import { AdvProgramId, TOKEN_METADATA_PROGRAM_ID } from "../../env";
import { NewAdvJson, OffChainFile } from "../../types/JsonUri";
import { AdvNft } from "../types/adv_nft";
import { CommonMintParams, NftAccounts } from "./mintBoth";
import { getMasterEdition, getMetadata } from "./helpers";
import { SystemProgram } from "@solana/web3.js";

export async function mintAdv(p: CommonMintParams, acc: NftAccounts) {

    console.log("mintAdv: minting adv");

    const AdvNftTokenAccount = await getAssociatedTokenAddress(
        acc.advMint.publicKey,
        p.walletPubKey
    );
    const advProgram = new Program<AdvNft>(
        advIdl as AdvNft,
        AdvProgramId,
        p.provider
    );
    const advImageUri =
        "https://ipfs.io/ipfs/bafkreihymuwe76nrqafxkbf2or47in36zbmqcddhlsln3j36gnsshzbgri";
    const advImageFile: OffChainFile = {
        type: "image/png",
        uri: advImageUri,
    };
    const advLamPorts: number =
        await advProgram.provider.connection.getMinimumBalanceForRentExemption(
            MINT_SIZE
        );
    const advJson = NewAdvJson(
        acc.musicMetaData.toString(),
        p.songName,
        p.walletPubKey.toString(),
        advImageFile
    );
    const advJsonUriHash = await p.nftStorage.storeBlob(new Blob([advJson]));
    const mint_adv_tx = new web3.Transaction().add(
        web3.SystemProgram.createAccount({
            fromPubkey: p.walletPubKey,
            newAccountPubkey: acc.advMint.publicKey,
            space: MINT_SIZE,
            programId: TOKEN_PROGRAM_ID,
            lamports: advLamPorts,
        }),
        createInitializeMintInstruction(
            acc.advMint.publicKey,
            0,
            p.walletPubKey,
            p.walletPubKey
        ),
        createAssociatedTokenAccountInstruction(
            p.walletPubKey,
            AdvNftTokenAccount,
            p.walletPubKey,
            acc.advMint.publicKey
        )
    )

    await advProgram.provider.sendAndConfirm?.(mint_adv_tx, [acc.advMint]);

    const advMetadataAddress = await getMetadata(acc.advMint.publicKey);
    const advMasterEdition = await getMasterEdition(acc.advMint.publicKey);
    const ipfsPrefix = "https://ipfs.io/ipfs/";
    const tx = await advProgram.methods.mintAdvNft(
        acc.advMint.publicKey,
        ipfsPrefix + advJsonUriHash,
        `Adv for ${p.songName}`
    ).accounts({
        mintAuthority: p.walletPubKey,
        mint: acc.advMint.publicKey,
        tokenAccount: AdvNftTokenAccount,
        tokenProgram: TOKEN_PROGRAM_ID,
        metadata: advMetadataAddress,
        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
        payer: p.walletPubKey,
        systemProgram: SystemProgram.programId,
        rent: web3.SYSVAR_RENT_PUBKEY,
        masterEdition: advMasterEdition,
    }).rpc()
}