"use client";
import { fetchIpfs, ipfsToHttps } from "../../services/ipfs/fetchIpfs";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import styled from "styled-components";
import Image from "next/image";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { GetAllMusicQuery } from "@/graph-ql/queries/muzik/__generated__/graphql";
import { useEffect, useState } from "react";
type Props = {
  musicNft: GetAllMusicQuery["musicNFTs"][0];
  onPlaySong: () => void;
};

const SongListItemStyled = styled.div`
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
const SongListItem = ({ musicNft, onPlaySong }: Props) => {
  const [metaData, setMetaData] = useState<MusicNftMetaData>();
  useEffect(() => {
    fetchIpfs<MusicNftMetaData>(musicNft.metaDataUri).then(setMetaData);
  }, [musicNft]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);
  useEffect(() => {
    MusicPlayerSub.subscribe((e) => {
      if (e?.id == musicNft.id) {
        setIsCurrentPlaying(true);
      } else {
        setIsCurrentPlaying(false);
      }
    });
  }, [musicNft]);
  const getImageSrc = (): string => {
    const artWorkUri = metaData?.body.artwork.info.uri;
    if (!artWorkUri?.includes("ipfs://")) {
      return "";
    }
    const httpsURL = ipfsToHttps(artWorkUri ?? "");
    return httpsURL;
  };

  if (!metaData) return <></>;
  return (
    <SongListItemStyled
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
          src={getImageSrc()}
          alt={`Artwork for ${metaData?.body.title}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
          hidden={!imageLoaded}
          fill
          sizes="100vw"
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
          <p className="m-0 font-bold mb-1 ">{metaData?.body.title}</p>
          <p className="m-0 text-xs ">{metaData?.body.artist}</p>
        </div>
      </div>
    </SongListItemStyled>
  );
};

export default SongListItem;
