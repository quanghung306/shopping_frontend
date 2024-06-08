import React from "react";
import "./StorePage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Button from "@mui/material/Button";
import { addToCart, clearCart, decreaseCart, removeFromCart,getTotals } from "../stores/slice/cartSlice";

const StorePage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch =useDispatch();

  const handleDecrement = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncrement = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleClear = (cartItem) => {
    dispatch(clearCart(cartItem));
  };
  return (
    <div className="storepage">
      <div className="bag">
        <h4>Bag</h4>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
              <ArrowLeftIcon />
              <span>Start shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="product-details">
            <table aria-label="basic table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.cartItems.map((cartItem) => (
                  <tr key={cartItem.id}>
                    <td>
                      <img src={cartItem.image} alt={cartItem.title} style={{ width: '50px' }} />
                    </td>
                    <td>{cartItem.title}</td>
                    <td>{cartItem.size}</td>
                    <td>
                      <button onClick={() => handleDecrement(cartItem.id)}>-</button>
                      {cartItem.quantity}
                      <button onClick={() => handleIncrement(cartItem.id)}>+</button>
                    </td>
                    <td>${(cartItem.price * cartItem.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => handleRemove(cartItem.id)}>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="Summary">
        <h4>Summary</h4>
        <div className="Summary-item">
          <div className="item">
            <h6>Subtotal</h6>
            <span>{cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}₫</span>
          </div>
          <div className="item">
            <h6>Estimated Delivery & Handling</h6>
            <span></span>
          </div>
          <div className="item">
            <h6>Total</h6>
            <span>{cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 250000}₫</span>
          </div>
          <Button variant="contained">Checkout</Button>
          <ArrowLeftIcon />
                <span>Start shopping</span>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
