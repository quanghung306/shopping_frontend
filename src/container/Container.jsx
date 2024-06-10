import React from "react";
import "./Container.css";
import { useGetAllProductsQuery } from "../stores/slice/apiRequest";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/slice/cartSlice";
import { useHistory } from "react-router-dom";

const Container = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="Container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred</p>
      ) : (
        <div className="product-list">
          {data?.map((product) => (
            <div key={product.id} className="product">
              <Link to={`/sp/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <h5>{product.title}</h5>
              <div className="details">
                <span>{product.type}</span>
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
