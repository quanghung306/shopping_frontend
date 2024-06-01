import React from "react";
import ye from "../../assets/NIKE  - JUST DO IT _ Spec ad.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="video-banner">
      <video autoPlay muted loop>
        <source src={ye} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Banner;
