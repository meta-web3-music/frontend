import React, { useState, useEffect } from "react";
import MintPreModal from "./MintPreModal";
import MintModal from "./MintModal";
import { FaCaretDown } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSIC } from "../graph-ql/queries/GET_ALL_MUSIC/getAllMusic";
import { GetAllMusic } from "../graph-ql/queries/GET_ALL_MUSIC/__generated__/GetAllMusic";
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
    </div>
  );
};

export default HottestSongs;
