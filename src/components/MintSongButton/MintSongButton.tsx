"use client";
import React, { useCallback, useEffect, useState } from "react";

// wagmi imports
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { MintMusicFormValues } from "./MintSongModal/MintForm/MintForm.types";
import * as musicMetadata from "music-metadata-browser";
import { mintMusic } from "../../services/smart-contract/mintMusic";
import OButton from "../OButton/OButton";
import OInput from "../OInput/OInput";
import OModal from "../OModal/OModal";
import OUpload from "../OUpload/OUpload";
import { useForm } from "react-hook-form";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import OModalTitle from "../OModal/OModalTitle";
import OModalTopNav from "../OModal/OModalTopNav";
import OModalForm from "../OModal/OModalForm";
type Props = {
  musicTokenId?: bigint;
  color: "blue" | "yellow" | "gray";
  text?: string;
};
const MintSongButton: React.FC<Props> = (p) => {
  const [showModal, setShowModal] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  const [tAndCModal, setTAndCModal] = useState(false);

  const handleMusicMintForm = async (formData: MintMusicFormValues) => {
    if (!walletClient) {
      //TODO: error
      return;
    }

    setIsMinting(true);
    try {
      await mintMusic(formData, publicClient, walletClient);
    } catch (err) {
      console.log(err);
    } finally {
      setIsMinting(false);
      setShowModal(false);
    }
  };

  const handleOnCancel = () => {
    setShowModal(false);
  };

  const {
    register: registerMusic,
    handleSubmit: handleSubmitMusicMint,
    setValue,
    watch,
  } = useForm<MintMusicFormValues>();
  const songFile = watch("songFile")?.item(0);
  const fillFromMetaData = useCallback(async () => {
    if (songFile) {
      const songMetadata = await musicMetadata.parseBlob(songFile);
      if (songMetadata.common.title)
        setValue("songName", songMetadata.common.title);

      if (songMetadata.common.artist)
        setValue("artistName", songMetadata.common.artist);
    }
  }, [setValue, songFile]);
  useEffect(() => {
    fillFromMetaData();
  }, [songFile, fillFromMetaData]);

  return (
    <>
      <div
        onClick={() =>
          isConnected ? setShowModal(true) : openConnectModal?.()
        }
        className="flex justify-center items-center m-2 w-60 md:w-48 lg:w-60 h-80 border-[1px] border-solid border-[#00000026] text-[#00000026] text-[10rem] font-light rounded-md"
      >
        <span className="iconify" data-icon="ph:plus-thin"></span>
      </div>
      <OModal isVisible={showModal} onCloseModal={() => setShowModal(false)}>
        <OModalForm onSubmit={handleSubmitMusicMint(handleMusicMintForm)}>
          <OModalTitle>Create Space</OModalTitle>
          <div className="flex flex-col w-5/12 self-center">
            <div className="flex">
              <OModalTopNav>Upload and mint song</OModalTopNav>
            </div>

            <>
              <OInput
                label="Artist Name"
                required
                placeholder="ABC"
                className="mb-2 w-4/6"
                {...registerMusic("artistName")}
              />
              <OInput
                label="Title"
                required
                placeholder="Man in the sea"
                className="mb-2 w-4/6"
                {...registerMusic("songName")}
              />
              <div className="my-2"></div>
              <OUpload
                info="Upload song up to 3MB, Supported formats .mp3, .wav"
                label="Music Upload"
                required
                buttonText="Upload song"
                className="w-1/3 mr-4"
                accept=".mp3,.wav"
                {...registerMusic("songFile")}
              />
              <OUpload
                info="Upload image up to 3MB, Supported formats .jpeg, .png"
                label="Cover art upload"
                required
                buttonText="Upload cover"
                className="w-1/3"
                accept=".png,.img.,.jpg,.jpeg"
                {...registerMusic("artWorkFile")}
              />
            </>

            <div className="mt-5 w-5/6">
              <p className="text-black dark:text-white">
                <>
                  By clicking on “Upload and mint” you agree that you have read
                  the{" "}
                  <a
                    onClick={() => {
                      setTAndCModal(true);
                    }}
                    className="text-[rgba(9,34,255,0.70)] hover:underline hover:text-[rgba(9,34,255,0.70)]"
                  >
                    T&Cs
                  </a>{" "}
                  and confirm that you own all the rights to the song
                </>
              </p>
              <div className="flex">
                <OButton
                  btnType="fill"
                  color="gray"
                  isLoading={false}
                  className="mt-1 inline-flex w-1/2 py-3 mb-4 mr-4"
                  onClick={handleOnCancel}
                >
                  Cancel
                </OButton>
                <OButton
                  btnType="fill"
                  color="yellow"
                  isLoading={isMinting}
                  className="mt-1 inline-flex w-1/2 py-3 mb-4"
                  type="submit"
                >
                  Upload and mint
                </OButton>
              </div>
            </div>
          </div>
        </OModalForm>
      </OModal>
      <OModal isVisible={tAndCModal} onCloseModal={() => setTAndCModal(false)}>
        <div className="bg-white h-[80vh] w-[90vw] overflow-scroll text-black rounded-md p-5 pr-72 flex flex-col z-20">
          <div className="flex mb-4">
            <div
              className="text-2xl mr-4 mt-1 cursor-pointer"
              onClick={() => {
                setTAndCModal(false);
              }}
            >
              <span
                className="iconify"
                data-icon="material-symbols:arrow-back"
              ></span>
            </div>
            <div className="text-lg">
              <p className="text-2xl font-bold">
                Terms and Conditions for Song Minting as an NFT
              </p>
              <p>
                By clicking on the &quot;Upload and mint&quot; button, you
                represent and warrant that you have confirmed that you own all
                rights, including intellectual property rights, in and to the
                song that you are uploading. You further agree that you will
                indemnify and hold Schelling Labs Inc. and its affiliates,
                employees, agents, and representatives from any and all claims,
                damages, and expenses arising from any breach of this
                representation and warranty.
              </p>
              <p>
                You acknowledge that Schelling Labs Inc. does not endorse any
                content submitted by users and is not responsible for any
                intellectual property infringement or other legal issues that
                may arise from your submission. By clicking on the &quot;Upload
                and mint&quot; button, you acknowledge that you have read and
                agree to these terms and conditions, and that the song will be
                minted as a non-fungible token (NFT). You understand that this
                process creates a unique digital asset that may be bought and
                sold in the open market. You agree that you are solely
                responsible for the promotion and sale of your NFT, and that you
                will not hold Schelling Labs Inc. responsible for any loss or
                damage that may arise from the sale or promotion of your NFT.
                You acknowledge that you are aware of the risks associated with
                participating in the NFT market, and that you are solely
                responsible for conducting your own due diligence and for making
                your own investment decisions. By clicking on the &quot;Upload
                and mint&quot; button, you acknowledge that you have read and
                agree to these terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </OModal>
    </>
  );
};

export default MintSongButton;
