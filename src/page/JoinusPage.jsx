import React, { useState } from 'react';
import "./JoinusPage.css"; 

const JoinusPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Henry T-Shirt', size: 'S', quantity: 2, price: 19.99 },
    { id: 2, name: 'Stripe Tee', size: 'M', quantity: 3, price: 33.33 },
    { id: 3, name: 'Sweater Hood', size: 'S', quantity: 1, price: 39.99 },
  ]);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="cart-grid">
        <div className="cart-header">Product</div>
        <div className="cart-header">Size</div>
        <div className="cart-header">Quantity</div>
        <div className="cart-header">Total Price</div>
        <div className="cart-header"></div>
        {cartItems.map((item) => (
          <React.Fragment key={item.id}>
            <div className="cart-item">{item.name}</div>
            <div className="cart-item">{item.size}</div>
            <div className="cart-item">
              <button onClick={() => handleDecrement(item.id)}>-</button>
              {item.quantity}
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
            <div className="cart-item">${(item.price * item.quantity).toFixed(2)}</div>
            <div className="cart-item">
              <button onClick={() => handleRemove(item.id)}>X</button>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="total-price">
        <h2>Total: ${calculateTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default JoinusPage;