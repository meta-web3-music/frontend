import React from "react";
import { Modal } from "antd";
// antd imports
import { Form, Button, Upload, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const urlPattern =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i;

// types imports
import { AdModalProps } from "./AdModal.types";
import { antdNorm } from "../../services/antd-form/norm";
import { AdModalFormValues } from "./AdModalForm/AdModalForm.types";

const AdModal: React.FC<AdModalProps> = ({
  onCancelModal,
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
        onOk={onCancelModal}
        footer={null}
        onCancel={onCancelModal}
      >
        <Form<AdModalFormValues>
          name="createAdForm"
          initialValues={{ remember: false }}
          onFinish={onHandleAdForm}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Advertisment URL"
            name="adUrl"
            rules={[
              {
                required: true,
                message: "Please input valid advertisment url!",
                pattern: urlPattern,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="bannerImage"
            label="Upload banner image"
            valuePropName="fileList"
            getValueFromEvent={antdNorm}
            extra="Please provide supported formats (.png, .jpeg, .jpg)"
          >
            <Upload
              accept=".png,.jpg,.jpeg"
              customRequest={({ onSuccess }) =>
                setTimeout(() => {
                  onSuccess?.("ok", undefined);
                }, 0)
              }
              action={"/api/non"}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              loading={isCreatingAd}
              shape="round"
              size="large"
              className="w-full"
              type="primary"
              htmlType="submit"
            >
              Rent Ad Space
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AdModal;
