import React from "react";
import "./Header.css";
import logoWeb from "../../../assets/icons/icon.png";

function Header() {
  return (
    <div className="header">
      <div>
        <img className="img" src={logoWeb} alt="ảnh" />
      </div>
      <div>
        <div id="phoneNumber">+00 9875466</div>
      </div>
    </div>
  );
}

export default Header;
