import React from "react";
import img from "../assets/Kuru Kuru Kururin - Raphiiel.mp4";
import { useParams } from "react-router-dom";
import "./Dynamic.css";
import Fab from "@mui/material/Fab";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const Dynamic = () => {
  const param = useParams();
  return (
    <>
      <div className="productid">
        <div className="img">

        <video autoPlay loop muted src={img} />
        </div>
        <div className="product-name">
          <h3>Chi tiet san pham {param.productId} </h3>
          <h5>hung dot</h5>
          <p>select size</p>
         
          <div className="noi dung san pham ">
            <p>Ready to turn heads? Step into the AJ1. New colours and fresh textures update this all-time favourite without losing its classic look and familiar feel. Made from premium materials, pumped with comfortable Air cushioning and decked out with subtle accents, it's a staple sneaker ready for today's world.</p>
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
    </>
  );
};

export default Dynamic;
