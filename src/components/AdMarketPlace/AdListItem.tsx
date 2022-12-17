import React, { useEffect, useState } from "react";
import { fetchIpfs, ipfsToHttps } from "../../services/ipfs/fetchIpfs";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import Image from "next/image";
import { GetUnsold_marketItems } from "../../graph-ql/queries/GET_UNSOLD/__generated__/GetUnsold";
import { ethers } from "ethers";
import { AdListItemStyled } from "./AdListItemStyled";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
type Props = {
  marketItem: GetUnsold_marketItems;
  onBuyClick: (() => void) | undefined;
};

const AdListItem = ({ marketItem, onBuyClick }: Props) => {
  const [metaData, setMetaData] = useState<MusicNftMetaData>();
  useEffect(() => {
    fetchIpfs<MusicNftMetaData>(marketItem.token.musicNFT.metaDataUri).then(
      setMetaData
    );
  }, [marketItem]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getImageSrc = (): string => {
    const artWorkUri = metaData?.body.artwork.info.uri;

    if (!artWorkUri?.includes("ipfs://")) {
      return "";
    }
    const httpsURL = ipfsToHttps(artWorkUri ?? "");
    return httpsURL;
  };
  return (
    <AdListItemStyled
      className="m-2 shadow-2xl hover:scale-105 duration-200 rounded-lg overflow-hidden dark:bg-white"
      onClick={() => MusicPlayerSub.next(marketItem.token.musicNFT)}
    >
      <div className="relative h-60 w-40 md:w-48 lg:w-56 flex">
        <div
          className={`image-placeholder duration-200 h-full w-full flex justify-center items-center text-8xl text-blue-800  ${
            imageLoaded ? "hidden" : "block"
          }`}
        >
          <span className="iconify" data-icon="bi:music-note-beamed"></span>
        </div>
        {metaData && (
          <Image
            className="object-cover artwork duration-200 m-auto"
            src={getImageSrc()}
            layout="fill"
            alt={`Artwork for ${metaData?.body.title}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
            objectFit={"cover"}
          />
        )}

        <div
          className={`play-button duration-300 scale-50 opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl ml-auto  flex align-center ${
            imageLoaded ? "text-white" : "text-blue-800"
          }`}
        >
          <span className="iconify" data-icon="bi:play-fill"></span>
        </div>
      </div>

      <div className="flex pl-2 items-stretch">
        <div className="w-1/2 leading-3 flex justify-center flex-col data my-1 ">
          <p className="m-0 font-bold mb-1 ">{metaData?.body.title}</p>
          <p className="m-0 text-xs ">{metaData?.body.artist}</p>
        </div>
        <button
          className="w-3/4  text-white inline font-bold rounded-2xl my-auto ml-auto mr-1 h-9 overflow-hidden relative buy-btn"
          style={{ background: "#0E77FC" }}
          onClick={onBuyClick}
        >
          <div className="span absolute -top-full left-1/2 -translate-y-1/2 -translate-x-1/2 label duration-300">
            Buy
          </div>
          <span className="price text-xs absolute price top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-300">
            {ethers.utils.formatUnits(marketItem.price)} MATIC
          </span>
          <span className="opacity-0 text-xs">
            {ethers.utils.formatUnits(marketItem.price)} MATIC
          </span>
        </button>
      </div>
    </AdListItemStyled>
  );
};

export default AdListItem;
