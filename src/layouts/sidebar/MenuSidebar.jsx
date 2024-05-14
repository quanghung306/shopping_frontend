import React from "react";
import "./MenuSidebar.css";

const MenuSidebar = () => {
  return (
    <div className="Menusidebar">
      <ul>
        <li>New & Featured</li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>SALE</li>
        <input className="se" type="text" placeholder="Search"></input>
      </ul>
    </div>
  );
};

export default MenuSidebar;
