"use client";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { fetchIpfs } from "../../services/ipfs/fetchIpfs";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import AdvNFTUI from "./AdvNFTUI";
import { AdvNftProps } from "./types";

const AdvNFT: React.FC<AdvNftProps> = ({
  musicMetaDataUri,
  price,
  expirationDuration,
  ...p
}) => {
  const [musicMetaData, setMusicMetaData] = useState<MusicNftMetaData>();
  useEffect(() => {
    fetchIpfs<MusicNftMetaData>(musicMetaDataUri).then(setMusicMetaData);
  }, [musicMetaDataUri]);

  if (!musicMetaData) return <></>;
  return (
    <AdvNFTUI
      artist={musicMetaData.artist}
      artWorkUri={musicMetaData.artwork.uri}
      title={musicMetaData.title}
      views="20M"
      expirationDuration={expirationDuration / 60 / 60 / 24}
      price={price ? `${ethers.utils.formatUnits(price)} MATIC` : undefined}
      {...p}
    />
  );
};

export default AdvNFT;
