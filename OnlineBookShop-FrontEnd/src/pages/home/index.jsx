import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../../services/bookservice";
import Books from "../../component/books/Books";
import { Row, Col, Button, List, Input, Card, Typography, message } from "antd";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const { Title, Text } = Typography;

const Index = () => {
  const [bookData, setBookData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const response = await getBooks();
      setBookData(response.data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredBooks = useMemo(() => {
    return bookData
      .filter((book) =>
        [book.name, book.author, book.price.toString()].some((field) =>
          field.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [bookData, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const addToCart = (book) => {
    if (!cart.some((item) => item._id === book._id)) {
      setCart((prevCart) => [...prevCart, { ...book, totalPrice: book.price }]);
      message.success(`${book.name} added to cart!`);
    } else {
      message.warning(`${book.name} is already in the cart!`);
    }
  };

  const removeFromCart = (book) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== book._id));
    message.success(`${book.name} removed from cart.`);
  };

  const orderNow = () => {
    if (cart.length === 0) {
      message.warning("Your cart is empty!");
      return;
    }
    navigate("/orderform", { state: { cart } });
  };

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.totalPrice, 0);
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">📚 Bookstore</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['Home', 'Login', 'Reviews', 'Contact'].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link 
                    className="nav-link px-3 py-2 mx-1 rounded text-dark" 
                    to={`/${item.toLowerCase().replace(/\s/g, '')}`} 
                    style={{ transition: "0.3s", backgroundColor: "#f8f9fa" }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "red"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#f8f9fa"}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="d-flex justify-content-center mb-4">
        <Input
          placeholder="Search books..."
          value={searchQuery}
          onChange={handleSearchChange}
          prefix={<SearchOutlined />}
          className="w-50 p-2 border rounded"
        />
      </div>

      <div className="bg-white shadow-lg p-6 rounded">
        <Row gutter={[24, 24]} justify="start" align="top">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => (
              <Col key={item._id} xs={24} sm={12} md={8} lg={8} xl={8} className="d-flex">
                <Card hoverable className="shadow rounded flex-grow-1">
                  <Books data={item} />
                  <Button style={{ backgroundColor: "#d9534f", color: "white" }} block onClick={() => addToCart(item)} className="mt-3">
                    Add to Cart
                  </Button>
                </Card>
              </Col>
            ))
          ) : (
            <Col span={24} className="text-center py-4">
              <Text type="secondary">No books found</Text>
            </Col>
          )}
        </Row>
      </div>

      <div className="mt-5 p-4 bg-white shadow rounded">
        <Title level={3} className="text-center">🛒 Shopping Cart</Title>
        {cart.length > 0 ? (
          <>
            <List
              header={<Title level={4}>Cart Items</Title>}
              itemLayout="vertical"
              dataSource={cart}
              renderItem={(item) => (
                <List.Item className="p-3 border rounded d-flex justify-content-between align-items-center">
                  <div>
                    <Title level={5}>{item.name}</Title>
                    <Text type="secondary">Author: {item.author}</Text>
                    <div><strong>Price:</strong> ${item.totalPrice}</div>
                  </div>
                  <Button style={{ backgroundColor: "#ff4d4f", color: "white" }} onClick={() => removeFromCart(item)} icon={<DeleteOutlined />} />
                </List.Item>
              )}
            />
            <div className="text-right mt-4">
              <Title level={4}>Total Price: ${totalPrice.toFixed(2)}</Title>
              <Button style={{ backgroundColor: "#d9534f", color: "white"  }} block className="mt-3" onClick={orderNow}>
                Process Order
              </Button>
            </div>
          </>
        ) : (
          <Text type="secondary" className="text-center d-block">Your cart is empty.</Text>
        )}
      </div>
    </div>
  );
};

export default Index;
