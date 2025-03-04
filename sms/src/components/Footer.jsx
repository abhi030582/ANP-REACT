import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  
    return (
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </nav>
      )
  
}

export default Footer
