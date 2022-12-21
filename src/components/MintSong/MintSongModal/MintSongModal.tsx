import React, { useCallback, useEffect } from "react";
import { ModalProps } from "./MintSongModal.types";

import * as musicMetadata from "music-metadata-browser";
import { MintMusicWAdFormValues } from "./MintForm/MintForm.types";
import OUpload from "../../OUpload/OUpload";
import OButton from "../../OButton/OButton";
import OInput from "../../OInput/OInput";
import { Controller, useForm } from "react-hook-form";
import { Slider } from "antd";

const MintSongModal: React.FC<ModalProps> = ({
  onCloseModel,
  onHandleMintForm,
  isVisible,
  isMinting,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm<MintMusicWAdFormValues>();
  const songFile = watch("songFile")?.item(0);
  console.log(errors);

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

  useEffect(() => {
    const eventListnerCallBack = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseModel();
    };
    document.addEventListener("keydown", eventListnerCallBack);
    return () => {
      document.removeEventListener("keydown", eventListnerCallBack);
    };
  }, [onCloseModel]);

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
          onClick={onCloseModel}
        ></div>
        <form
          onSubmit={handleSubmit(onHandleMintForm)}
          className="flex flex-col bg-white rounded-3xl
    py-5 px-14 w-4/6 z-20 font-inter lg:w-1/2 shadow-2xl"
        >
          <div className="flex my-5">
            <h1 className="text-2xl font-bold text-[#002551] m-0">Mint song</h1>
            <div
              className="bg-[#363636] text-white flex justify-center 
          items-center ml-auto rounded-md py-1 px-2 text-lg cursor-pointer"
              onClick={onCloseModel}
            >
              ESC
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <OUpload
              required
              iconifyIconName="mdi:folder-music"
              buttonText="Upload music*"
              className="w-[48%] mr-4"
              accept=".mp3,.wav"
              {...register("songFile")}
            />
            <OUpload
              required
              iconifyIconName="material-symbols:art-track"
              buttonText="Upload artwork*"
              className="w-[48%]"
              accept=".png,.img.,.jpg,.jpeg"
              {...register("artWorkFile")}
            />
          </div>
          <div className="flex justify-center mb-4">
            <OInput
              required
              placeholder="Song name*"
              className="w-1/2 mr-4"
              {...register("songName")}
            />
            <OInput
              required
              placeholder="Artist name*"
              className="w-1/2"
              {...register("artistName")}
            />
          </div>
          <div>
            <p className="text-2xl font-bold text-[#002551] mt-2">
              Ad duration
            </p>
            <Controller
              name="adDurationDays"
              defaultValue={3}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Slider
                  min={3}
                  max={30}
                  marks={{
                    3: "3",
                    10: "10 Days",
                    20: "20 Days",
                    30: "30",
                  }}
                  onChange={onChange}
                  value={value}
                  defaultValue={3}
                />
              )}
            />

            <p className="text-2xl font-bold text-[#002551] mt-10 mb-4">
              Ad price*
            </p>
            <OInput
              required
              placeholder="Ad space price"
              className="w-1/2"
              type="number"
              step="any"
              {...register("adSpacePrice")}
            />
          </div>

          <OButton
            isLoading={isMinting}
            className="mt-6 w-40 py-3 mb-4"
            type="submit"
          >
            Mint
          </OButton>
        </form>
      </div>
    </>
  );
};

export default MintSongModal;
