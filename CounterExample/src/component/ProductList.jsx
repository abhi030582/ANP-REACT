import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductList() {
  const [products] = useState([
    { id: 1, name: "Wireless Mouse", category: "Electronics", price: 25.99, rating: 4.5 },
    { id: 2, name: "Mechanical Keyboard", category: "Electronics", price: 79.99, rating: 4.7 },
    { id: 3, name: "USB-C Hub", category: "Accessories", price: 39.99, rating: 4.3 },
    { id: 4, name: "Gaming Headset", category: "Electronics", price: 59.99, rating: 4.6 },
    { id: 5, name: "Smartwatch", category: "Wearables", price: 129.99, rating: 4.8 },
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
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price ($)</th>
            <th>Rating</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
              <td>
                <button className="btn btn-success btn-sm" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cart Section */}
      <h2 className="text-center mt-4">Cart</h2>
      {cart.length > 0 ? (
        <table className="table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">Cart is empty</p>
      )}
    </div>
  );
}

export default ProductList;
