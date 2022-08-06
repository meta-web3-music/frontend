import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {Modal,Form,Input,Button, InputNumber} from 'antd'

interface ModalProps{
  onHandleModal: () => void
  onHandleMintForm: (value:Object)=> void
  isVisible: boolean
}



const MintModal: React.FC<ModalProps> = ({onHandleModal,onHandleMintForm,isVisible}) =>{



  return (
 <>
  <Modal title="Mint Song NFT" visible={isVisible} onOk={onHandleModal} footer={null} onCancel={onHandleModal}>
    <MintingForm onHandleMintForm={onHandleMintForm}/>
  </Modal>
  </>
  );
}

export default MintModal;



interface FormProps{
  onHandleMintForm: (value:Object)=>void
}

const MintingForm : React.FC<FormProps> = ({onHandleMintForm}:FormProps) =>{
  return(
    <Form
      name="mintingForm"
      initialValues={{ remember: true }}
      onFinish={onHandleMintForm}
      autoComplete="off"
      layout='vertical'
    >
      <Form.Item
        label="Song Name"
        name="songName"
        rules={[{ required: true, message: 'Please input song name!' }]}
      >
        <Input />
      </Form.Item> 

      <Form.Item
        label="Artist Name"
        name="artistName"
        rules={[{ required: true, message: 'Please input artist name!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Ad space price"
        name="adSpacePrice"
        rules={[{ required: true, message: 'Please input adspace price!' }]}
      >
        <InputNumber/>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
