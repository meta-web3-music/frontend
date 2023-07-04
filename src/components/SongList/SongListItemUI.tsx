"use client";
import styled from "styled-components";
import Image from "next/image";
import React, { useState } from "react";
type Props = {
  onPlaySong: () => void;
  coverArt: string;
  title: string;
  artist: string;
  isCurrentPlaying: boolean;
  customBtn?: React.ReactNode;
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
    box-shadow: 0px 0px 14px 4px #f3ea01;
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
  isCurrentPlaying,
  customBtn,
}: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <SongListItemUIStyled
      className={`m-2 shadow-2xl hover:scale-105 duration-200 rounded-lg overflow-hidden dark:bg-white ${
        isCurrentPlaying ? "playing" : ""
      }`}
      onClick={onPlaySong}
    >
      <div className="relative h-60 w-40 md:w-48 lg:w-56">
        <div
          className={`image-placeholder duration-200 h-full w-full flex justify-center items-center text-8xl text-blue-800 ${
            imageLoaded ? "hidden" : "block"
          }`}
        >
          <span className="iconify" data-icon="bi:music-note-beamed"></span>
        </div>

        <Image
          className="object-cover artwork duration-200"
          src={coverArt}
          alt={`Artwork for ${title}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
          hidden={!imageLoaded}
          fill
        />
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
          <p className="m-0 font-bold mb-1 ">{title}</p>
          <p className="m-0 text-xs ">{artist}</p>
        </div>
      </div>
      {customBtn && customBtn}
    </SongListItemUIStyled>
  );
};

export default SongListItemUI;
