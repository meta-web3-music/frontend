import React from "react";
import { useRouter } from "next/router";

// rainbowkit imports
import { ConnectButton } from "@rainbow-me/rainbowkit";

// antd imports
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const router = useRouter();

  const navigateToHottestSongPage = () => {
    router.push("/");
  };

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
          <div className="flex">
            <Link href="/">
              <button
                onClick={navigateToHottestSongPage}
                className={`inline-block px-4 py-1 border font-medium text-base leading-tight rounded-full my-2 border-none  ${
                  pathname == "/" ? "text-[#BF9484]" : ""
                }`}
              >
                Home
              </button>
            </Link>
            <Link href="ad-marketplace">
              <button
                className={`inline-block px-4 py-1 border font-medium text-base leading-tight rounded-full my-2 border-none ${
                  pathname == "/ad-marketplace" ? "text-[#BF9484]" : ""
                }`}
              >
                Ad Marketplace
              </button>
            </Link>
          </div>
        </div>
        <DarkModeToggle />
        <ConnectButton />
      </header>
    </>
  );
}

export default Header;
