import React from "react";
import { products_display } from "../ui/imageURL";
import { Link } from "react-router-dom";

export default function ProductDisplayCard({ data = {} }) {
  return (
    <Link
      to="/product/12"
      className="w-full max-w-md overflow-hidden flex flex-col gap-3"
    >
      <div className="max-h-[26rem] h-full w-full relative">
        <img
          src={products_display}
          className="w-full h-full object-contain hover:scale-105 transition-transform"
          alt="perfume"
        />
      </div>

      <div className="">
        <p className="text-sm font-satoshi-bold">BLA DE CHANEL</p>
        <p className="text-sm text-charcoalBlack/80 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </p>
      </div>

      <div>
        <p className="text-sm font-satoshi-bold">Rs. 5999</p>
      </div>
    </Link>
  );
}
