import React from "react";
import { useRouter } from "next/router";

import { ConnectButton } from '@rainbow-me/rainbowkit';


// ethers imports


function Header() {

  const router = useRouter();

  const navigateToAdPage = () => {
    router.push("/adMarketPlace");
  };

  const navigateToHottestSongPage = () => {
    router.push("/");
  };


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
        <ConnectButton />
             </header>
    </>
  );
}

export default Header;
