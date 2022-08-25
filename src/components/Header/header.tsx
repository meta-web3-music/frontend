import React, { useContext, useRef } from "react";
import { FaEthereum, FaCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { WalletContext } from "../../contexts/WalletContext";

function Header() {
  const walletContext = useContext(WalletContext);
  const router = useRouter();

  const navigateToAdPage = () => {
    router.push("/adMarketPlace");
  };

  const navigateToHottestSongPage = () => {
    router.push("/");
  };
  useRouter();

  return (
    <>
      <header className="flex flex-row items-center justify-between md:px-10 mb-10 py-2 bg-slate-50 border-b">
        {/* headline */}
        <div className="" onClick={navigateToHottestSongPage}>
          <h1 className="text-3xl font-bold m-3 hover:cursor-pointer">
            OCTAV3
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
        {/* ETH Buttons */}
        <div className="flex flex-row">
          {/* network btn */}
          <div className="flex flex-row items-center px-4 py-1 border bg-white text-black font-medium text-xs leading-tight uppercase rounded-full my-3 mr-4">
            <img
              src="./polygon.svg"
              className="flex align-center w-[16px] h-[16px]"
            />
            <span className="flex ml-1 text-base">Mumbai</span>
          </div>
          {!walletContext.walletAddress ? (
            <button
              onClick={walletContext.getWeb3Provider}
              className="flex flex-row items-center px-4 py-1 border bg-white text-black font-medium text-base leading-tight uppercase rounded-full my-3 mr-4"
            >
              Connect
            </button>
          ) : (
            <button
              onClick={walletContext.clearWallet}
              className="flex flex-row items-center px-4 py-1 border bg-white text-black font-medium text-base leading-tight uppercase rounded-full my-3"
            >
              <span>0 MATIC</span>
              <span className="flex flex-row align-center bg-gray-100 rounded-full p-1 ml-1">
                <FaCircle className=" text-[#15ae5c] mr-1 w-5 h-5" />
                {walletContext.walletAddress.substring(0, 4)}...
                {walletContext.walletAddress.substring(-4, 4)}
              </span>
            </button>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
