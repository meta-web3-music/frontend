import React, { useState, useEffect, useContext } from "react";
import MintPreModal from "./MintPreModal";
import MintModal from "./MintModal";
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSIC } from "../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import { NFTStorage, File } from "nft.storage";

import { Typography } from "antd";
import AdBanner from "./AdBanner";

const { Text, Title } = Typography;
import SongList from "./SongList";
import { WalletContext } from "../contexts/WalletContext";
import { NewAdvJson, NewMusicJson, OffChainFile } from "../types/JsonUri";
import { Idl, Program, web3 } from "@project-serum/anchor";
import { MusicNft } from "../contracts/types/music_nft";
import { MintBoth } from "../contracts/mint/mintBoth";

// create client instance for nft.storage
const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

type songShape = {
  name: string;
  artist: string;
  url: string;
};

const HottestSongs: React.FC = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const walletContext = useContext(WalletContext);
  const [selectedSong, setSelectedSong] = useState({
    name: "Unknown",
    artist: "Unknown",
    url: "",
  });
  const [isFetchingBanner, setIsFetchingBanner] = useState(false);

  // function to handle toggling of minting modal
  const handleModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleMintForm = async (formData: any) => {
    try {
      const provider = await walletContext.getWeb3Provider();
      setIsMinting(true); // Music Blob
      // connect to music nft smart-contract
      // const musicNft = MusicNFT__factory.connect(MusicNFTAddr, signer);
      if (!walletContext.walletPubKey) {
        alert("Wallet connection failed, please disconnect and reconnect");
        return;
      }
      console.log("handleMintForm: minting both");

      await MintBoth(
        {
          nftStorage: client,
          provider,
          songName: formData.songName,
          walletPubKey: walletContext.walletPubKey,
        },
        formData.upload[0].originFileObj
      );
    } catch (err: any) {
      setIsMinting(false);
      console.log(err);
      console.log(err.stack);
    }

    // close modal
  };

  const handlePlaySong = async (songId: string) => {
    try {
      setIsFetchingBanner(true);
      //set local state
      setSelectedSong({
        name: "Last last",
        artist: "Burna Boy",
        url: songId,
      });
    } catch (err) {
      setIsFetchingBanner(false);
    }
    // set selected Song state
    // set banner place holder to start loading while fetching image from ipfs
  };

  return (
    <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
      <Title level={3}>Hottest Songs</Title>
      <Text>Place your ads under the hottest songs</Text>
      <MintPreModal setDisplayModal={handleModal} />
      <MintModal
        onHandleModal={handleModal}
        onHandleMintForm={handleMintForm}
        isVisible={displayModal}
        isMinting={isMinting}
      />
      <AdBanner imageUrl="" />
      <SongList playSong={handlePlaySong} />
      <StickyPlayer selectedSong={selectedSong} />
    </div>
  );
};

export default HottestSongs;

interface StickyPlayerProps {
  selectedSong: songShape;
}

const StickyPlayer: React.FC<StickyPlayerProps> = ({ selectedSong }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        boxShadow: "1px 0px 12px 1px rgba(0,0,0,0.35)",
        zIndex: "2",
        position: "fixed",
        bottom: "1em",
        left: "1em",
        display: "flex",
        maxWidth: "500px",
        flexDirection: "column",
        padding: ".7em 1em",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title style={{ margin: "0" }} level={5}>
          {selectedSong?.name}
        </Title>
        <Text type="secondary">{selectedSong?.artist}</Text>
      </div>
      <audio autoPlay loop controls src={`${selectedSong?.url}`}></audio>
    </div>
  );
};
