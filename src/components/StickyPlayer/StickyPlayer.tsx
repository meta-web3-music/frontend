import { useCallback, useEffect, useRef, useState } from "react";

// utility imports
import { fetchIpfs, ipfsToHttps } from "../../services/ipfs/fetchIpfs";

// type imports
import { StickyPlayerProps } from "./StickyPlayer.types";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import styled from "styled-components";
import Image from "next/image";

const Styled = styled.div``;

// COMPONENT
const StickyPlayer: React.FC<StickyPlayerProps> = ({
  onClosePlayer,
  musicNft,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioTime, setAudioTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const playSong = () => {
    setIsPlaying(true);
    audioRef.current?.play();
  };

  const pauseSong = () => {
    setIsPlaying(false);
    audioRef.current?.pause();
  };

  const getTime = (s: number): string => {
    const seconds = Math.floor(s % 60);
    const secondsStr = seconds < 10 ? "0" + seconds : seconds;
    return Math.floor(s / 60) + ":" + secondsStr;
  };
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", () => {
      const currentTime = audioRef.current?.currentTime ?? 0;
      const duration = audioRef.current?.duration ?? 0;
      setAudioTime({
        currentTime,
        duration,
      });
    });
  }, [audioRef]);
  const [musicMetaData, setMusicMetaData] = useState<MusicNftMetaData>();
  const fetchMusicMetaData = useCallback(async () => {
    try {
      if (!musicNft) return;
      const musicNftMetaData = await fetchIpfs<MusicNftMetaData>(
        musicNft.metaDataUri
      );
      setMusicMetaData(musicNftMetaData);
    } catch {
      //
    }
  }, [musicNft]);

  useEffect(() => {
    setIsPlaying(true);
    fetchMusicMetaData();
  }, [fetchMusicMetaData, musicNft]);

  return (
    <Styled
      className={`fixed flex left-0 bottom-0 backdrop-blur-2xl dark:bg-gray-800/60 bg-gray-800/75 text-white p-2 z-10 w-full items-center duration-300 spring-heavy pb-10 ${
        !musicNft ? "translate-y-full" : "translate-y-8"
      }`}
    >
      <div className="h-11 w-11 relative mr-2">
        <Image
          className="h-full w-full"
          objectFit="contain"
          src={ipfsToHttps(musicMetaData?.body.artwork.info.uri ?? "")}
          layout="fill"
          alt="artwork"
        />
      </div>
      <div className="mr-4">
        <p className="text-2xl m-0">{musicMetaData?.body.title}</p>
        <p className="m-0 text-xs">{musicMetaData?.body.artist}</p>
      </div>
      <audio
        autoPlay
        ref={audioRef}
        loop
        className="ml-4"
        src={`${ipfsToHttps(musicNft?.assetUri ?? "")}`}
      />

      <div className="flex">
        <div className="relative ml-1 mr-3 hover:scale-150 text-4xl duration-200">
          <div
            className={`duration-200 absolute flex items-center ${
              isPlaying ? "opacity-0 rotate-90 pointer-events-none" : ""
            }`}
            onClick={playSong}
          >
            <span className="iconify" data-icon="bi:play-fill"></span>
          </div>
          <div
            className={`duration-200 absolute flex items-center ${
              isPlaying ? "" : "opacity-0 rotate-90 pointer-events-none"
            }`}
            onClick={pauseSong}
          >
            <span className="iconify" data-icon="bi:pause-fill"></span>
          </div>
          <div className="opacity-0 pointer-events-none">
            <span className="iconify" data-icon="bi:play-fill"></span>
          </div>
        </div>

        <div className="flex items-center">
          <p className="my-0 mx-2">{getTime(audioTime.currentTime)}</p>

          <div className="relative  w-36">
            <div className="w-36 h-1 absolute opacity-0" />
            <div
              className="bg-[#0E77FC] h-1 rounded-lg absolute z-10"
              style={{
                width: (audioTime.currentTime / audioTime.duration) * 100 + "%",
              }}
            />
            <div className="bg-[#363636] w-full h-1 rounded-lg absolute" />
          </div>

          <p className="my-0 mx-2">{getTime(audioTime.duration)}</p>
        </div>
      </div>
      <div
        className="text-2xl mr-2 duration-150 hover:-rotate-90 ml-auto"
        onClick={onClosePlayer}
      >
        <span className="iconify" data-icon="akar-icons:cross"></span>
      </div>
    </Styled>
  );
};

export default StickyPlayer;
