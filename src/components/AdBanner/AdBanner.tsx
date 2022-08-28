import React, { useState } from "react";

// antd imports
import { Image } from "antd";
// styles imports
import styles from './AdBanner'
// types imports
import { AdBannerProps } from "./AdBanner.types";

const AdBanner: React.FC<AdBannerProps> = ({ imageUrl }) => {

  if(!imageUrl) return <div></div>
  return (
    <div style={{marginBottom:'1em'}}>
      <Image width={"100%"} height={"200px"}   src={imageUrl} />
    </div>
  );
};

export default AdBanner;
