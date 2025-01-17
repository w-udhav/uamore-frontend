import React from "react";
import { Link } from "react-router-dom";

export default function CTAButton({
  to,
  type = "dark",
  className = "",
  children,
}) {
  return (
    <div className="flex">
      <Link
        to="/"
        className={
          "min-w-60 p-5 rounded-full  font-satoshi-medium text-center transition-all ease-in-out" +
          " " +
          className +
          " " +
          (type === "light"
            ? "bg-richBurgundy text-ivoryWhite hover:bg-charcoalBlack"
            : "bg-ivoryWhite text-richBurgundy hover:bg-richBurgundy hover:text-ivoryWhite")
        }
      >
        {children}
      </Link>
    </div>
  );
}
