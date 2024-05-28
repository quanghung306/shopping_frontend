import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Container.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Container = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const fetchImageAsBase64 = async (imageUrl) => {
    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const base64 = Buffer.from(response.data, 'binary').toString('base64');
      return `data:image/jpeg;base64,${base64}`;
    } catch (error) {
      console.error('Error fetching image:', error);
      return '';
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        const productsWithBase64Images = await Promise.all(response.data.map(async (product) => {
          const base64Image = await fetchImageAsBase64(product.image);
          return { ...product, base64Image };
        }));
        setProducts(productsWithBase64Images);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="Container">
      { products.map(product => (
        <div className="card" key={product.id}>
          <Link to={`/sp/${product.id}`}>
<<<<<<< HEAD
            <img src={`data:;base64,${product.image}`} alt={product.title} />
=======
            <img src={product.base64Image} alt={product.title} />
>>>>>>> 4cdb3c3c3fb718b52b547e05275583be81ef84bc
          </Link>
          <div>
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            {/* <Button variant="contained" endIcon={<ShoppingBagIcon />} >
              Add to cart
            </Button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
