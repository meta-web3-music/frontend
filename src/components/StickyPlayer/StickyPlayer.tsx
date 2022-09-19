import { useCallback, useEffect, useState } from "react";

// utility imports
import { fetchIpfs, ipfsToHttps } from "../../services/ipfs/fetchIpfs";

// type imports
import { StickyPlayerProps } from "./StickyPlayer.types";
import { MusicNftMetaData } from "../../types/MusicNFTData";

// COMPONENT
const StickyPlayer: React.FC<StickyPlayerProps> = ({
  onClosePlayer,
  musicNft,
}) => {
  const [musicMetaData, setMusicMetaData] = useState<MusicNftMetaData>();
  const fetchMusicMetaData = useCallback(async () => {
    const musicNftMetaData = await fetchIpfs<MusicNftMetaData>(
      musicNft.metaDataUri
    );
    setMusicMetaData(musicNftMetaData);
  }, [musicNft]);

  useEffect(() => {
    fetchMusicMetaData();
  }, [fetchMusicMetaData, musicNft]);

  return (
    <div className="fixed left-2 backdrop-blur-2xl bottom-2 bg-gray-800/50 text-white p-2 rounded-xl z-10">
      <div className="flex items-center">
        <div className="div">
          <p className="text-2xl m-0">{musicMetaData?.body.title}</p>
          <p>{musicMetaData?.body.artist}</p>
        </div>
        <div
          className="div text-2xl ml-auto mr-2 mb-auto mt-2 duration-150 hover:-rotate-90"
          onClick={onClosePlayer}
        >
          <span className="iconify" data-icon="akar-icons:cross"></span>
        </div>
      </div>

      <audio
        autoPlay
        loop
        controls
        src={`${ipfsToHttps(musicNft.assetUri)}`}
      ></audio>
    </div>
  );
};

export default StickyPlayer;
