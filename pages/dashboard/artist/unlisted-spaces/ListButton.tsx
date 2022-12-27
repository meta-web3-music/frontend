import { useConnectModal } from "@rainbow-me/rainbowkit";
import { BigNumberish, ethers } from "ethers";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAccount, useSigner } from "wagmi";
import OButton from "../../../../src/components/OButton/OButton";
import OInput from "../../../../src/components/OInput/OInput";
import OModal from "../../../../src/components/OModal/OModal";
import OModalForm from "../../../../src/components/OModal/OModalForm";
import OModalTitle from "../../../../src/components/OModal/OModalTitle";
import OModalTopNav from "../../../../src/components/OModal/OModalTopNav";
import { placeAdToMarket } from "../../../../src/services/smart-contract/placeAdToMarket";

const ListButton: React.FC<{ adTokenId: BigNumberish }> = (p) => {
  const [showModal, setShowModal] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const { data: signer } = useSigner();
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();

  const handleOnCancel = () => {
    setShowModal(false);
  };

  type ListAdFormValues = {
    price: string;
  };
  const handleAdMintForm = async (formData: ListAdFormValues) => {
    if (!signer) {
      //TODO: error
      return;
    }

    setIsMinting(true);
    try {
      const advSpacePrice_BigInt = ethers.utils.parseEther(
        formData.price.toString()
      );
      await placeAdToMarket(p.adTokenId, advSpacePrice_BigInt, signer);
    } catch (err) {
      console.log(err);
    } finally {
      setIsMinting(false);
      setShowModal(false);
    }
  };

  const { register: registerAd, handleSubmit: handleSubmitAdMint } =
    useForm<ListAdFormValues>();

  return (
    <>
      <OButton
        onClick={() =>
          isConnected ? setShowModal(true) : openConnectModal?.()
        }
        color="yellow"
        btnType="fill"
        className="w-full"
      >
        List Space
      </OButton>
      <OModal isVisible={showModal} onCloseModal={() => setShowModal(false)}>
        <OModalForm onSubmit={handleSubmitAdMint(handleAdMintForm)}>
          <OModalTitle>List Space</OModalTitle>
          <div className="flex flex-col lg:w-5/12 self-center">
            <OModalTopNav>List Adspace</OModalTopNav>

            <OInput
              label="Adspace price"
              required
              placeholder="0.0001 MATIC"
              className="mb-2 w-4/6"
              {...registerAd("price")}
            />

            <div className="mt-5 w-5/6">
              <p className="text-black">
                An AdNFT will be added to the marketplace where it can be bought
                and sold
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

export default ListButton;
