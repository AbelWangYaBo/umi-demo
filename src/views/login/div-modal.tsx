import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

interface IProps {
  show: boolean;
  close: () => void;
}

const App = (props: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    props.close();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    props.close();
  };

  useEffect(() => {
    setIsModalOpen(props.show);
  }, [props.show]);

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Life Science Price List Contact Details</p>
        <Form>
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Company Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email Id">
            <Input />
          </Form.Item>
          <Form.Item label="Contact No.">
            <Input />
          </Form.Item>
          <Form.Item label="Message">
            <Input.TextArea />
          </Form.Item>
        </Form>
        <Button type="primary" onClick={showModal}>
          Submit
        </Button>
      </Modal>
    </>
  );
};

export default App;
