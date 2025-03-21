import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, Typography, message, Input, Form } from "antd";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const { Title, Text } = Typography;

const OrderForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  // Form State
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");

  // Calculate total amount
  const totalAmount = cart.reduce((total, book) => total + book.price, 0);

  const placeOrder = async () => {
    if (!customerName || !email) {
      message.warning("Please enter your name and email.");
      return;
    }

    if (cart.length === 0) {
      message.warning("No items to order.");
      return;
    }

    try {
      const orderData = {
        customerName,
        email,
        books: cart.map((book) => ({ id: book._id, name: book.name, price: book.price })),
        totalAmount,
      };

      await axios.post("http://localhost:5000/api/order", orderData);
      message.success("Order placed successfully!");
      navigate("/home"); // Redirect to homepage after order
    } catch (error) {
      message.error("Failed to place order.");
      console.error(error);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "linear-gradient(to right, #ff9966, #ff5e62)" }}
    >
      <Card
        className="p-4 shadow-lg rounded"
        style={{ maxWidth: "800px", width: "100%", background: "#ffffffee" }}
      >
        <Title level={3} className="text-center mb-4 text-primary">
          📚 Book Order Form
        </Title>

        <div className="row">
          {/* Customer Information Section */}
          <div className="col-md-6">
            <Card className="p-3 shadow-sm" style={{ borderLeft: "4px solid #ff5e62" }}>
              <Form layout="vertical">
                <Form.Item label="Customer Name" required>
                  <Input
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="p-2"
                  />
                </Form.Item>

                <Form.Item label="Email" required>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2"
                  />
                </Form.Item>
              </Form>
            </Card>
          </div>

          {/* Order Summary Section */}
          <div className="col-md-6">
            <Card className="p-3 shadow-sm" style={{ borderLeft: "4px solid #4caf50" }}>
              <Title level={5} className="text-success">
                🛒 Order Summary
              </Title>

              {cart.length > 0 ? (
                cart.map((item) => (
                  <Card key={item._id} className="mb-2 p-2 shadow-sm bg-light">
                    <Text strong>📖 {item.name}</Text> <br />
                    <Text strong>💰 Price:</Text> ${item.price}
                  </Card>
                ))
              ) : (
                <Text type="secondary">No items in the cart.</Text>
              )}

              <Card className="mt-2 p-3" style={{ background: "#f8f9fa", borderLeft: "4px solid #007bff" }}>
                <Text strong className="text-primary">Total Amount:</Text> <Text>${totalAmount}</Text>
              </Card>
            </Card>
          </div>
        </div>

        <div className="text-center mt-4">
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#ff5e62",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e04c56")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff5e62")}
            onClick={placeOrder}
          >
            Confirm Order ✅
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OrderForm;
