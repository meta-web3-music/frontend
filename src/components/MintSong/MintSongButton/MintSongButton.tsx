import React from "react";
import { Typography, Button } from "antd";

const { Title, Text } = Typography;

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
    <div className="flex justify-between items-center m-4 rounded-xl border-solid border-[#e5e5e5e5] border-2 py-3 px-4">
      <div className="flex flex-col">
        <Title level={5} className="font-medium">
          Mint Song NFT
        </Title>
        <Text>Get paid for all songs uploaded to our platform</Text>
      </div>
      <Button
        type="primary"
        className="!font-bold !bg-[#a67968] !rounded-xl !border-none"
        onClick={isConnected ? onToggleModal : openConnectModal}
      >
        Mint Song NFT
      </Button>
    </div>
  );
};

export default MintSongButton;
