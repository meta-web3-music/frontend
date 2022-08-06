import React, { useState } from "react";
import MintPreModal from "./MintPreModal";
import MintModal from "./MintModal";
import { FaCaretDown } from "react-icons/fa";

function HottestSongs() {
  const [displayModal, setDisplayModal] = useState("hidden");

  return (
    <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
      <h2 className="text-2xl font-bold">Hottest Songs</h2>
      <h4>Place your ads under the hottest songs</h4>
      <MintPreModal setDisplayModal={setDisplayModal} />
      <MintModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
      <div className="flex flex-row align-center">
        <span>Filter by:</span>
        <form>
          <select>
            <option value="1ETH">1ETH and under</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default HottestSongs;
