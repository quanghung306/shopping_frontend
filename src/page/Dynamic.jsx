import React, { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "./Dynamic.css";
import Rating from "@mui/material/Rating";
import axios from "axios";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Button, CircularProgress } from "@mui/material";
import { CartContext } from "../stores/slice/CartContext";

const Dynamic = () => {
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${productId}`
        );
        setProduct(response.data);
        setLoading(<CircularProgress />);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(<CircularProgress />);
      }
    };

    fetchProduct();
  }, [productId]);
  
  const handleAddToCart = () => {
      addToCart(product[0]);
  };

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <div className="productid">
          <div className="img">
            <img url={product.image} alt={product.image} />
          </div>
          <div className="product-name">
            <h3>{product.title}</h3>
            <div className="noi dung san pham ">
              <p>{product.description}</p>
              <ul>
                <li>Colour Shown: White/Sail/Legend Pink</li>
                <li>Style: FN5215-161</li>
              </ul>
              <p>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                  minimumFractionDigits: 0,
                }).format(product.price)}
              </p>
            </div>
            <div className="btmua">
              <Button
                variant="contained"
                endIcon={<ShoppingBagIcon />}
                onClick={() => handleAddToCart(product)}
              >
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
