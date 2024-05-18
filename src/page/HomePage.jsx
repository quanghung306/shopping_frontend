import React from "react";
import Banner from "../layouts/banner/Banner";
import Container from "../container/Container";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <Container/>
    </div>
  );
};

export default HomePage;
