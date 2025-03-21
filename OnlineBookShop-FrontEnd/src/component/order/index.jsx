import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, List, Typography, message } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const confirmOrder = () => {
    message.success("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => navigate("/")}>
          Back to Store
        </Button>
        <Title level={2} className="text-center">🛍️ Order Summary</Title>
        {cart.length > 0 ? (
          <>
            <List
              bordered
              className="p-4"
              dataSource={cart}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item.name} by {item.author} - <strong>${item.price}</strong></Text>
                </List.Item>
              )}
            />
            <div className="text-center mt-6">
              <Button type="primary" size="large" onClick={confirmOrder}>
                Confirm Order
              </Button>
            </div>
          </>
        ) : (
          <Text className="text-center">Your cart is empty!</Text>
        )}
      </div>
    </div>
  );
};

export default index;
