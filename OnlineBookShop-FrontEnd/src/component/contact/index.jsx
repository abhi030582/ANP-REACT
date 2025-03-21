import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import emailjs from "emailjs-com";

const { Title } = Typography;

const Index = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        "service_vw2f3bo", // Replace with your EmailJS service ID
        "template_lvkofjq", // Replace with your EmailJS template ID
        templateParams,
        "-nJNY_JqGmpQWQDdN" // Replace with your EmailJS public key
      )
      .then(() => {
        message.success("Message sent successfully!");
        setLoading(false);
      })
      .catch((error) => {
        message.error("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-md shadow-lg rounded-xl">
        <Title level={2} className="text-center">Contact Us</Title>
        <Form name="contact" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>

          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <Input.TextArea rows={4} placeholder="Your Message" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Index;
