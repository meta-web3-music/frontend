import { useState, useRef } from "react";
import type { NextPage } from "next";
import Header from "../src/components/header";
import HottestSongs from "../src/components/HottestSongs";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const Home: NextPage = () => {
  const [account, setAccount] = useState<string>();
  const [signer, setSigner] = useState<any>()

  const getWeb3Modal = (): Web3Modal => {
    return new Web3Modal({
      network: "Mumbai", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });
  };

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        rpc: {
          // infuraId: process.env.REACT_APP_INFURA_ID, // required
          137: "https://rpc-mumbai.matic.today/",
        },
      },
    },
  };

  const connect = async () => {
    try {
      const web3Modal = getWeb3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer  = provider.getSigner()
      const accounts = await provider.listAccounts();
      setAccount(accounts[0] ?? "");
      setSigner(signer)
    } catch (err) {
      console.log(err);
    }
  };

  const disconnect = async () => {
    const web3Modal = getWeb3Modal();
    try {
      await web3Modal.clearCachedProvider();
      setAccount();
      console.log(account);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Header connect={connect} disconnect={disconnect} account={account} />
      <HottestSongs signer={signer}  />
    </div>
  );
};

export default Home;
