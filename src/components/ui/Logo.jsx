import React from "react";
import logo_black from "../../assets/logos/logo_black.png";
import logo_white from "../../assets/logos/logo_white.png";
import { Link } from "react-router-dom";

export default function Logo({ type = "black", width = "" }) {
  return (
    <Link to="/">
      <img
        src={type === "black" ? logo_black : logo_white}
        alt="logo"
        className={width ? width : "w-20"}
      />
    </Link>
  );
}
