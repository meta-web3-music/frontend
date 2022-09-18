// antd imports
import { Form, Button, Upload, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// types imports
import { AdModalFormProps, AdModalFormValues } from "./AdModalForm.types";
import { antdNorm } from "../../../services/antd-form/norm";
const urlPattern =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i;
const AdModalForm: React.FC<AdModalFormProps> = ({
  onHandleAdForm,
  isCreatingAd,
}) => {
  return (
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
        <Upload action="/" accept=".png,.jpg,.jpeg" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button
          loading={isCreatingAd}
          shape="round"
          size="large"
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
        >
          Rent Ad Space
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdModalForm;
