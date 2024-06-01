import React, { useEffect, useState, useContext } from "react";
import "./StorePage.css";
import { Button, Input, Table } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../stores/slice/CartContext";

const StorePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Use context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${productId}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleIncrement = (id) => {
    setProduct((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setProduct((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setProduct((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="storepage">
      <div className="bag">
        <h4>Bag</h4>
        <div className="product-details">
          <Table aria-label="basic table">
            <thead>
              <tr>
                <th>Product</th>
                <th style={{ width: "30%" }}></th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product && product.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr>
                      <th>{item.image}</th>
                      <th>{item.name}</th>
                      <th>{item.size}</th>
                      <th>
                        <button onClick={() => handleDecrement(item.id)}>
                          -
                        </button>
                        {item.quantity}
                        <button onClick={() => handleIncrement(item.id)}>
                          +
                        </button>
                      </th>
                      <th>${(item.price * item.quantity).toFixed(2)}</th>
                      <th>
                        <button onClick={() => handleRemove(item.id)}>X</button>
                      </th>
                    </tr>
                  </React.Fragment>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="Summary">
        <h4>Summary</h4>
        <div className="Summary-item">
          <div className="item">
            <h6>Subtotal</h6>
            <span>{product?.price}₫</span>
          </div>
          <div className="item">
            <h6>Estimated Delivery & Handling</h6>
            <span>250,000₫</span>
          </div>
          <div className="item">
            <h6>Total</h6>
            <span>{product ? product.price + 250000 : 0}₫</span>
          </div>
          <Button variant="contained" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
