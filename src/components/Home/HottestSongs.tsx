"use client";
import React, { useState, useMemo, useEffect } from "react";

// custom-components imports
import SongList from "../SongList/SongList";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { GetAllMusicQuery } from "@/graph-ql/queries/octav3/__generated__/graphql";
import { MusicNftMetaData } from "@/types/MusicNFTData";
import { deToHttps, fetchDe } from "@/services/de-storage/fetchDe";
import AdBanner from "../AdBanner/AdBanner";
import { PremToggleSub } from "@/subs/PremiumToggleSub";
const advs: [string, string, string][] = [
  [
    "Polygon",
    "polygon.technology",
    "Polygon PoS is one of the most used protocols in the world.",
  ],
  ["MetaMask", "metamask.io", "A crypto wallet & gateway to blockchain apps"],
  ["Coinbase", "www.coinbase.com", "Jump start your crypto portfolio"],
  [
    "Uniswap",
    "uniswap.org",
    "Swap, earn, and build on the leading decentralized crypto trading protocol.",
  ],
];
const HottestSongs: React.FC = () => {
  const [selectedSong, setSelectedSong] =
    useState<GetAllMusicQuery["octaveTokens"][0]>();
  const [currentAd, setCurrentAd] = useState(0);

  const handlePlaySong = async (
    musicNft: GetAllMusicQuery["octaveTokens"][0]
  ) => {
    const metadata = await fetchDe<MusicNftMetaData>(musicNft.tokenUri);
    if (!metadata) return;
    const { artist, artwork, title } = metadata;
    const nextAd = (currentAd + 1) % 4;
    setCurrentAd(nextAd);

    MusicPlayerSub.next({
      artist,
      artworkUrl: deToHttps(artwork.uri),
      contractAddr: musicNft.musicNftAddr,
      musicUrl: deToHttps(metadata.animation_url),
      title: title ?? "",
      tokenId: musicNft.musicNftTokenId,
      adDetails: advs[nextAd],
      owner: musicNft.owner,
    });
    setSelectedSong(musicNft);
  };

  const memoizedSongList = useMemo(
    () => <SongList playSong={handlePlaySong} />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentAd]
  );
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    PremToggleSub.subscribe((e) => {
      setIsPremium(e);
    });
  }, []);
  return (
    <div className="w-full bg-[#F7F7F7] dark:bg-slate-900">
      <div className="flex flex-col align-center justify-center w-full md:w-5/6 m-2 md:m-auto px-2 text-left pt-14">
        <p className="text-4xl font-bold mb-10 text-[#000000cc] dark:text-white">
          Songs
        </p>
        {selectedSong && !isPremium && (
          <AdBanner
            image={`images/${advs[currentAd][0]}.png`}
            website={`https://${advs[currentAd][1]}`}
          />
        )}
        {memoizedSongList}
      </div>
    </div>
  );
};

export default HottestSongs;
