import React from "react";
import { useParams } from "react-router-dom";
import "./Dynamic.css";
import Rating from "@mui/material/Rating";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/slice/cartSlice";
import { useGetAllProductsQuery } from "../stores/slice/apiRequest";

const Dynamic = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred</p>;
  }

  const product = data?.find((product) => product.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="productid">
      <div className="img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-name">
        <h3>{product.title}</h3>
        <div className="noi dung san pham">
          <p>{product.description}</p>
          <p>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
              minimumFractionDigits: 0,
            }).format(product.price)}
          </p>
        </div>
        <div className="btmua">
          <Button
            variant="contained"
            endIcon={<ShoppingBagIcon />}
            onClick={() => handleAddToCart(product)}
          >
            Add to cart
          </Button>
          <Rating name="customized-10" defaultValue={2} max={5} />
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
