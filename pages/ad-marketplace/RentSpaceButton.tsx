import { useConnectModal } from "@rainbow-me/rainbowkit";
import { BigNumberish } from "ethers";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAccount, useSigner } from "wagmi";
import { BuyAdFormValues } from "../../src/components/BuyAdModal/BuyAdForm.types";
import OButton from "../../src/components/OButton/OButton";
import OInput from "../../src/components/OInput/OInput";
import OModal from "../../src/components/OModal/OModal";
import OModalForm from "../../src/components/OModal/OModalForm";
import OModalTitle from "../../src/components/OModal/OModalTitle";
import OModalTopNav from "../../src/components/OModal/OModalTopNav";
import OTextArea from "../../src/components/OTextArea/OTextArea";
import OUpload from "../../src/components/OUpload/OUpload";
import { buyAdvNft } from "../../src/services/smart-contract/buyAdvNft";

type Props = {
  marketItemId: BigNumberish;
  price: BigNumberish;
  adNftId: BigNumberish;
};
const RentSpaceButton: React.FC<Props> = (p) => {
  const [showModal, setShowModal] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const { data: signer } = useSigner();
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();

  const handleOnCancel = () => {
    setShowModal(false);
  };

  const handleAdBuyForm = async (formData: BuyAdFormValues) => {
    if (!signer) {
      //TODO: error
      return;
    }

    setIsMinting(true);
    try {
      await buyAdvNft(formData, p.marketItemId, p.adNftId, p.price, signer);
    } catch (err) {
      console.log(err);
    } finally {
      setIsMinting(false);
      setShowModal(false);
    }
  };

  const { register: registerAd, handleSubmit: handleSubmitAdBuy } =
    useForm<BuyAdFormValues>();

  return (
    <>
      <OButton
        onClick={() =>
          isConnected ? setShowModal(true) : openConnectModal?.()
        }
        color="yellow"
        btnType="outline"
        className="w-full"
      >
        Rent space now
      </OButton>
      <OModal isVisible={showModal} onCloseModal={() => setShowModal(false)}>
        <OModalForm onSubmit={handleSubmitAdBuy(handleAdBuyForm)}>
          <OModalTitle>Rent</OModalTitle>
          <div className="flex flex-col lg:w-5/12 self-center">
            <OModalTopNav>Adspace</OModalTopNav>

            <OInput
              label="Title"
              required
              placeholder="A nice app"
              className="mb-2 w-4/6"
              {...registerAd("advTitle")}
            />

            <OInput
              label="Url"
              required
              placeholder="www.myapp.com"
              className="mb-2 w-4/6"
              type="url"
              {...registerAd("adUrl")}
            />
            <OTextArea
              label="Description"
              required
              placeholder="Get y thing done quickly"
              className="mb-2 w-4/6"
              {...registerAd("advDesc")}
            />

            <OUpload
              info="Upload audio up to 3MB, Supported formats .mp3, .wav"
              label="Sound Ad Upload"
              required
              buttonText="Sound ad file"
              className="w-1/3 mr-4"
              accept=".mp3,.wav"
              {...registerAd("advAudioFile")}
            />
            <OUpload
              info="Upload image up to 3MB, Supported formats .jpg, .png"
              label="Banner image upload"
              required
              buttonText="Banner image"
              className="w-1/3"
              accept=".png,.jpg,.jpeg"
              {...registerAd("bannerImage")}
            />
            <div className="mt-5 w-5/6">
              <p className="text-black dark:text-white">
                An AdNFT will be bought using MATIC
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
                  List on marketplace
                </OButton>
              </div>
            </div>
          </div>
        </OModalForm>
      </OModal>
    </>
  );
};

export default RentSpaceButton;
