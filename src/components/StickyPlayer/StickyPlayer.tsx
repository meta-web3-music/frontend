"use client";
import { useCallback, useEffect, useRef, useState } from "react";

// utility imports
import { fetchIpfs, ipfsToHttps } from "../../services/ipfs/fetchIpfs";

// type imports
import { StickyPlayerProps } from "./StickyPlayer.types";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import Image from "next/image";
import { AdvNftMetaData } from "../../types/AdvNFTData";

// COMPONENT
const StickyPlayer: React.FC<StickyPlayerProps> = ({
  onClosePlayer,
  musicNft,
}) => {
  const resetStates = () => {
    setIsPlayingAd(false);
    setIsPlaying(true);
    setMusicMetaData(undefined);
    setAdvMetaData(undefined);
    setAudioTime({
      currentTime: 0,
      duration: 0,
    });
  };
  const [isPlayingAd, setIsPlayingAd] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [musicMetaData, setMusicMetaData] = useState<MusicNftMetaData>();
  const [advMetaData, setAdvMetaData] = useState<AdvNftMetaData>();
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
    if (!s) return "0:00";

    const seconds = Math.floor(s % 60);
    const secondsStr = seconds < 10 ? "0" + seconds : seconds;
    return Math.floor(s / 60) + ":" + secondsStr;
  };
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const eventListnerCallBack = (event: KeyboardEvent) => {
      if (event.key === " " && musicMetaData)
        isPlaying ? pauseSong() : playSong();
    };
    document.addEventListener("keydown", eventListnerCallBack);
    return () => {
      document.removeEventListener("keydown", eventListnerCallBack);
    };
  }, [isPlaying, musicMetaData]);
  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", () => {
      const currentTime = audioRef.current?.currentTime ?? 0;
      const duration = audioRef.current?.duration ?? 0;
      setAudioTime({
        currentTime,
        duration,
      });
    });
    audioRef.current?.addEventListener("pause", () => {
      if (isPlaying) setIsPlaying(false);
    });
    audioRef.current?.addEventListener("play", () => {
      if (!isPlaying) setIsPlaying(true);
    });
    audioRef.current?.addEventListener("ended", () => {
      if (isPlayingAd) setIsPlayingAd(false);
    });
  }, [audioRef, isPlaying, isPlayingAd]);
  const fetchMetaData = useCallback(async () => {
    try {
      if (!musicNft) return;
      const musicNftMetaData = await fetchIpfs<MusicNftMetaData>(
        musicNft.metaDataUri
      );
      setMusicMetaData(musicNftMetaData);

      if (!musicNft.advNfts) return;
      const advNftMetaData = await fetchIpfs<AdvNftMetaData>(
        musicNft.advNfts[0].metaDataHash
      );

      setAdvMetaData(advNftMetaData);
      if (advNftMetaData?.ad_audio_url) setIsPlayingAd(true);
    } catch {
      //
    }
  }, [musicNft]);

  useEffect(() => {
    setIsPlayingAd(false);
    setIsPlaying(true);
    fetchMetaData();
  }, [fetchMetaData, musicNft]);

  return (
    <div
      className={`fixed flex left-0 bottom-0 backdrop-blur-2xl dark:bg-gray-800/60 bg-gray-800/75 text-white p-2 z-10 w-full items-center duration-300 spring-heavy pb-10 ${
        !musicNft ? "translate-y-full" : "translate-y-8"
      }`}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={advMetaData?.external_url}
        className="flex text-white"
        style={{
          pointerEvents: isPlayingAd ? "initial" : "none",
        }}
      >
        <div className="h-11 w-11 relative mr-2">
          {musicNft && musicMetaData?.body.artwork.info.uri && (
            <Image
              className="h-full w-full"
              src={
                isPlayingAd && musicNft?.advNfts?.[0].assetHash
                  ? ipfsToHttps(musicNft?.advNfts?.[0].assetHash ?? "")
                  : ipfsToHttps(musicMetaData?.body.artwork.info.uri ?? "")
              }
              alt="artwork"
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
            />
          )}
        </div>
        <div className="mr-4">
          <p className="text-2xl m-0">
            {isPlayingAd ? advMetaData?.ad_title : musicMetaData?.body.title}
          </p>
          <p className="m-0 text-xs">
            {isPlayingAd
              ? advMetaData?.ad_description
              : musicMetaData?.body.artist}
          </p>
        </div>
      </a>
      <audio
        autoPlay
        ref={audioRef}
        className="ml-4"
        src={`${
          isPlayingAd
            ? ipfsToHttps(advMetaData?.ad_audio_url ?? "")
            : ipfsToHttps(musicNft?.assetUri ?? "")
        }`}
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
        onClick={() => {
          resetStates();
          onClosePlayer();
        }}
      >
        <span className="iconify" data-icon="akar-icons:cross"></span>
      </div>
    </div>
  );
};

export default StickyPlayer;
