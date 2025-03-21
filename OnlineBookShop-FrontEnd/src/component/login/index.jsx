import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Typography, message, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

const Index = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);

      if (
        values.username === "admin" &&
        values.password === "admin123" &&
        values.loginType === "Book Admin"
      ) {
        message.success("Login successful as Book Admin!");
        navigate("/dashboard"); // Navigate to dashboard page
      } 
      if 
      (
        values.username === "admin" &&
        values.password === "admin123" &&
        values.loginType === "Order Admin"
      )
      {
        message.success("Login successful as Order Admin!");
        navigate("/orderdashboard")
      }
      else
      {
        message.error("Invalid username, password, or login type!");
      }
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-sm shadow-lg rounded-xl">
        <Title level={2} className="text-center">Admin Login</Title>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          
          <Form.Item
            name="loginType"
            rules={[{ required: true, message: "Please select your login type!" }]}
          >
            <Select placeholder="Select Login Type">
              <Option value="Book Admin">Book Admin</Option>
              <Option value="Order Admin">Order Admin</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="w-full" 
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Index;
