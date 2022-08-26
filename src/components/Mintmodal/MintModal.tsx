import React, { useState } from "react";

// antd lib
import { Modal, Form, Input, Button, InputNumber, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// types
import {ModalProps} from './MintModal.types'
// custom-components
import MintForm from './MintForm/MintForm'


const MintModal: React.FC<ModalProps> = ({
  onHandleModal,
  onHandleMintForm,
  isVisible,
  isMinting
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

export default MintModal;
