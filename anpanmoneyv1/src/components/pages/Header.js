import React from "react";
import "./Header.css";
import img1 from "./images/logo1.png";
function Header() {
  return (
    <div className="header">
      <img src={img1} alt="" width="63" length="126" className="floater" />
      <h1>Anpanmoney</h1>
      <hr></hr>
    </div>
  );
}

export default Header;
