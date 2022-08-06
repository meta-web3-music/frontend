import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {Modal,Form,Button,Radio,Upload} from 'antd'
import {  UploadOutlined } from '@ant-design/icons';


interface ModalProps{
  onHandleModal: () => void
  onHandleAdForm: (value:Object)=> void
  isVisible: boolean
}

const AdModal: React.FC<ModalProps> = ({onHandleModal,onHandleAdForm,isVisible}) =>{



  return (
 <>
  <Modal title="Rent Ad space" width={'450px'} visible={isVisible} onOk={onHandleModal} footer={null} onCancel={onHandleModal}>
    <CreateAdForm onHandleAdForm={onHandleAdForm}/>
  </Modal>
  </>
  );
}

export default AdModal;



interface FormProps{
  onHandleAdForm: (value:Object)=>void
}

const CreateAdForm : React.FC<FormProps> = ({onHandleAdForm}:FormProps) =>{

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  
  return(
    <Form
      name="createAdForm"
      initialValues={{ remember: false }}
      onFinish={onHandleAdForm}
      autoComplete="off"
      layout='vertical'
    >
     <Form.Item
        name="adFile"
        label="Upload banner image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Please provide supported formats (.png, .jpeg, .jpg)"
      >
        <Upload name="logo" action="/" accept=".png,.jpg,.jpeg" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> 

      <Form.Item
        name="rentDuration"
        label="Rent Duration"
        rules={[{ required: true, message: 'Please pick an item!' }]}
      >
        <Radio.Group>
          <Radio.Button value="30">30 Days</Radio.Button>
          <Radio.Button value="10">10 Days</Radio.Button>
          <Radio.Button value="3">3 Days</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item > 
        <Button shape ='round' size='large' style={{width:'100%'}} type="primary" htmlType="submit">
          Rent Ad Space
        </Button>
      </Form.Item>
    </Form>
  )
}
