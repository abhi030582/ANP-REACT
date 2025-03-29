import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './userlogin.css'

const UserLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [user,setUser]=useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response= await axios.post("http://127.0.0.1:4000/api/v1/login", formData);
     const data =response.data;
     console.log(data);
     setUser(data);
      localStorage.setItem("user",JSON.stringify(data));
    
      setMessage("Login successful!");
      navigate("/home");
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-danger">
      <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "10px" }}>
        <h2 className="text-center mb-3">User Login</h2>
        {message && <div className="alert alert-info" style={{color:'red'}}>{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">Login</button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
