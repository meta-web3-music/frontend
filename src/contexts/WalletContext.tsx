import { providers } from "ethers";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Chain } from "../env";

type WalletContextType = {
  web3Provider: providers.Web3Provider | undefined;
  getWeb3Provider: () => Promise<providers.Web3Provider>;
  clearWallet: () => void;
  walletAddress: string;
};
export let WalletContext: React.Context<WalletContextType>;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        137: "https://rpc-mumbai.matic.today/",
      },
    },
  },
};
let web3Modal: Web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: Chain,
    cacheProvider: true,
    providerOptions,
  });
}

export function WalletProvider(props: React.PropsWithChildren) {
  const [provider, setProvider] = useState<providers.Web3Provider>();
  const [walletAddress, setWalletAddress] = useState("");
  const getWeb3Provider = useCallback(async () => {
    const wallet = await web3Modal.connect();
    const provider = new providers.Web3Provider(wallet);
    setWalletAddress(await provider.getSigner().getAddress());
    setProvider(provider);
    return provider;
  }, []);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      getWeb3Provider();
    }
  }, [getWeb3Provider]);

  const clearWallet = useCallback(() => {
    try {
      web3Modal.clearCachedProvider();
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
      walletAddress,
    }),
    [provider, clearWallet, getWeb3Provider, walletAddress]
  );

  WalletContext = React.createContext(value);

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
}
