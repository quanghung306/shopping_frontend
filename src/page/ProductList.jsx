import React from 'react';
import './ProductList.css';
import Container from '../container/Container';

const ProductList = () => {
  return (
    <div className='productlist'>
    <div className='filter'>
        <ul>
          <h2>Category</h2>
            <li><button>Shoes</button></li>
            <li><button>Hoodie</button></li>
            <h2>Best For</h2>
            <li><button>All</button></li>
            <li><button>Men</button></li>
            <li><button>Women</button></li>
        </ul>
        
    </div>
    <div className='conter'>
        <Container/>
    </div>
    </div>
  );
};

export default ProductList;