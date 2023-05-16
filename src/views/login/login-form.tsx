import React from 'react';
import { Link } from 'umi';
import { Button, Checkbox, Form, Input, Col, Row, Alert } from 'antd';

interface IProps {
  onSubmit: (params: {}) => void;
}

const App = (props: IProps) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values, form);
    return values;
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo, form.getFieldsValue());
  };

  const getFormValue = async () => {
    // form
    //   .validateFields()
    //   .then((d) => {
    //     console.log('getFormValue', form.getFieldsValue());
    //     return form.getFieldsValue();
    //   })
    //   .catch((err) => {
    //     // err;
    //   });
    await form.validateFields();
    console.log('getFormValue', form.getFieldsValue());
    props.onSubmit(form.getFieldsValue());
    return form.getFieldsValue();
  };
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="User Code"
          name="username"
          rules={[{ required: true, message: 'Please input your user code!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={getFormValue}>
            Log In
          </Button>
        </Form.Item>
        <Alert type="error" message="enter UserCode and Password, like 123 / 123, click LogIn" />
        <Row>
          <Col span={12}>
            <Link to="/forget-password">Forget Password</Link>
          </Col>
          <Col span={12} className="text-right">
            <Link to="/forget-password">Password Protection Policy</Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default App;
