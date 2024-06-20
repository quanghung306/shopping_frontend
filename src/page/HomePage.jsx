import React from "react";
import Banner from "../layouts/banner/Banner";
import "./HomePage.css";
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
