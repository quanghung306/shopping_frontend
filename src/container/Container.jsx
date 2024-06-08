import React from "react";
import "./Container.css";
import { useGetAllProductsQuery } from "../stores/slice/apiRequest";
import { Link } from "react-router-dom";

const Container = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

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
              <h3>{product.title}</h3>
              <Link to={`/sp/${product.id}`}><img src={product.image} alt={product.title} />
              </Link>
              <div className="details">
                <span>{product.description}</span>
                <span className="price">{new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                  minimumFractionDigits: 0,
                }).format(product.price)}</span>
              </div>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Container;
