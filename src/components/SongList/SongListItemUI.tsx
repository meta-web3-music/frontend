"use client";
import styled from "styled-components";
import Image from "next/image";
import React, { useState } from "react";
import { Platform } from "@/types/Platform";
type Props = {
  onPlaySong: () => void;
  coverArt?: string;
  title: string;
  artist: string;
  platform?: { url: string; name: Platform };
  isCurrentPlaying: boolean;
  customBtn?: React.ReactNode;
  viewOn?: { url: string; name: string };
};

const SongListItemUIStyled = styled.div`
  :hover {
    .play-button {
      transform: scale(1) translate(-50%, -50%);
      opacity: 1;
    }

    .image-placeholder {
      scale: 0.7;
      opacity: 0;
    }

    .artwork {
      transform: scale(1.03);
    }
  }

  &.playing {
    box-shadow: 0px 0px 4px 4px #f3eb0186;
  }
  .data {
    color: #042440;
  }
`;
const SongListItemUI = ({
  onPlaySong,
  coverArt,
  artist,
  title,
  platform,
  isCurrentPlaying,
  customBtn,
  viewOn,
}: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="m-2 w-60 md:w-48 lg:w-60">
      <SongListItemUIStyled
        className={`hover:scale-105 duration-200 rounded-md overflow-hidden dark:bg-white border-2 ${
          isCurrentPlaying ? "playing" : ""
        }`}
      >
        <div
          className="relative h-40 w-full rounded-lg overflow-hidden"
          onClick={onPlaySong}
        >
          <div
            className={`image-placeholder bg-[#F6F6F6] duration-200 h-full w-full flex justify-center items-center text-8xl text-blue-800 ${
              imageLoaded ? "hidden" : "block"
            }`}
          ></div>
          {coverArt && (
            <Image
              loading="eager"
              className="object-cover artwork duration-200"
              src={coverArt}
              alt={`Artwork for ${title}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
              hidden={!imageLoaded}
              fill
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
        <div className="flex px-4 items-stretch w-full">
          <div className="leading-4 flex justify-center flex-col data my-3 w-full">
            <p className="m-0 font-bold mb-1 text-ellipsis whitespace-nowrap overflow-hidden">
              {title}
            </p>
            <p className="m-0 text-xs text-[#00000099]">{artist}</p>
            {viewOn && (
              <a href={viewOn.url}>
                <p className="text-[#2D5F8A] mt-3 mb-1">
                  View on {viewOn.name}
                </p>
              </a>
            )}
            {platform && (
              <a href={platform.url}>
                <p className="text-[#2D5F8A] mt-3 mb-1">
                  View on {platform.name}
                </p>
              </a>
            )}
          </div>
        </div>
      </SongListItemUIStyled>
      {customBtn && customBtn}
    </div>
  );
};

export default SongListItemUI;
