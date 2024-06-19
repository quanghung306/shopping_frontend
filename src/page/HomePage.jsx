import React from "react";
import Banner from "../layouts/banner/Banner";
import Container from "../container/Container";
import "./HomePage.css";
import { Card } from "@mui/material";
import Matching from "../layouts/banner/Matching";
import Menberbenefits from "../layouts/banner/Menberbenefits";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <Link to="/productlist" className="nav-link">
      <Matching/>
      </Link>
      <Menberbenefits/>
      
    </div>
  );
};

export default HomePage;
