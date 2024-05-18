import React from "react";
import "./Container.css";
import img from "../assets/n426a4ok.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Container = () => {
  return (
    <div className="Container">
      <div className="card">
        <Link to="/sp/sp1">
          <img src={img} />
        </Link>
        <div>
          <h5>Card title</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <Button variant="contained" endIcon={<ShoppingBagIcon />}>
            Thêm Vào Giỏ Hàng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Container;
