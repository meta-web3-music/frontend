"use client";
import { fetchIpfs, ipfsToHttps } from "../../services/ipfs/fetchIpfs";
import { MusicNftMetaData } from "../../types/MusicNFTData";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { GetAllMusicQuery } from "@/graph-ql/queries/muzik/__generated__/graphql";
import { useEffect, useState } from "react";
import SongListItemUI from "./SongListItemUI";
type Props = {
  musicNft: GetAllMusicQuery["musicNFTs"][0];
  onPlaySong: () => void;
};

const SongListItemMusiz = ({ musicNft, onPlaySong }: Props) => {
  const [metaData, setMetaData] = useState<MusicNftMetaData>();
  useEffect(() => {
    fetchIpfs<MusicNftMetaData>(musicNft.metaDataUri).then(setMetaData);
  }, [musicNft]);
  const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);
  useEffect(() => {
    MusicPlayerSub.subscribe((e) => {
      if (e?.tokenId == musicNft.id) {
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
    <SongListItemUI
      artist={metaData.body.artist}
      coverArt={getImageSrc()}
      isCurrentPlaying={isCurrentPlaying}
      onPlaySong={onPlaySong}
      title={metaData.body.title}
    />
  );
};

export default SongListItemMusiz;
