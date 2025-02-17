import React from "react";
import { products_display } from "../ui/imageURL";
import BOX from "../../assets/products/BOX.jpg";
import { Link } from "react-router-dom";

export default function ProductDisplayCard({ data = {} }) {
  return (
    <Link
      to={`/product/${data?._id}`}
      className="w-full max-w-md overflow-hidden flex flex-col gap-3"
    >
      <div className="max-h-[26rem] h-full w-full relative">
        <img
          src={BOX}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
          alt="perfume"
        />
      </div>

      <div className="">
        <p className="">{data?.title}</p>
        <p className="text-sm text-charcoalBlack/80 line-clamp-2">
          {data?.subtitle}
        </p>
      </div>

      <div>
        <p className="text-sm font-satoshi-bold">Rs.{data?.price}</p>
      </div>
    </Link>
  );
}
