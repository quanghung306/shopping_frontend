import React from "react";
import ye from "../../assets/Kuru Kuru Kururin - Raphiiel.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="video-baner">
      <video autoPlay muted loop>
        <source src={ye} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Banner;
