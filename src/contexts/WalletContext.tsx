import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Chain } from "../env";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, AnchorProvider, web3, Wallet } from "@project-serum/anchor";

const network = clusterApiUrl("devnet");

type WalletContextType = {
  web3Provider: AnchorProvider | undefined;
  getWeb3Provider: () => Promise<AnchorProvider>;
  clearWallet: () => void;
  walletPubKey: web3.PublicKey | undefined;
};
export let WalletContext: React.Context<WalletContextType>;

const preflightCommitment = "processed";

export function WalletProvider(props: React.PropsWithChildren) {
  const reviveConnection = async () => {
    const response = await window.solana.connect();
    console.log("Connected with Public Key:", response.publicKey.toString());
    setWalletPubKey(response.publicKey);
  };
  useEffect(() => {
    reviveConnection();
  }, []);
  const [provider, setProvider] = useState<AnchorProvider>();
  const [walletPubKey, setWalletPubKey] = useState<web3.PublicKey>();
  const getWeb3Provider = useCallback(async () => {
    const solana = window.solana;
    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletPubKey(response.publicKey);
    }
    const connection = new Connection(network, preflightCommitment);
    const provider = new AnchorProvider(connection, window.solana, {
      commitment: preflightCommitment,
    });
    setProvider(provider);
    return provider;
  }, []);

  const clearWallet = useCallback(() => {
    try {
      window.solana.disconnect();
      setProvider(undefined);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  const value: WalletContextType = useMemo(
    () => ({
      web3Provider: provider,
      clearWallet,
      getWeb3Provider,
      walletPubKey,
    }),
    [provider, clearWallet, getWeb3Provider, walletPubKey]
  );

  WalletContext = React.createContext(value);

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
}
