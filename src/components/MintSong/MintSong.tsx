import React, { useState } from "react";

// custom-component imports
import MintSongButton from "./MintSongButton/MintSongButton";
import MintSongModal from "./MintSongModal/MintSongModal";

// wagmi imports
import { useSigner } from "wagmi";
import { MintMusicWAdFormValues } from "./MintSongModal/MintForm/MintForm.types";
import { mintMusicAndAdv } from "../../services/smart-contract/mintMusicAndAdv";

const MintSong: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const { data: signer } = useSigner();

  const handleMintForm = async (formData: MintMusicWAdFormValues) => {
    if (!signer) {
      //TODO: error
      return;
    }

    setIsMinting(true);
    try {
      await mintMusicAndAdv(formData, signer);
    } catch (err) {
      console.log(err);
    } finally {
      setIsMinting(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <MintSongButton onToggleModal={() => setShowModal(true)} />
      <MintSongModal
        isMinting={isMinting}
        isVisible={showModal}
        onCloseModel={() => setShowModal(false)}
        onHandleMintForm={(formData) => handleMintForm(formData)}
      />
    </>
  );
};

export default MintSong;
