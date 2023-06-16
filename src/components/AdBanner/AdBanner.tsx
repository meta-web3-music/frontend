import React, { useEffect, useState } from "react";

// styles imports
// types imports
import { AdBannerProps } from "./AdBanner.types";
import { fetchIpfs, ipfsToHttps } from "../../services/ipfs/fetchIpfs";
import { AdvNftMetaData } from "../../types/AdvNFTData";
import Image from "next/image";

const AdBanner: React.FC<AdBannerProps> = ({ advNft }) => {
  const [metaData, setMetaData] = useState<AdvNftMetaData>();
  useEffect(() => {
    if (!advNft?.assetHash) return;
    fetchIpfs<AdvNftMetaData>(advNft.metaDataHash).then(setMetaData);
  }, [advNft]);
  if (!advNft?.assetHash) return <div></div>;
  return (
    <a target="_blank" rel="noreferrer" href={metaData?.external_url}>
      <div className="mb-4 h-52 relative">
        {advNft.assetHash && (
          <Image
            src={ipfsToHttps(advNft.assetHash)}
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
