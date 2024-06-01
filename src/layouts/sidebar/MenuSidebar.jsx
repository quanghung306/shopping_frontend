import React from "react";
import "./MenuSidebar.css";
import { Button, Input } from "@mui/material";
import { Link } from "react-router-dom";

const MenuSidebar = () => {
  return (
    <div className="Menusidebar">
      <ul>
        <li><Button variant="text">New & Featured</Button></li>
        <li><Button variant="text">MEN</Button></li>
        <li><Button variant="text">WOMEN</Button></li>
        <li><Button variant="text">SALE</Button></li>
        <Input placeholder="Search" />
        <li>
          <Link to="/store" className="nav-link">
        <Button  endIcon={<ShoppingBagOutlinedIcon />}> </Button>
        </Link>
          </li>
      </ul>
    </div>
  );
};

export default MenuSidebar;
