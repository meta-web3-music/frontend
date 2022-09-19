import React from "react";
import { useRouter } from "next/router";

// rainbowkit imports
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNetwork, useSwitchNetwork, useAccount } from "wagmi";

// antd imports
import { Button } from "antd";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const router = useRouter();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { isConnected } = useAccount();

  const navigateToHottestSongPage = () => {
    router.push("/");
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
  const { pathname } = useRouter();

  return (
    <>
      <header className="flex flex-row items-center justify-between md:px-10 mb-10 py-2 bg-slate-50 dark:bg-primary duration-300 dark:text-white">
        {/* headline */}
        <div onClick={navigateToHottestSongPage}>
          <p className="text-3xl font-bold m-3 hover:cursor-pointer dark:text-white font-farro">
            OCTAV3
          </p>
        </div>
        {/* Ad marketplace */}
        <div className="flex flex-col justify-center">
          {/* LINK TO ADVERTISEMENT PAGE */}
          {pathname != "/ad-marketplace" ? (
            <Link href="ad-marketplace">
              <button className="inline-block px-8 py-1 border bg-white text-[#FF7E39] font-medium text-base leading-tight rounded-full my-2">
                Ad Marketplace
              </button>
            </Link>
          ) : (
            <button
              onClick={navigateToHottestSongPage}
              className="inline-block px-8 py-1 border bg-white text-[#FF7E39] font-medium text-base leading-tight rounded-full my-2"
            >
              Listen to Music
            </button>
          )}
        </div>
        <DarkModeToggle />
        {correctNetwork}
      </header>
    </>
  );
}

export default Header;
