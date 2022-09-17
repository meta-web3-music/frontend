import React from "react";

// antd lib
import { Modal } from "antd";
// types
import { ModalProps } from "./MintSongModal.types";
// custom-components
import MintForm from "./MintForm/MintForm";

const MintSongModal: React.FC<ModalProps> = ({
  onHandleModal,
  onHandleMintForm,
  isVisible,
  isMinting,
}) => {
  return (
    <>
      <Modal
        title="Mint Song NFT"
        width={"450px"}
        visible={isVisible}
        onOk={onHandleModal}
        footer={null}
        onCancel={onHandleModal}
      >
        <MintForm isMinting={isMinting} onHandleMintForm={onHandleMintForm} />
      </Modal>
    </>
  );
};

export default MintSongModal;
