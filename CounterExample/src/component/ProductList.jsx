import React from 'react';

function ProductList() {
  const products = [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "category": "Electronics",
      "price": 25.99,
      "rating": 4.5
    },
    {
      "id": 2,
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.7
    },
    {
      "id": 3,
      "name": "USB-C Hub",
      "category": "Accessories",
      "price": 39.99,
      "rating": 4.3
    },
    {
      "id": 4,
      "name": "Gaming Headset",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.6
    },
    {
      "id": 5,
      "name": "Smartwatch",
      "category": "Wearables",
      "price": 129.99,
      "rating": 4.8
    }
  ];

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <p>Id: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Rating: {item.rating}</p>
          <hr color="red" />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
