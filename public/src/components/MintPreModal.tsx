import React from "react";

function MintPreModal() {
  return (
    <div className="border-2 border-dashed border-[#d2d2d2] rounded-md text-center my-8 p-4 bg-[#f5f5f5]">
      <p className="font-medium">Mint Song NFT</p>
      <p>
        Get paid for all songs uploaded
        <br />
        to our platform
      </p>
      <button className="inline-block px-11 py-2 border-2 border-[#fe8b4e] bg-[#f6e8dd] text-[#fe8b4e] font-medium text-xs leading-tight uppercase rounded-full hover:bg-[#f6e8ddb0] focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-4 mb-2">
        Mint
      </button>
    </div>
  );
}

export default MintPreModal;
