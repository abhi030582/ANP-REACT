import React, { useEffect, useState } from 'react';
import { Card, Avatar, Typography, Button, Space, Divider, Row, Col } from 'antd';
import { UserOutlined, EditOutlined, LogoutOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title, Text } = Typography;

const DEFAULT_AVATAR = "https://www.w3schools.com/howto/img_avatar.png";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data", error);
      }
    }
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light" style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
      <Card
        style={{ 
          width: 450, 
          borderRadius: 12, 
          textAlign: 'center', 
          padding: '30px', 
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)', 
          border: '1px solid #ddd',
          backgroundColor: '#fff'
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <Avatar
            size={140}
            src={user?.avatar || DEFAULT_AVATAR}
            icon={!user?.avatar && <UserOutlined />}
            style={{ border: "4px solid #1890ff", backgroundColor: '#f0f2f5', padding: 5 }}
          />
          <Title level={3} style={{ marginTop: 15, color: '#003a8c', fontWeight: 'bold' }}>Welcome{" "+user?.user?.name || 'Unknown User'}</Title>
          <Text type="secondary" style={{ fontSize: '16px', fontStyle: 'italic', color: '#666', backgroundColor: '#f5f5f5', padding: '5px 10px', borderRadius: '5px' }}><strong>{user?.user?.email || 'No email provided'}</strong></Text>
          <br />
          <Text strong type="success" style={{ fontSize: '14px', backgroundColor: '#e6ffed', padding: '6px 12px', borderRadius: '5px', color: '#389e0d' }}>{user?.user?.role || 'No role assigned'}</Text>
        </div>
        <Divider />
        <Row gutter={[16, 16]} style={{ textAlign: 'left', fontSize: '16px' }}>
          <Col span={12}><p><strong>📞 Phone:</strong> {user?.user?.phone || 'N/A'}</p></Col>
          <Col span={12}><p><strong>🏠 Address:</strong> {user?.user?.address || 'N/A'}</p></Col>
         </Row>
        <Divider />
        <Space style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
          <Button type="primary" icon={<EditOutlined />} size="large">Edit Profile</Button>
          <Button type="danger" icon={<LogoutOutlined />} size="large">Logout</Button>
        </Space>
      </Card>
    </div>
  );
}

export default UserProfile;
