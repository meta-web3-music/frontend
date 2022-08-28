// antd component lib
import { Form, Upload, Button, InputNumber, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// types
import { FormProps } from "./MintForm.types";

const MintForm: React.FC<FormProps> = ({
  onHandleMintForm,
  isMinting,
}: FormProps) => {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form
      name="mintingForm"
      initialValues={{ remember: true }}
      onFinish={onHandleMintForm}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        name="upload"
        label="Upload Song"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Please provide supported formats (.mp3, .wav)"
      >
        <Upload name="logo" action="/" accept=".mp3,.wav" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Song Name"
        name="songName"
        rules={[{ required: true, message: "Please input song name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Artist Name"
        name="artistName"
        rules={[{ required: true, message: "Please input artist name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Ad space price"
        name="adSpacePrice"
        rules={[{ required: true, message: "Please input adspace price!" }]}
      >
        <InputNumber />
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
  );
};

export default MintForm;
