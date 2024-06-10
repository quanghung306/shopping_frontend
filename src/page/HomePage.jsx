import React from "react";
import Banner from "../layouts/banner/Banner";
import Container from "../container/Container";
import "./HomePage.css";
import { Card } from "@mui/material";
import Matching from "../layouts/banner/Matching";
import Menberbenefits from "../layouts/banner/Menberbenefits";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <Matching/>
      <Menberbenefits/>
      {/* <Container /> */}
    </div>
  );
};

export default HomePage;
