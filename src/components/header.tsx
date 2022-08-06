import React, { useRef } from "react";
import { FaEthereum, FaCircle } from "react-icons/fa";
import {useRouter} from 'next/router'

function Header({ connect, account, disconnect }) {

  const router = useRouter();

  const navigateToAdPage = () =>[
    router.push('/adMarketPlace')
  ]

  return (
    <>
      <header className="flex flex-row justify-between mx-2 md:mx-10 mt-2 mb-10">
        {/* headline */}
        <div className="">
          <h1 className="text-3xl font-bold m-3">Web3 Muzik</h1>
        </div>
        {/* Ad marketplace */}
        <div className="flex flex-col justify-center">
          {/* LINK TO ADVERTISEMENT PAGE */}
          <button onClick={navigateToAdPage} className="inline-block px-11 py-2 border-2 bg-white text-[#FF7E39] font-medium text-base leading-tight uppercase rounded-full mt-4 mb-2">
            Ad Marketplace
          </button>
        </div>
        {/* ETH Buttons */}
        <div className="flex flex-row">
          {/* network btn */}
          <div className="flex flex-row items-center px-4 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2 mr-4">
            <FaEthereum className="flex align-center w-[16px] h-[16px]" />
            <span className="flex ml-1 text-base">Rinkeby</span>
          </div>
          {account.current == undefined ||
          account.current === null ||
          account.current === "" ? (
            <button
              onClick={connect}
              className="flex flex-row items-center px-4 py-1 border-2 bg-white text-black font-medium text-base leading-tight uppercase rounded-full mt-4 mb-2"
            >
              Connect
            </button>
          ) : (
            <button
              onClick={disconnect}
              className="flex flex-row items-center px-2 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2 mr-4 text-base"
            >
              <span>0 ETH</span>
              <span className="flex flex-row align-center bg-gray-100 rounded-full p-1 ml-1">
                <FaCircle className=" text-[#15ae5c] mr-1 w-5 h-5" />
                {account.current.substr(0, 4)}...{account.current.substr(-4, 4)}
              </span>
            </button>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
