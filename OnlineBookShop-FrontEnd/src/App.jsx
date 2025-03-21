import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Ensure styles are applied
import Home from "./pages/home/index";
import Login from "./component/login";
import Contact from "./component/contact";
import Order from "./component/order";
import Dashboard from "./component/dashboard";
import Book from "./assets/book_banner.avif";
import OrderForm from "./component/order/OrderForm";
import OrderDashboard from "./component/order/OrderDashboard";
import Review from "./component/review"
import RegisterUser from "./component/user/RegisterUser";
import UserLogin from "./component/user/UserLogin";
import UserProfile from "./component/user/UserProfile";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> Fixed Navbar */}
        <div className="main-container">
        <img src={Book} width="100%" height="200px" alt="Book Banner" />
        </div>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orderform" element={<OrderForm />} />
          <Route path="/orderdashboard" element={<OrderDashboard />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
