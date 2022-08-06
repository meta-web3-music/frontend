import { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import Header from "../public/src/components/header";
import HottestSongs from "../public/src/components/HottestSongs";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const Home: NextPage = () => {
  const account = useRef<string>();
  const [userAccount, setUserAccount] = useState<string>();

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
    const web3Modal = getWeb3Modal();
    try {
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const accounts = await provider.listAccounts();
      account.current = accounts[0];
      setUserAccount(account.current);
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
