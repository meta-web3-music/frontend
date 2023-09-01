import React from "react";

// rainbowkit imports
import { ConnectButton } from "@rainbow-me/rainbowkit";

import DarkModeToggle from "./DarkModeToggle";
import { SmartLink } from "../SmartLink/SmartLink";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <>
      <header className="flex flex-row items-center justify-between font-figtree md:px-10 py-2  text-[#0000008e] dark:text-white bg-slate-50 dark:bg-[rgb(26,26,26)] duration-300 border-b-[1px] border-[#E5E5E5]">
        {/* headline */}
        <div>
          <Link href="/home">
            <div className="flex">
              <Image
                src="/images/OCTAV3_logo.png"
                alt="octav3 logo"
                height={36}
                width={36}
                style={{ objectFit: "contain" }}
              />
              <p className="text-3xl font-bold m-3 hover:cursor-pointer text-black dark:text-white">
                OCTAV3
              </p>
            </div>
          </Link>
        </div>

        {/* Ad marketplace */}
        <div className="flex flex-col justify-center">
          <div className="flex">
            <SmartLink
              href="/home"
              activeClass="text-[#a49e1e8e] dark:text-[#A49E1E]"
            >
              <button className="inline-block px-4 py-1 border font-medium text-base leading-tight rounded-full my-2 border-none">
                Home
              </button>
            </SmartLink>
            {/* remove below code along with the component source */}
            {/* <SmartLink href="/ad-marketplace" activeClass="text-[#A49E1E]">
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
            </SmartLink> */}
            <SmartLink
              href="/account"
              activeClass="text-[#a49e1e8e] dark:text-[#A49E1E]"
            >
              <button className="inline-block px-4 py-1 border font-medium text-base leading-tight rounded-full my-2 border-none">
                Account
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
