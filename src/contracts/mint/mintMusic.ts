import { AnchorProvider, Program, web3 } from "@project-serum/anchor";
import { NFTStorage } from "nft.storage";
import { NewMusicJson, OffChainFile } from "../../types/JsonUri";
import { MusicNft } from "../types/music_nft";
import musicIdl from "../idl/music_nft.json";
import { MusicProgramId, TOKEN_METADATA_PROGRAM_ID } from "../../env";

import {
    TOKEN_PROGRAM_ID,
    createAssociatedTokenAccountInstruction,
    createInitializeMintInstruction,
    MINT_SIZE,
    TokenOwnerOffCurveError,
    ASSOCIATED_TOKEN_PROGRAM_ID,
    getAssociatedTokenAddress,
} from "@solana/spl-token";
import { CommonMintParams, NftAccounts } from "./mintBoth";
import { getMasterEdition, getMetadata } from "./helpers";
import { PublicKey, SystemProgram } from "@solana/web3.js";

export async function mintMusic(p: CommonMintParams, musicFile: Blob, acc: NftAccounts) {
    const musicTokenAccount = await getAssociatedTokenAddress(
        acc.musicMint.publicKey,
        p.walletPubKey
    );

    // store metadata of music on nft.storage
    const musicAssetHash = await p.nftStorage.storeBlob(
        musicFile
    );

    const musicArtUri =
        "https://ipfs.io/ipfs/bafkreihcw2rdmdisqkx3rnyuhnlny6sycw5r5sbcs7qznffzaiwkzcccve";


    const musicImageFile: OffChainFile = {
        type: "image/png",
        uri: musicArtUri,
    };


    const audioFile: OffChainFile = {
        type: "audio/mp3",
        uri: `https://ipfs.io/ipfs/${musicAssetHash}`,
    };
    const musicJson = NewMusicJson(
        acc.advMetaData.toString(),
        p.songName,
        p.walletPubKey.toString(),
        musicImageFile,
        audioFile
    );

    const musicJsonUriHash = await p.nftStorage.storeBlob(new Blob([musicJson]));


    const musicProgram = new Program<MusicNft>(
        musicIdl as MusicNft,
        MusicProgramId,
        p.provider
    );
    const musicLamPorts: number =
        await musicProgram.provider.connection.getMinimumBalanceForRentExemption(
            MINT_SIZE
        );

    const mint_music_tx = new web3.Transaction().add(
        web3.SystemProgram.createAccount({
            fromPubkey: p.walletPubKey,
            newAccountPubkey: acc.musicMint.publicKey,
            space: MINT_SIZE,
            programId: TOKEN_PROGRAM_ID,
            lamports: musicLamPorts,
        }),
        createInitializeMintInstruction(
            acc.musicMint.publicKey,
            0,
            p.walletPubKey,
            p.walletPubKey
        ),
        createAssociatedTokenAccountInstruction(
            p.walletPubKey,
            musicTokenAccount,
            p.walletPubKey,
            acc.musicMint.publicKey
        ),
    )

    const musicRes = await musicProgram.provider.sendAndConfirm?.(mint_music_tx, [acc.musicMint]);
    console.log(
        await musicProgram.provider.connection.getParsedAccountInfo(acc.musicMint.publicKey)
    );

    const musicMetadataAddress = await getMetadata(acc.musicMint.publicKey);
    const musicMasterEdition = await getMasterEdition(acc.musicMint.publicKey);
    const ipfsPrefix = "https://ipfs.io/ipfs/";

    let tx = await musicProgram.methods.mintMusicNft(
        acc.musicMint.publicKey,
        ipfsPrefix + musicJsonUriHash,
        p.songName,
    )
        .accounts({
            mintAuthority: p.walletPubKey,
            mint: acc.musicMint.publicKey,
            tokenAccount: musicTokenAccount,
            tokenProgram: TOKEN_PROGRAM_ID,
            metadata: musicMetadataAddress,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
            payer: p.walletPubKey,
            systemProgram: SystemProgram.programId,
            rent: web3.SYSVAR_RENT_PUBKEY,
            masterEdition: musicMasterEdition,
        },
        ).rpc();

    console.log("Your transaction signature", tx);
}