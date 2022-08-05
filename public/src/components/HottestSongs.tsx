import React from "react";
import MintPreModal from "./MintPreModal";

function HottestSongs() {
  return (
    <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
      <h2 className="text-2xl font-bold">Hottest Songs</h2>
      <h4>Place your ads under the hottest songs</h4>
      <MintPreModal />
    </div>
  );
}

export default HottestSongs;
