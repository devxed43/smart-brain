import React from "react";
import Tilt from "react-parallax-tilt";
import BrainLogo from "./Image.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Tilt className="Tilt br2 shadow-2">
      <img src={BrainLogo} alt="" />
    </Tilt>
  );
};

export default Logo;
