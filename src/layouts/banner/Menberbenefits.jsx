import React from "react";
import "./Menberbenefits.css";
import { Button } from "@mui/material";

const Menberbenefits = () => {
  return (
    <div className="menber">
      <h1>Menber Benefits</h1>
      <div className="content">
          <div className="member-benefits">
            <div className="benefit-section">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_618,c_limit/37b262a3-c8c7-49e8-a29f-8d46bc8ab950/nike-just-do-it.jpg"
                alt="Sport & Wellness App"
              />
              <h2>Sport & Wellness Apps</h2>
              <p>Movement Where You're At</p>
            </div>
            <div className="benefit-section">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_740,c_limit/c17ae904-9307-4575-8ac1-ad08adafe17f/nike-just-do-it.jpg"
                alt="Sneaker Community"
              />
              <h2>SNKRS</h2>
              <p>Your Ultimate Sneaker Community</p>
            </div>
            <div className="benefit-section">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_740,c_limit/cb28c551-b85b-479f-8fc3-40ad4e7c9ca4/nike-just-do-it.jpg"
                alt="Member Product"
              />
              <h2>Member Product</h2>
              <p>Your Exclusive Access</p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Menberbenefits;
