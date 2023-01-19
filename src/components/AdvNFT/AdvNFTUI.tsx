import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ipfsToHttps } from "../../services/ipfs/fetchIpfs";
import OButton from "../OButton/OButton";
import { AdvNFTUIProps } from "./types";

const statusColors = {
  filled: "#341CC3",
  open: "#1CC373",
  expired: "#00000075",
};

const MarketStatusBatch = styled.div<{ color: string }>`
  background-color: ${(p) => p.color};
`;
const AdvNFTUI: React.FC<AdvNFTUIProps> = ({
  buttonText,
  btnType,
  artWorkUri,
  title,
  artist,
  price,
  expirationDuration,
  status,
  onArtWorkClick,
  onBtnClick,
  CustomButton,
  isLoading,
  disabled,
}) => {
  const getImageSrc = (): string => {
    if (!artWorkUri?.includes("ipfs://")) {
      return "";
    }
    const httpsURL = ipfsToHttps(artWorkUri ?? "");
    return httpsURL;
  };

  return (
    <div className="my-2 font-figtree">
      <div className="flex m-2">
        <div
          className="h-10 relative w-10 rounded-full overflow-hidden"
          onClick={onArtWorkClick}
        >
          {artWorkUri && (
            <Image
              className="object-cover artwork duration-200 m-auto"
              src={getImageSrc()}
              layout="fill"
              alt={`Artwork for ${title}`}
              objectFit={"cover"}
            />
          )}
        </div>
        <div className="ml-3 flex flex-col justify-center">
          <p className="m-0 font-bold text-md leading-5">{title}</p>
          <p className="m-0 text-gray-500 text-md">{artist} . 20M views</p>
        </div>
      </div>
      <div className="m-2 bg-gray-200 rounded-lg text-gray-500 font-bold flex flex-col p-3">
        <div className="flex">
          {status && (
            <div className="flex items-center bg-white rounded-3xl px-2 text-gray-600 font-bold mb-1 text-sm">
              <MarketStatusBatch
                color={statusColors[status]}
                className="h-3 w-3 rounded-full mr-1"
              ></MarketStatusBatch>
              {status.toUpperCase()}
            </div>
          )}
        </div>
        <p className="m-0 mb-1">
          {price && <>{price} &#8226; FOR </>}
          {expirationDuration} DAYS
        </p>
        {CustomButton && CustomButton}
        {buttonText && btnType && (
          <OButton
            disabled={disabled}
            color="yellow"
            isLoading={isLoading}
            className="self-stretch"
            btnType={btnType}
            onClick={onBtnClick}
          >
            {buttonText}
          </OButton>
        )}
      </div>
    </div>
  );
};

export default AdvNFTUI;
