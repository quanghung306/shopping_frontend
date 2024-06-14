import React, { useState } from 'react';
import './ProductList.css';
import Container from '../container/Container';
import { Button } from '@mui/material';
import { useEffect } from 'react';

const ProductList = () => {
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products); 
  }, []);
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) return false;
    if (gender && product.gender !== gender) return false;
    return true;
  });

  return (
    <div className='ProductList'>
      <div className='filter'>
        <ul>
          <h2>Category</h2>
          <li>
            <Button onClick={handleCategoryChange} value={''}>
              All
            </Button>
          </li>
          <li>
            <Button onClick={handleCategoryChange} value={'Shoes'}>
              Shoes
            </Button>
          </li>
          <li>
            <Button onClick={handleCategoryChange} value={'Hoodie'}>
              Hoodie
            </Button>
          </li>
          <h2>Best For</h2>
          <li>
            <Button onClick={handleGenderChange} value={''}>
              All
            </Button>
          </li>
          <li>
            <Button onClick={handleGenderChange} value={'Men'}>
              Men
            </Button>
          </li>
          <li>
            <Button onClick={handleGenderChange} value={'Women'}>
              Women
            </Button>
          </li>
        </ul>
      </div>
      <div className='conter'>
        <Container>
          {filteredProducts.map((product) => (
            <div key={product.id}>{product.name}</div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default ProductList;