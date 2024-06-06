// src/components/StorePage.js
import React, { useEffect, useState, useContext } from "react";
import "./StorePage.css";
import { Button, Table } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const StorePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${productId}`
        );
        setProduct([response.data]);  
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

 
  if (loading) return <p>Loading...</p>;

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
              {product &&
                product.map((item) => (
                  <tr key={item.id}>
                    <th>
                      <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                    </th>
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
            <span>{product?.reduce((acc, item) => acc + item.price * item.quantity, 0)}₫</span>
          </div>
          <div className="item">
            <h6>Estimated Delivery & Handling</h6>
            <span>0₫</span>
          </div>
          <div className="item">
            <h6>Total</h6>
            <span>{product ? product.reduce((acc, item) => acc + item.price * item.quantity, 0) + 250000 : 0}₫</span>
          </div>
          <Button variant="contained" >
          Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
