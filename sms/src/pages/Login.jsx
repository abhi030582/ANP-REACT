import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const validateForm = () => {
      let formErrors = {};
      if (!email) {
        formErrors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        formErrors.email = "Invalid email format";
      }
      if (!password) {
        formErrors.password = "Password is required";
      } else if (password.length < 6) {
        formErrors.password = "Password must be at least 6 characters";
      }
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        if (email === "std@gmail.com" && password === "std123") {
          navigate("/add-student");
        } else {
          setErrors({ login: "Invalid email or password" });
        }
      }
    }
  
  
    return (
      <div className="container mt-4">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  };
  
  
export default Login
