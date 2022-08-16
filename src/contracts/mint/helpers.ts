import { web3 } from "@project-serum/anchor";
import { TOKEN_METADATA_PROGRAM_ID } from "../../env";

export const getMetadata = async (
    mint: web3.PublicKey
): Promise<web3.PublicKey> => {
    return (
        await web3.PublicKey.findProgramAddress(
            [
                Buffer.from("metadata"),
                TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                mint.toBuffer(),
            ],
            TOKEN_METADATA_PROGRAM_ID
        )
    )[0];
};

export const getMasterEdition = async (
    mint: web3.PublicKey
): Promise<web3.PublicKey> => {
    return (
        await web3.PublicKey.findProgramAddress(
            [
                Buffer.from("metadata"),
                TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                mint.toBuffer(),
                Buffer.from("edition"),
            ],
            TOKEN_METADATA_PROGRAM_ID
        )
    )[0];
};
