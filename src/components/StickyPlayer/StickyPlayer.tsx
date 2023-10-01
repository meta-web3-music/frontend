"use client";
import { useContext, useEffect, useRef, useState, ChangeEvent } from "react";

// type imports
import { StickyPlayerProps } from "./StickyPlayer.types";
import Image from "next/image";
import { AppWalletContext } from "@/context/AppWallet";
import { PremToggleSub } from "@/subs/PremiumToggleSub";
import { transferAmount } from "@/services/backend/axios";
import { StickyPlayerStyled } from "./StickyPlayerStyled";

// COMPONENT
const StickyPlayer: React.FC<StickyPlayerProps> = ({ musicNft }) => {
  const appContext = useContext(AppWalletContext);
  const adv = musicNft?.adDetails;
  const [plays, setPlays] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [volume, setVolume] = useState(50);
  const [seekValue, setSeekValue] = useState(0);

  useEffect(() => {
    if (musicNft) {
      setPlays((e) => (e + 1) % 4);
    }
  }, [musicNft]);
  useEffect(() => {
    PremToggleSub.subscribe((e) => {
      setIsPremium(e);
    });
  }, []);
  const [isPlayingAd, setIsPlayingAd] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const [sender, setSender] = useState("");

  const stop_stream = async () => {
    if (sender == "") return;
    setSender("");
    const fusdcx = await appContext.superfluid?.loadSuperToken("fUSDCx");
    if (!appContext.wallet) return;
    const op = fusdcx?.deleteFlow({
      receiver: sender,
      sender: appContext.wallet.address,
    });
    await op?.exec(appContext.wallet);
  };
  const update_stream = async () => {
    if (musicNft && appContext.wallet && appContext.superfluid) {
      // const fusdcx = await appContext.superfluid?.loadSuperToken("fUSDCx");

      if (isPlaying) {
        if (musicNft.owner.toLowerCase() == sender.toLowerCase()) return;
        await stop_stream();
        //TODO precheck the balances
        try {
          // const op = fusdcx?.createFlow({
          //   flowRate: "1500000000000000",
          //   receiver: musicNft.owner,
          //   sender: appContext.wallet.address,
          // });
          // const superSigner = appContext.superfluid.createSigner({
          //   signer: appContext.wallet,
          // });
          // setSender(musicNft.owner);
          // await op?.exec(superSigner);
        } catch (error) {
          setIsPremium(false);
          PremToggleSub.next(false);
          console.log((error as { reason: string }).reason);
        }
      } else {
        await stop_stream();
      }
    }
  };
  useEffect(() => {
    update_stream();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, musicNft]);
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

  const adjustVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    audioRef.current!.volume = newVolume / 100;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setSeekValue(newValue);
  };

  const handleSeekEnd = () => {
    const seekTime = (seekValue / 100) * audioTime.duration;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  useEffect(() => {
    setSeekValue((audioTime.currentTime / audioTime.duration) * 100 || 0);
  }, [musicNft, audioTime]);

  const getTime = (s: number): string => {
    if (!s) return "0:00";

    const seconds = Math.floor(s % 60);
    const secondsStr = seconds < 10 ? "0" + seconds : seconds;
    return Math.floor(s / 60) + ":" + secondsStr;
  };
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const eventListnerCallBack = (event: KeyboardEvent) => {
      if (event.key === " " && musicNft) isPlaying ? pauseSong() : playSong();
    };
    document.addEventListener("keydown", eventListnerCallBack);
    return () => {
      document.removeEventListener("keydown", eventListnerCallBack);
    };
  }, [isPlaying, musicNft]);

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

    const endedEventLister = () => {
      if (isPlayingAd) {
        audioRef.current?.removeEventListener("ended", endedEventLister);
        setIsPlayingAd(false);
      }
    };
    audioRef.current?.addEventListener("ended", endedEventLister);
  }, [audioRef, isPlaying, isPlayingAd]);
  useEffect(() => {
    if (isPremium) {
      setIsPlayingAd(false);
    }
  }, [isPremium]);
  useEffect(() => {
    if (!musicNft) return;
    if (isPremium || plays != 0) {
      setIsPlayingAd(false);
    } else setIsPlayingAd(true);
    setIsPlaying(true);
    audioRef.current?.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicNft]);

  useEffect(() => {
    if (
      isPremium &&
      appContext.wallet &&
      musicNft &&
      !musicNft.disableStreaming
    ) {
      transferAmount(appContext.wallet.address, musicNft.owner, 0.0015);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioTime.currentTime]);
  return (
    <StickyPlayerStyled
      className={`fixed flex left-0 bottom-0 dark:bg-gray-800 bg-white p-2 z-10 w-full items-center duration-300 spring-heavy pb-8 ${
        !musicNft ? "translate-y-full" : "translate-y-8"
      }`}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={adv && `https://${adv[1]}`}
        className="flex"
        style={{
          pointerEvents: isPlayingAd ? "initial" : "none",
        }}
      >
        <div className="h-20 w-24 relative justify-self-center mx-5">
          {musicNft?.artworkUrl && (
            <Image
              loading="eager"
              className="!h-[82%] w-full m-auto rounded-md"
              src={
                isPlayingAd && adv
                  ? `images/${adv[0]}.png`
                  : musicNft.artworkUrl
              }
              alt="artwork"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <div className="mr-4 my-auto">
          <p className="text-xl m-0">
            {isPlayingAd && adv ? adv[0] : musicNft?.title}
          </p>
          <p className="m-0 text-xs">
            {isPlayingAd && adv ? adv[2] : musicNft?.artist}
          </p>
        </div>
      </a>
      <audio
        autoPlay
        ref={audioRef}
        className="ml-4"
        src={`${
          isPlayingAd && adv ? `audio/${adv[0]}.mp3` : musicNft?.musicUrl
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

          {/*song bar*/}
          <div className="relative w-36">
            {!isPlayingAd ? (
              <>
                <div className="w-36 h-1 absolute opacity-100">
                  <div
                    className="bg-[#F3EA01] h-1 rounded-lg absolute z-10"
                    style={{
                      width:
                        (audioTime.currentTime / audioTime.duration) * 100 +
                        "%",
                    }}
                  />
                  <div className="bg-[#D9D9D9] w-full h-1 rounded-lg absolute" />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={seekValue}
                  onChange={handleSeek}
                  onMouseUp={handleSeekEnd}
                  className="absolute z-20 w-36 h-1 rounded-lg cursor-pointer slider songbar"
                  style={{
                    top: "0",
                    left: "0",
                    appearance: "none",
                    background: `linear-gradient(to right, #F3EA01 ${seekValue}%, #D9D9D9 ${seekValue}%)`,
                  }}
                />
              </>
            ) : (
              <>
                <div className="w-36 h-1 absolute opacity-0" />
                <div
                  className="bg-[#F3EA01] h-1 rounded-lg absolute z-10"
                  style={{
                    width:
                      (audioTime.currentTime / audioTime.duration) * 100 + "%",
                  }}
                />
                <div className="bg-[#D9D9D9] w-full h-1 rounded-lg absolute" />
              </>
            )}
          </div>

          <p className="my-0 mx-2">{getTime(audioTime.duration)}</p>

          <span
            className="iconify w-4 h-4 mt-1 ml-4 text-[#B2B2B2]"
            data-icon="ic:baseline-volume-mute"
          ></span>

          {/*volume bar*/}
          <div className="ml-1 relative w-16">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={adjustVolume}
              className="w-16 h-1 appearance-none rounded-lg absolute slider volumebar"
              style={{
                background: `linear-gradient(to right, #777777 ${volume}%, #B2B2B2 ${volume}%)`,
              }}
            />
          </div>

          <span
            className="iconify w-4 h-4 mt-1 ml-2 text-[#B2B2B2]"
            data-icon="ic:baseline-volume-up"
          ></span>
        </div>
      </div>

      {!musicNft?.disableStreaming && (
        <div className="flex ml-auto justify-center">
          <p className="mr-2">$0.0015/sec</p>
          <label className="switch mr-2">
            <input
              type="checkbox"
              checked={isPremium}
              onChange={(e) => PremToggleSub.next(e.target.checked)}
            ></input>
            <span className="on-off round"></span>
          </label>
          <p className="mr-2 text-[#00000066]">paying per second</p>
        </div>
      )}
    </StickyPlayerStyled>
  );
};

export default StickyPlayer;
