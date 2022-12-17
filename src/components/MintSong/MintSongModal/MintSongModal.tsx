import React from "react";
// antd component lib
import { Form, Upload, Button, InputNumber, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Slider } from "antd";
// antd lib
import { Modal } from "antd";
// types
import { ModalProps } from "./MintSongModal.types";
import { antdNorm } from "../../../services/antd-form/norm";
import { MintMusicWAdFormValues } from "./MintForm/MintForm.types";
import { SliderMarks } from "antd/lib/slider";

const marks: SliderMarks = {
  3: "3",
  10: "10 Days",
  20: "20 Days",
  30: "30",
};

const MintSongModal: React.FC<ModalProps> = ({
  onCloseModel,
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
        onOk={onCloseModel}
        footer={null}
        onCancel={onCloseModel}
      >
        <Form<MintMusicWAdFormValues>
          name="mintingForm"
          initialValues={{ remember: true }}
          onFinish={onHandleMintForm}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Song name"
            name="songName"
            rules={[{ required: true, message: "Please input song name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Artist name"
            name="artistName"
            rules={[{ required: true, message: "Please input artist name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Ad duration" name="adDurationDays">
            <Slider min={3} max={30} marks={marks} defaultValue={3} />
          </Form.Item>

          <Form.Item
            label="Ad space price"
            name="adSpacePrice"
            rules={[{ required: true, message: "Please input adspace price!" }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="songFile"
            label="Upload Song"
            valuePropName="fileList"
            getValueFromEvent={antdNorm}
            rules={[{ required: true, message: "Please upload song file!" }]}
            extra="Please provide supported formats (.mp3, .wav)"
          >
            <Upload
              accept=".mp3,.wav"
              listType="picture"
              customRequest={({ onSuccess }) =>
                setTimeout(() => {
                  onSuccess?.("ok", undefined);
                }, 0)
              }
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="artWorkFile"
            label="Upload ArtWork"
            valuePropName="fileList"
            getValueFromEvent={antdNorm}
            rules={[{ required: true, message: "Please upload artwork file!" }]}
            extra="Please provide supported formats (.png, .img, .jpg, .jpeg)"
          >
            <Upload
              accept=".png,.img.,.jpg,.jpeg"
              listType="picture"
              customRequest={({ onSuccess }) =>
                setTimeout(() => {
                  onSuccess?.("ok", undefined);
                }, 0)
              }
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button
              loading={isMinting}
              shape="round"
              size="large"
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              Mint Song NFT
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MintSongModal;
