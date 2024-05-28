import React, { useEffect, useState, useContext } from 'react';
import "./StorePage.css";
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../stores/slice/CartContext';


const StorePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Use context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className='storepage'>
      <div className='bag'>
        <h4>Bag</h4>
        <div className='product-details'>
          <img src={product?.image} alt='img'></img>
          <div className='details'>
            <div className="item">
              <h6>{product?.title}</h6>
              <span>{product?.price}₫</span>
            </div>
            <p>Men's Shoes</p>
            <p>Sail/Cream II/Limestone/Pacific Moss</p>
            <div className="size">
              <label>Size</label>
              <select id="size">
                <option value="46">46</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='Summary'>
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
          <Button variant="contained" onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default StorePage;
