import { web3 } from "@project-serum/anchor";

export function prepareAccounts(n: number): web3.Keypair[] {
    const keyPairs: web3.Keypair[] = [];
    for (let i = 0; i < n; i++) {
        keyPairs.push(web3.Keypair.generate())
    }
    return keyPairs
}