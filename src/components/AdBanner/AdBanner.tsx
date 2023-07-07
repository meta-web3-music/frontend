"use client";
import React from "react";

// styles imports
// types imports
import { AdBannerProps } from "./AdBanner.types";
import Image from "next/image";

const AdBanner: React.FC<AdBannerProps> = ({ image, website }) => {
  return (
    <a target="_blank" rel="noreferrer" href={website}>
      <div className="mb-4 h-52 relative">
        <Image
          src={image}
          alt="Advertisement banner"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </a>
  );
};

export default AdBanner;
