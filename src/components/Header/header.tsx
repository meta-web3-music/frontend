import React from "react";
import { useRouter } from "next/router";

// rainbowkit imports
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNetwork, useSwitchNetwork, useAccount } from "wagmi";

// antd imports
import { Button } from "antd";

function Header() {
  const router = useRouter();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { isConnected } = useAccount();

  const navigateToAdPage = () => {
    router.push("/adMarketPlace");
  };

  const navigateToHottestSongPage = () => {
    router.push("/");
  };

  const navigateProfilePage = () => {
    router.push("/profile");
  };

  let correctNetwork;

  if (chain?.network === "tevmos" || !isConnected) {
    correctNetwork = <ConnectButton />;
  } else
    correctNetwork = (
      <Button onClick={() => switchNetwork?.(9000)}>
        Click to switch to tEVMOS network
      </Button>
    );

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
        <div className="flex flex-row justify-center">

            <Button
              type="link"
              onClick={navigateToAdPage}
              className="inline-block px-8 py-1 border bg-white text-[#FF7E39] font-medium text-base leading-tight rounded-full my-2"
            >
              Ad Marketplace
            </Button>

            <Button
              type="link"
              onClick={navigateToHottestSongPage}
              className="inline-block px-8 py-1 border bg-white text-[#FF7E39] font-medium text-base leading-tight rounded-full my-2"
            >
              Music
            </Button>

            <Button
              type="link"
              onClick={navigateProfilePage}
              className="inline-block px-8 py-1 border bg-white text-[#FF7E39] font-medium text-base leading-tight rounded-full my-2"
            >
              Profile
            </Button>

        </div>
        {correctNetwork}
      </header>
    </>
  );
}

export default Header;
