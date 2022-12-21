import React, { useEffect } from "react";
const urlPattern =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i;

// types imports
import { AdModalProps } from "./BuyAdModal.types";
import { BuyAdFormValues } from "./BuyAdForm.types";
import OInput from "../OInput/OInput";
import OTextArea from "../OTextArea/OTextArea";
import OUpload from "../OUpload/OUpload";
import OButton from "../OButton/OButton";
import { useForm } from "react-hook-form";

const BuyAdModal: React.FC<AdModalProps> = ({
  onCloseModal,
  onHandleAdForm,
  isVisible,
  isCreatingAd,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BuyAdFormValues>();

  useEffect(() => {
    const eventListnerCallBack = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseModal();
    };
    document.addEventListener("keydown", eventListnerCallBack);
    return () => {
      document.removeEventListener("keydown", eventListnerCallBack);
    };
  }, [onCloseModal]);

  return (
    <>
      <div
        className={`duration-200 ease-out fixed top-0 left-0 flex z-10
    justify-center items-center w-screen h-screen ${
      isVisible ? "" : "translate-y-full"
    }`}
      >
        <div
          className="duration-1000 ease-out z-10 w-screen h-screen backdrop-blur-sm absolute"
          onClick={onCloseModal}
        ></div>
        <form
          onSubmit={handleSubmit(onHandleAdForm)}
          className="flex flex-col bg-white rounded-3xl
    py-5 px-14 w-4/6 z-20 font-inter lg:w-1/2 shadow-2xl"
        >
          <div className="flex my-5">
            <h1 className="text-2xl font-bold text-[#002551] m-0">
              Rent Ad Space
            </h1>
            <div
              className="bg-[#363636] text-white flex justify-center 
          items-center ml-auto rounded-md py-1 px-2 text-lg cursor-pointer"
              onClick={onCloseModal}
            >
              ESC
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <OUpload
              required
              iconifyIconName="mdi:folder-music"
              buttonText="Ad Audio*"
              className="w-1/2 mr-4"
              accept=".mp3,.wav"
              {...register("advAudioFile")}
            />
            <OUpload
              required
              iconifyIconName="material-symbols:art-track"
              buttonText="Banner image*"
              className="w-1/2"
              accept=".png,.img.,.jpg,.jpeg"
              {...register("bannerImage")}
            />
          </div>
          <OInput
            required
            placeholder="Title*"
            className="mb-2"
            {...register("advTitle")}
          />
          <OInput
            required
            placeholder="Url*"
            className="mb-2"
            {...register("adUrl")}
          />
          <OTextArea
            required
            placeholder="Description*"
            {...register("advDesc")}
            rows={4}
          />
          <OButton
            isLoading={isCreatingAd}
            className="mt-2 inline-flex py-3 mb-4"
            type="submit"
          >
            Rent Ad Space
          </OButton>
        </form>
      </div>
    </>
  );
};

export default BuyAdModal;
