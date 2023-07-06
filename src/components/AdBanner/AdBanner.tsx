"use client";
import React, { useEffect, useState } from "react";

// styles imports
// types imports
import { AdBannerProps } from "./AdBanner.types";
import { fetchDe, deToHttps } from "../../services/de-storage/fetchDe";
import { AdvNftMetaData } from "../../types/AdvNFTData";
import Image from "next/image";

const AdBanner: React.FC<AdBannerProps> = ({ advNft }) => {
  const [metaData, setMetaData] = useState<AdvNftMetaData>();
  useEffect(() => {
    if (!advNft?.assetHash) return;
    fetchDe<AdvNftMetaData>(advNft.metaDataHash).then(setMetaData);
  }, [advNft]);
  if (!advNft?.assetHash) return <div></div>;
  return (
    <a target="_blank" rel="noreferrer" href={metaData?.external_url}>
      <div className="mb-4 h-52 relative">
        {advNft.assetHash && (
          <Image
            src={deToHttps(advNft.assetHash)}
            alt="Advertisement banner"
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
          />
        )}
      </div>
    </a>
  );
};

export default AdBanner;
