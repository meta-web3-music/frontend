// antd imports
import {Form,Button,Upload} from 'antd'
import { UploadOutlined } from "@ant-design/icons";

// types imports
import { AdModalFormProps } from './AdModalForm.types';

  
  const AdModalForm: React.FC<AdModalFormProps> = ({
    onHandleAdForm,
    isCreatingAd,
  }) => {
    const normFile = (e: any) => {
      if (Array.isArray(e)) {
        return e;
      }
      return e?.fileList;
    };
  
    return (
      <Form
        name="createAdForm"
        initialValues={{ remember: false }}
        onFinish={onHandleAdForm}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="adFile"
          label="Upload banner image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Please provide supported formats (.png, .jpeg, .jpg)"
        >
          <Upload
            name="logo"
            action="/"
            accept=".png,.jpg,.jpeg"
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
  

  export default AdModalForm