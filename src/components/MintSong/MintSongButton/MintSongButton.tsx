import React from "react";
import { Button } from "antd";

// types imports
import { MintSongButtonProps } from "./MintSongbutton.types";

// rainbowkit imports
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

// COMPONENT
const MintSongButton: React.FC<MintSongButtonProps> = ({ onToggleModal }) => {
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();

  return (
    <div className="flex justify-between items-center m-4 rounded-xl bg-[#3d3d3de4] text-white py-3 px-4">
      <div className="flex flex-col">
        <p className="font-medium text-lg m-0 mb-1 text-white">Mint Song NFT</p>
        <p className="font-medium m-0 mb-1 text-white">
          Get paid for all songs uploaded to our platform
        </p>
      </div>
      <Button
        type="primary"
        className="!font-bold !bg-[#107bde] !rounded-xl !border-none"
        onClick={isConnected ? onToggleModal : openConnectModal}
      >
        Mint Song NFT
      </Button>
    </div>
  );
};

export default MintSongButton;
