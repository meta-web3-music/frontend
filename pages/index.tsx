import { useState, useRef } from "react";
import type { NextPage } from "next";
import Header from "../public/src/components/header";
import HottestSongs from "../public/src/components/HottestSongs";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const Home: NextPage = () => {
  const [account, setAccount] = useState<string>();
  const getWeb3Modal = (): Web3Modal => {
    return new Web3Modal({
      network: "rinkeby", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });
  };

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID, // required
      },
    },
  };

  const connect = async () => {
    try {
      const web3Modal = getWeb3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const accounts = await provider.listAccounts();
      setAccount(accounts[0] ?? "");
    } catch (err) {
      console.log(err);
    }
  };

  const disconnect = async () => {
    const web3Modal = getWeb3Modal();
    try {
      await web3Modal.clearCachedProvider();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header connect={connect} disconnect={disconnect} account={account} />
      <HottestSongs />
    </>
  );
};

export default Home;
