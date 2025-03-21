import React, { useEffect, useState } from "react";
import { Table, Button, message, Popconfirm, Tag, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserOutlined, MailOutlined, BookOutlined, DollarOutlined, CheckCircleOutlined, SettingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/orders");
      setOrders(response.data);
    } catch (error) {
      message.error("Failed to fetch orders.");
      console.error(error);
    }
  };

  const confirmOrder = async (orderId) => {
    try {
      console.log(orderId);
      const response = await axios.put(
        `http://localhost:5000/api/order/${orderId}`,
        { status: "Confirmed" }
       );
      if (response.status === 200) {
        message.success("Order confirmed!");
        fetchOrders();
      } else {
        throw new Error("Unexpected API response");
      }
    } catch (error) {
      message.error(`Failed to confirm order: ${error.response?.data?.message || error.message}`);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/api/order/${orderId}`);
      message.success("Order deleted successfully!");
      fetchOrders();
    } catch (error) {
      message.error("Failed to delete order.");
    }
  };

  const handleLogout = () => {
    message.success("Logged out successfully!");
    navigate("/home");
  };

  const columns = [
    {
      title: <><SettingOutlined /> Order ID</>,
      dataIndex: "id",
      key: "id",
    },
    {
      title: <><UserOutlined /> Customer Name</>,
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: <><MailOutlined /> Email</>,
      dataIndex: "email",
      key: "email",
    },
    {
      title: <><BookOutlined /> Book(s) Ordered</>,
      dataIndex: "books",
      key: "books",
      render: (books) => books.map((book) => (
        <Tag color="purple" key={book.id} style={{ fontWeight: "bold", fontSize: "14px", padding: "5px 10px" }}>
          {book.name}
        </Tag>
      )),
    },
    {
      title: <><DollarOutlined /> Total Amount ($)</>,
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount) => `$${amount}`,
    },
    {
      title: <><CheckCircleOutlined /> Status</>,
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Confirmed" ? "green" : "volcano"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: <><SettingOutlined /> Actions</>,
      key: "actions",
      render: (_, record) => (
        <div className="d-flex gap-2 justify-content-center">
          {record.status !== "Confirmed" && (
            <Button type="primary" danger onClick={() => confirmOrder(record.id)}>✅ Confirm</Button>
          )}
          <Popconfirm
            title="Are you sure to delete this order?"
            onConfirm={() => deleteOrder(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">🗑 Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="container py-5">
      <Card className="p-4 shadow-lg border-0 rounded-3 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Title level={3} className="text-danger fw-bold">📊 Order Dashboard</Title>
          <Button type="primary" danger onClick={handleLogout}>🚪 Logout</Button>
        </div>
        <Table
          columns={columns}
          dataSource={orders}
          rowKey="id"
          className="table-striped text-center"
          pagination={{ pageSize: 5 }}
          bordered
        />
      </Card>
    </div>
  );
};

export default OrderDashboard;
