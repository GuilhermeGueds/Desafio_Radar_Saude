import {
  Button,
  // Cascader,
  // Checkbox,
  //Col,
  Form,
  Input,
  //InputNumber,
  //Row,
  Select,
  //DatePicker
  Breadcrumb
} from 'antd';
import { useEffect } from 'react'

import {PersonService, IGetData } from '../../provider'
const { Option } = Select;



function CreateForm({id}: {id?: string}) {
  const [form] = Form.useForm<IGetData>();

  useEffect(()=>{
    if(id){
      PersonService.getAll().then(()=>{
        
      })
    }
  }, [])

  const onFinish = (values: IGetData) => {
    console.log(values)
    if(id){
      console.log('Atualizar PUT Received values of form: ', values);
    }else{
      console.log('Cadastrar POST Received values of form: ', values);
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };


  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
      }}
      scrollToFirstError
    >
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User {id? 'Atualizar': 'Cadastrar'}</Breadcrumb.Item>
      </Breadcrumb>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="birth"
        label="Birth"
        rules={[{ required: true, message: 'Please input Birth date!' }]}
      >
        <Input />
      </Form.Item>



      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      {/*<Form.Item name="date-picker" label="DatePicker" {...config}>
            <DatePicker />
        </Form.Item>*/}

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export { CreateForm };