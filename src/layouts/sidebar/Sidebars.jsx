import { Link } from "react-router-dom";
import logo from "../../assets/Glasgow.webp";
import "./Sidebar.css";
import UserPopover from "../../page/UserPopover";
import { Badge, Button, IconButton, Input  } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {  useSelector } from "react-redux";
export const Sidebars = ({ isLoggedIn, user }) => {
  const {carTotalQuantity} =useSelector(state => state.cart) 
  return (
    <div className="sidebar">
      
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="Menusidebar">
        <ul>
          <li>
            <Button variant="text">New & Featured</Button>
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
              <Badge badgeContent={carTotalQuantity} showZero>
                  <ShoppingBagOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Find a Store
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
          {isLoggedIn && user ? (
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