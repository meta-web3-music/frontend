import React, { useState } from "react";
import { Image } from "antd";

// types imports
import { AdBannerProps } from "./AdBanner.types";

const AdBanner: React.FC<AdBannerProps> = ({ imageUrl }) => {
  return (
    <Image width={800} height={150} style={{ margin: "1em" }} src={imageUrl} />
  );
};

export default AdBanner;
