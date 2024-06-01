import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Dynamic.css";
import Rating from "@mui/material/Rating";
import axios from "axios";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { addToCart } from "../stores/slice/cartSlice";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
const Dynamic = () => { // inforproducts
  const { productId } = useParams();

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleAddToCart = (product) => {
     dispatch(addToCart(product));
  };

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
  
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="productid">
          <div className="img">
            <img src={product.image} alt={product.image} />
          </div>
          <div className="product-name">
            <h3>{product.title}</h3>
            <div className="noi dung san pham ">
              <p>{product.description}</p>
              <ul>
                <li>Colour Shown: White/Sail/Legend Pink</li>
                <li>Style: FN5215-161</li>
              </ul>
            </div>
            <div className="btmua">
            <Button variant="contained" endIcon={<ShoppingBagIcon />} onClick={() => handleAddToCart(product)}>
              Add to cart
            </Button>
              <Rating name="customized-10" defaultValue={2} max={5} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dynamic;