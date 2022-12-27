import React, { useEffect } from "react";

type Props = {
  onCloseModal: () => void;
  isVisible: boolean;
};
const OModal: React.FC<React.PropsWithChildren & Props> = ({
  onCloseModal,
  isVisible,
  ...p
}) => {
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
          className="duration-1000 ease-out fixed top-0 left-0 z-10 w-screen h-screen bg-[rgb(255,255,255,0.4)]"
          onClick={onCloseModal}
        ></div>
        {p.children}
      </div>
    </>
  );
};

export default OModal;
