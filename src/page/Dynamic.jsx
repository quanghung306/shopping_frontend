import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Dynamic.css";
import Fab from "@mui/material/Fab";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Rating from "@mui/material/Rating";
import axios from "axios";

const Dynamic = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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
            <h5>hung dot</h5>
            <p>select size</p>
            <div className="noi dung san pham ">
              <p>{product.description}</p>
              <ul>
                <li>Colour Shown: White/Sail/Legend Pink</li>
                <li>Style: FN5215-161</li>
              </ul>
            </div>
            <div className="btmua">
              <button>mua de</button>
              <Fab variant="extended" color="primary">
                <LocalGroceryStoreIcon />
                Add To Bag
              </Fab>
              <Rating name="customized-10" defaultValue={2} max={5} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dynamic;
