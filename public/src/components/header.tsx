import React, { useRef } from "react";
import { FaEthereum } from "react-icons/fa";

function Header() {
  return (
    <header className="flex flex-row justify-between mx-2 md:mx-10 my-2">
      {/* headline */}
      <div className="">
        <h1 className="text-2xl font-bold m-3">Web3 Muzik</h1>
      </div>
      {/* Buttons */}
      <div className="flex flex-row">
        {/* network btn */}
        <div className="flex flex-row align-center border w-fit py-1 px-3 m-2 rounded-3xl">
          <FaEthereum className="" />
          <span className="flex ml-1 font-medium">Rinkeby</span>
        </div>
        {/* address btn */}
        <div className="flex flex-row border w-fit py-1 px-3 m-2 rounded-3xl align-center">
          <span className="flex align-center ml-1 font-medium">
            0 ETH <span className="bg-[#f7f7f7] rounded m-0.1">0x0</span>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
