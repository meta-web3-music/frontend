import React, { useContext, useEffect } from "react";
import { FaEthereum, FaCircle } from "react-icons/fa";
import { MdLightMode, MdDarkMode, MdCircle } from "react-icons/md";
import { useRouter } from "next/router";
import { AddressContext } from "../contexts/AddressContext";

const Header = () => {
  const router = useRouter();

  const navigateToAdPage = () => {
    router.push("/adMarketPlace");
  };

  const navigateToHottestSongPage = () => {
    router.push("/");
  };

  // start Phantom wallet connection
  const { walletAddress, setWalletAddress } =
    useContext<string>(AddressContext);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Connected with Public Key:",
            response.publicKey.toString()
          );
        }
      } else {
        alert("Solana object not found! Get a Phantom Wallet 👻");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <header className="flex flex-row items-center justify-between md:px-10 mb-10 py-2 bg-slate-50 border-b">
        {/* headline */}
        <div className="" onClick={navigateToHottestSongPage}>
          <h1 className="text-3xl font-bold m-3 hover:cursor-pointer">
            SOLTUNES
          </h1>
        </div>
        {/* Ad marketplace */}
        <div className="flex flex-col justify-center">
          {/* LINK TO ADVERTISEMENT PAGE */}
          {!useRouter().pathname.includes("adMarketPlace") ? (
            <button
              onClick={navigateToAdPage}
              className="inline-block px-8 py-1 border bg-white text-[#FF7E39] font-medium text-base leading-tight rounded-full my-2"
            >
              Ad Marketplace
            </button>
          ) : (
            <button
              onClick={navigateToHottestSongPage}
              className="inline-block px-8 py-1 border bg-white text-[#FF7E39] font-medium text-base leading-tight rounded-full my-2"
            >
              Listen to Music
            </button>
          )}
        </div>

        <div className="flex flex-row">
          {/* network btn */}
          <div className="flex flex-row items-center px-4 py-1 border bg-white text-black font-medium text-xs leading-tight uppercase rounded-full my-3 mr-4">
            <img
              src="./solana-sol-logo.svg"
              className="flex align-center w-[16px] h-[16px]"
            />
            <span className="flex ml-1 text-base">Solana</span>
          </div>
          {!walletAddress ? (
            <button
              onClick={connectWallet()}
              className="flex flex-row items-center px-4 py-1 border bg-white text-black font-medium text-base leading-tight uppercase rounded-full my-3 mr-4"
            >
              Connect
            </button>
          ) : (
            <button
              onClick={null}
              className="flex flex-row items-center px-4 py-1 border bg-white text-black font-medium text-base leading-tight uppercase rounded-full my-3"
            >
              <span>SOL</span>
              <span className="flex flex-row align-center bg-gray-100 rounded-full p-1 ml-1">
                <FaCircle className=" text-[#15ae5c] mr-1 w-5 h-5" />
                {walletAddress.substr(0, 4)}...
                {walletAddress.substr(-4, 4)}
              </span>
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
