import React, { useEffect, useState } from "react";

// antd imports
import { Image } from "antd";
// styles imports
// types imports
import { AdBannerProps } from "./AdBanner.types";
import { fetchIpfs, ipfsToHttps } from "../../services/ipfs/fetchIpfs";
import { AdvNftMetaData } from "../../types/AdvNFTData";

const AdBanner: React.FC<AdBannerProps> = ({ advNft }) => {
  const [metaData, setMetaData] = useState<AdvNftMetaData>();
  useEffect(() => {
    if (!advNft?.assetHash) return;
    fetchIpfs<AdvNftMetaData>(advNft.metaDataHash).then(setMetaData);
  }, [advNft]);
  if (!advNft?.assetHash) return <div></div>;
  return (
    <a target="_blank" rel="noreferrer" href={metaData?.external_url}>
      <div style={{ marginBottom: "1em" }}>
        <Image
          preview={false}
          width={"100%"}
          height={"200px"}
          src={ipfsToHttps(advNft.assetHash)}
          alt="adv banner"
        />
      </div>
    </a>
  );
};

export default AdBanner;
