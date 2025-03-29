import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography, Input, Button, message } from "antd";
import styles from "./Book.module.css";
import BookImage from "../../assets/book1.jpg";

const { Title, Text } = Typography;

const Books = ({ data }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(quantity * data.price);
  }, [quantity, data.price]);

  const handleAddItem = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveItem = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <Card hoverable className={styles.bookCard} style={{ maxWidth: 400, margin: "auto", borderRadius: 10 }}>
      <img src={BookImage} alt="Book Cover" className={styles.bookImage} style={{ width: "100%", borderRadius: 10 }} />
      
      <div className={styles.bookInfo} style={{ padding: "20px" }}>
        <Title level={3} style={{ color: "green" }}>{data.name}</Title>
        <Text><strong>Author:</strong> {data.author}</Text>
        <p className={styles.bookDescription} style={{ margin: "10px 0" }}>{data.description}</p>
        <Title level={4} style={{ color: "green" }}>${data.price}</Title>

        {/* Shopping Cart Section */}
        <div className={styles.cartSection} style={{ marginTop: "20px" }}>
          <Title level={5}>Shopping Cart:</Title>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <Button onClick={handleRemoveItem} disabled={quantity === 0} style={{ backgroundColor: "#ff4d4f", color: "white" }}>-</Button>
            <Text>{quantity}</Text>
            <Button onClick={handleAddItem} style={{ backgroundColor: "#52c41a", color: "white" }}>+</Button>
          </div>
          <Title level={5} style={{ color:"red",marginTop: "10px", textAlign: "center" }}>Total Price: ${totalPrice.toFixed(2)}</Title>
        </div>
      </div>
    </Card>
  );
};

export default Books;
