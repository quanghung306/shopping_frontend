import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Container.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Container = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);


  return (
    <div className="Container">
      { products.map(product => (
        <div className="card" key={product.id}>
          <Link to={`/sp/${product.id}`}>
            <img src={`data:;base64,${product.image}`} alt={product.title} />
          </Link>
          <div>
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <Button variant="contained" endIcon={<ShoppingBagIcon />}>
              Thêm Vào Giỏ Hàng
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
