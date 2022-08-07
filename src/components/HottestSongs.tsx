import React, { useState, useEffect } from "react";
import MintPreModal from "./MintPreModal";
import MintModal from "./MintModal";
import NftSongList from "./SongList";
import { FaCaretDown } from "react-icons/fa";
import { useQuery, InMemoryCache } from "@apollo/client";
import { GET_ALL_MUSIC } from "../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
import { GET_ALL_ASKS } from "../graph-ql/queries/GET_ALL_ASKS/getAllAsks";
import { NFTStorage, File } from "nft.storage";

const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
});

const HottestSongs: React.FC = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const {
    loading: isLoadingAllMusic,
    data: allMusicConnection,
    error: allMusicError,
  } = useQuery<GetAllMusic>(GET_ALL_MUSIC, { variables: {} });

  const allMusic = { data: allMusicConnection?.musicNFTs };
  console.log(allMusic);
  // console.log(allMusic.data?.musicNFTs);
  // const renderAllMusic = allMusic.data?.musicNFTs.map((nft) => {
  //   console.log(nft);
  //   return <div></div>;
  // });

  // function to handle toggling of minting modal
  const handleModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleMintForm = async (formData: any) => {
    // query IPFS and store music
    // take back returned music CID
    // create an object payload, stringify and pass as argument to contract function
    const artifactHash = await client.storeBlob(
      formData.upload[0].originFileObj
    );
    console.log(artifactHash);

    // close modal
    handleModal();
  };

  return (
    <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
      <h2 className="text-2xl font-bold">Hottest Songs</h2>
      <h4>Place your ads under the hottest songs</h4>
      <MintPreModal setDisplayModal={setDisplayModal} />
      <MintModal
        onHandleModal={handleModal}
        onHandleMintForm={handleMintForm}
        isVisible={displayModal}
      />
      <div className="flex flex-row align-center">
        <span>Filter by:</span>
        <form>
          <select>
            <option value="1ETH">1ETH and under</option>
          </select>
        </form>
      </div>

      {/* use code below in mapping method */}
      <div className="flex flex-row w-full justify-between p-4 my-4 border rounded-lg text-base">
        <div className="flex flex-col space-around">
          <div className="flex flex-row font-bold items-center">
            <span>Song Title</span>
            <div className="border rounded-full bg-gray-100 px-2 ml-4">
              0x000
            </div>
          </div>
          <div className="flex flex-row items-center mt-1 mb-3">
            <span>Artist name ᐧ 300K views</span>
          </div>
          <div className="flex flex-row font-bold items-center">
            <span>Price: 0.1 ETH</span>
          </div>
        </div>
        <div className="flex flex-row">
          <button className="flex items-center px-11 py-0 my-auto h-2/5 mx-4 bg-[#fe8b4e] text-white font-medium text-base uppercase rounded-full hover:bg-[#f6e8ddb0] hover:text-black hover:border focus:outline-none focus:ring-0 transition duration-150 ease-in-out  ">
            Rent
          </button>
        </div>
      </div>

      {/* {renderAllMusic ? renderAllMusic : null} */}
      {/* <NftSongList hottestSongsList={renderAllMusic} /> */}
    </div>
  );
};

export default HottestSongs;
