import { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import Header from "../src/components/header";
import HottestSongs from "../src/components/HottestSongs";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const Home: NextPage = () => {
  const [web3Modal, setWeb3Modal] = useState({});
  const account = useRef();
  const [userAccount, setUserAccount] = useState();

  useEffect(() => {
    if (Web3Modal.cachedProvider) connect();
    if (typeof window !== "undefined") {
      const web3modal = new Web3Modal({
        network: "rinkeby", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });
      setWeb3Modal(web3modal);
    }
  }, []);

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
      const instance = await Web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const accounts = await provider.listAccounts();
      account.current = accounts[0];
      setUserAccount(account.current);
      const balance = await provider.getBalance();
      console.log(balance);
    } catch (err) {
      console.log(err);
    }
  };

  const disconnect = async () => {
    try {
      await web3Modal.clearCachedProvider();
      account.current = null;
      console.log(account);
      setUserAccount(() => null);
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
