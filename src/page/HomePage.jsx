import React from "react";
import Banner from "../layouts/banner/Banner";
import Container from "../container/Container";
import "./HomePage.css";
import { Card } from "@mui/material";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <Card color="neutral" size="md" variant="outlined" sx={{ width: 320 }}>
        <div
          className="card"
          style={{
            backgroundImage: `url('https://th.bing.com/th/id/OIP.zv2pabAJcqCKkvY5mA8FpgAAAA?pid=ImgDet&w=254&h=169.33333333333334&c=7')`,
          }}
        >
          <div className="card-content">
            <h2>Galaxy Buds 2019</h2>
            <p>Perfect for everyone</p>
          </div>
        </div>
      </Card>
      <Container />
    </div>
  );
};

export default HomePage;
