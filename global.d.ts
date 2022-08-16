import { Wallet } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

interface ConnectOpts {
    onlyIfTrusted: boolean;
}

interface PhantomProvider extends Wallet {
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: () => Promise<void>;
    on: (event: PhantomEvent, callback: (args: any) => void) => void;
    isPhantom: boolean;
}
declare global {
    interface Window {
        solana: PhantomProvider;
    }
}
export { }