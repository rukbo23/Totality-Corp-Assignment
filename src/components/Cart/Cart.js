// Cart.js

import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [selectedProperties, setSelectedProperties] = useState([]);

  const addPropertyToCart = (property) => {
    setSelectedProperties([...selectedProperties, property]);
  };

  const removePropertyFromCart = (index) => {
    const updatedSelectedProperties = [...selectedProperties];
    updatedSelectedProperties.splice(index, 1);
    setSelectedProperties(updatedSelectedProperties);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {selectedProperties.length === 0 ? (
        <p>No properties selected.</p>
      ) : (
        <ul>
          {selectedProperties.map((property, index) => (
            <li key={index}>
              {property.title} - {property.price}
              <button onClick={() => removePropertyFromCart(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
