import React from 'react';
import "./StorePage.css";
import { Button } from '@mui/material';


const StorePage = () => {
  return (
    <div className='storepage'>
    <div className='bag'>
        <h4>Bag</h4>
        <div className='product-details'>
          <img src='https://i.imgur.com/4YX6JXp.png' alt='img'></img>
          <div className='details'>
            <div className="item">
            <h6>Product Name</h6>
            <span>100000000₫</span>
            {/* <span>{product.price * product.quantity}₫</span> */}
            </div>
            <p>Men's Shoes</p>
            <p>Sail/Cream II/Limestone/Pacific Moss</p>
            <div className="size">
              <label>Size</label>
              <select id="size"  >
                <option value="46">46</option>
              </select>
            </div>
          </div>
        </div>
        <div className='product-details'>
          <img src='https://i.imgur.com/4YX6JXp.png' alt='img'></img>
          <div className='details'>
            <div className="item">
            <h6>Product Name</h6>
            <span>100000000₫</span>
            {/* <span>{product.price * product.quantity}₫</span> */}
            </div>
            <p>Men's Shoes</p>
            <p>Sail/Cream II/Limestone/Pacific Moss</p>
            <div className="size">
              <label>Size</label>
              <select id="size"  >
                <option value="46">46</option>
              </select>
            </div>
          </div>
        </div>
        <div className='product-details'>
          <img src='https://i.imgur.com/4YX6JXp.png' alt='img'></img>
          <div className='details'>
            <div className="item">
            <h6>Product Name</h6>
            <span>100000000₫</span>
            {/* <span>{product.price * product.quantity}₫</span> */}
            </div>
            <p>Men's Shoes</p>
            <p>Sail/Cream II/Limestone/Pacific Moss</p>
            <div className="size">
              <label>Size</label>
              <select id="size"  >
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
            <span>100000000000₫</span>
            {/* <span>{product.price * product.quantity}₫</span> */}
          </div>
          <div className="item">
            <h6>Estimated Delivery & Handling</h6>
            <span>250,000₫</span>
          </div>
          <div className="item">
            <h6>Total</h6>
            <span>200000000₫</span>
            {/* <span>{totalCartPrice() + 250000}₫</span> */}
          </div>
          <Button variant="contained" >Guest Checkout</Button>
          {/* <Button variant="contained">Member Checkout</Button> */}
    </div>
    </div>
        </div>
  )
}

export default StorePage