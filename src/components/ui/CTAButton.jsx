import React from "react";
import { Link } from "react-router-dom";

export default function CTAButton({
  to,
  type = "dark",
  className = "",
  children,
}) {
  return (
    <Link
      to="/"
      className={
        "min-w-60 p-5  font-satoshi-medium text-center transition-all ease-in-out" +
        " " +
        className +
        " " +
        (type === "light"
          ? "bg-charcoalBlack text-white hover:bg-white hover:text-charcoalBlack"
          : "bg-white text-charcoalBlack hover:bg-charcoalBlack hover:text-white")
      }
    >
      {children}
    </Link>
  );
}
