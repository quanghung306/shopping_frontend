import React from "react";
import ye from "../../assets/nike-just-do-it.jpg";
import "./Matching.css";

const Matching = () => {
  return (
    <div className="matching">
      <h1>Don't Miss</h1>
      <div className="image">
        <img src={ye} alt="quang cao do" width={"100%"} />
      </div>
      <p>Best of Jordan</p>
      <h1>STAY FLY</h1>
      <p>Don’t miss the latest footwear and apparel from Jordan.</p>
    </div>
  );
};

export default Matching;
