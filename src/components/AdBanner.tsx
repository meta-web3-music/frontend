import React, { useState } from "react";
import { Image } from "antd";

interface BannerShape {
  imageUrl: string;
}

const AdBanner: React.FC<BannerShape> = ({ imageUrl }) => {
  return (
    <Image width={800} height={150} style={{ margin: "1em" }} src={imageUrl} />
  );
};

export default AdBanner;
