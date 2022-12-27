import React from "react";

// rainbowkit imports
import { ConnectButton } from "@rainbow-me/rainbowkit";

import DarkModeToggle from "./DarkModeToggle";
import { SmartLink } from "../SmartLink/SmartLink";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="flex flex-row items-center justify-between font-figtree md:px-10 py-2 bg-slate-50 dark:bg-primary duration-300">
        {/* headline */}
        <div>
          <Link href="/home">
            <p className="text-3xl font-bold m-3 hover:cursor-pointer">
              OCTAV3
            </p>
          </Link>
        </div>
        {/* Ad marketplace */}
        <div className="flex flex-col justify-center">
          <div className="flex">
            <SmartLink href="/home" activeClass="text-[#A49E1E]">
              <button className="inline-block px-4 py-1 border font-medium text-base leading-tight rounded-full my-2 border-none">
                Home
              </button>
            </SmartLink>
            <SmartLink href="/ad-marketplace" activeClass="text-[#A49E1E]">
              <button className="inline-block px-4 py-1 border font-medium text-base leading-tight rounded-full my-2 border-none">
                Ad marketplace
              </button>
            </SmartLink>
            <SmartLink
              href="/dashboard"
              subHref="/artist/unlisted-spaces"
              activeClass="text-[#A49E1E]"
            >
              <button className="inline-block px-4 py-1 border font-medium text-base leading-tight rounded-full my-2 border-none">
                Dashboard
              </button>
            </SmartLink>
          </div>
        </div>
        <DarkModeToggle />
        <ConnectButton />
      </header>
    </>
  );
}

export default Header;
