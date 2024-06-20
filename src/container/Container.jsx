import React from "react";
import "./Container.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../stores/slice/cartSlice";

const Container = () => {
  const { items: data, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="Container">
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "failed" ? (
        <p>An error occurred</p>
      ) : (
        <div className="product-list">
          {data && data.map((product) => (
            <div key={product._id} className="product">
              <Link to={`/sp/${product._id}`}>
                <img src={product.image?.url} alt={product.title} />
              </Link>
              <h5>{product.title}</h5>
              <div className="details">
                <span>{product.gender}</span>
                <span className="price">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                    minimumFractionDigits: 0,
                  }).format(product.price)}
                </span>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Container;
