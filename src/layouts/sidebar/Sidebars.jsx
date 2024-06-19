import { Link } from "react-router-dom";
import logo from "../../assets/Glasgow.webp";
import "./Sidebar.css";
import UserPopover from "../../page/UserPopover";
import { Badge, Button, IconButton, Input  } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "../../stores/slice/cartSlice";
export const Sidebars = () => {
  const auth =useSelector(state => state.auth) 
  const dispatch = useDispatch();
  const {carTotalQuantity} =useSelector(state => state.cart) 
  const cartItems = useSelector(state => state.cart.cartItems)
  console.log("🚀 ~ Sidebars ~ cartItems:", cartItems)
  
  const countTotal= cartItems.reduce((cartTotal, cartItem) => {
    const { price, cartQuantity } = cartItem;
    const itemTotal = price * cartQuantity;
    cartTotal.total += itemTotal;
    cartTotal.quantity += cartQuantity;
    return cartTotal;
  },
  {
    total: 0,
    quantity: 0,
  })
  console.log("🚀 ~ countTotal ~ countTotal:", countTotal)
  return (
    <div className="sidebar">
      
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="Menusidebar">
        <ul>
          <li>
          <Link to="/productlist">
            <Button variant="text">New & Featured</Button>
            </Link>
          </li>
          <li>
            <Button variant="text">MEN</Button>
          </li>
          <li>
            <Button variant="text">WOMEN</Button>
          </li>
          <li>
            <Button variant="text">SALE</Button>
          </li>
          <Input placeholder="Search" />
          <li>
            <Link to="/store" className="nav-link">
              <IconButton aria-label="cart">
              <Badge  badgeContent={countTotal.quantity}  color="primary">
                  <ShoppingCartIcon color="action"/>
                </Badge>
              </IconButton>
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/help" className="nav-link">
            Help
          </Link>
        </li>
        <li>
          <Link to="/join-us" className="nav-link">
            Join Us
          </Link>
        </li>
        <li>
          {auth._id ? (
            <Link to="/" className="nav-link">
              <UserPopover/>
            </Link>
          ) : (
            <Link to="/sign-in" className="nav-link">
              Sign In
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebars;