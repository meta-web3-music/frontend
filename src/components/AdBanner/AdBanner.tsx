import React, { useState } from "react";
import { Image } from "antd";

// types imports
import { AdBannerProps } from "./AdBanner.types";

const AdBanner: React.FC<AdBannerProps> = ({ imageUrl }) => {
  return (
    <div style={{border:'2px solid red'}}>
      <Image width={800} height={150} style={{ margin: "1em" }} src={imageUrl} />
    </div>
  );
};

export default AdBanner;
