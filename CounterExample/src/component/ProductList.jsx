import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mouse1 from '../mouse1.webp'
import keyb from '../keyb.jpg'
import pen1 from '../pen1.jpg'
import head1 from '../head1.jpg'
import watch from '../watch.jpg'
import '../App.css'

function ProductList() {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 25.99,
      image: mouse1,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      category: "Electronics",
      price: 79.99,
      image: keyb,
    },
    {
      id: 3,
      name: "USB-C Hub",
      category: "Accessories",
      price: 39.99,
      image: pen1,
    },
    {
      id: 4,
      name: "Gaming Headset",
      category: "Electronics",
      price: 59.99,
      image: head1,
    },
    {
      id: 5,
      name: "Smartwatch",
      category: "Wearables",
      price: 129.99,
      image:watch,
    },
    {
        id: 5,
        name: "Smartwatch",
        category: "Wearables",
        price: 129.99,
        image:watch,
      },
  ]);

  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove product from cart
  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product List</h2>
     <b>Search Product</b> <input type="text" id="search" name="search" /><br /><br />
      <div className="row">
        {products.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card shadow-sm">
              <img src={item.image} alt={item.name} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Category:</strong> {item.category}</p>
                <p className="card-text"><strong>Price: </strong>${item.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <h2 className="text-center mt-4">Cart</h2>
      {cart.length > 0 ? (
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Cart is empty</p>
      )}
    </div>
  );
}

export default ProductList;
