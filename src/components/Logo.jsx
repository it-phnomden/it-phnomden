import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="html.png" className="h-48 sm:h-72 object-contain" />
    </div>
  );
};
export default Logo;
