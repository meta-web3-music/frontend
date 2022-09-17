import React from "react";
import { Modal} from "antd";


// custom-component imports
import AdModalForm from './AdModalForm/AdModalForm'

// types imports
import { AdModalProps } from "./AdModal.types";


const AdModal: React.FC<AdModalProps> = ({
  onHandleModal,
  onHandleAdForm,
  isVisible,
  isCreatingAd,
}) => {
  return (
    <>
      <Modal
        title="Rent Ad space"
        width={"450px"}
        visible={isVisible}
        onOk={onHandleModal}
        footer={null}
        onCancel={onHandleModal}
      >
        <AdModalForm
          isCreatingAd={isCreatingAd}
          onHandleAdForm={onHandleAdForm}
        />
      </Modal>
    </>
  );
};

export default AdModal;
