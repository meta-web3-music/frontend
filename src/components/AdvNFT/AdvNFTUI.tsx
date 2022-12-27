import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ipfsToHttps } from "../../services/ipfs/fetchIpfs";
import OButton from "../OButton/OButton";
import { AdvNFTUIProps } from "./types";

const statusColors = {
  filled: "#341CC3",
  open: "#1CC373",
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
          className="h-12 relative w-12 rounded-full overflow-hidden"
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
          <p className="m-0 font-bold text-lg leading-5">{title}</p>
          <p className="m-0 text-gray-500 text-base">{artist} . 20M views</p>
        </div>
      </div>
      <div className="m-2 bg-gray-200 rounded-lg text-gray-500 font-bold flex flex-col p-3">
        <div className="flex">
          {status && (
            <div className="flex items-center bg-white rounded-3xl px-2 text-gray-700 font-bold mb-1">
              <MarketStatusBatch
                color={statusColors[status]}
                className="h-2 w-2 rounded-full mr-1"
              ></MarketStatusBatch>
              {status.toUpperCase()}
            </div>
          )}

          <div className="ml-auto text-xl mb-1">
            <span className="iconify" data-icon="uil:setting" />
          </div>
        </div>
        <p>
          {price && <>{price} &#8226; FOR </>}
          {expirationDuration} DAYS
        </p>
        {CustomButton && CustomButton}
        {buttonText && btnType && (
          <OButton
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
