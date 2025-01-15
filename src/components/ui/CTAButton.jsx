import React from "react";
import { Link } from "react-router-dom";

export default function CTAButton({
  to,
  type = "dark",
  className = "",
  children,
}) {
  const types = ["light", "dark"];
  return (
    <div className="w-full flex">
      <Link
        to="/"
        className={
          "min-w-60 p-5 rounded-full  font-satoshi-medium text-center transition-all ease-in-out" +
          " " +
          className +
          " " +
          (type === "light"
            ? "bg-darkPlum text-ivoryWhite hover:bg-ivoryWhite hover:text-charcoalBlack"
            : "bg-ivoryWhite text-darkPlum hover:bg-darkPlum hover:text-ivoryWhite")
        }
      >
        {children}
      </Link>
    </div>
  );
}
