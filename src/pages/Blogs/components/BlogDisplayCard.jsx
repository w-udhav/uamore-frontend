import React from "react";
import { Link } from "react-router-dom";
import sample from "../../../assets/sample.png";

export default function BlogDisplayCard({ data }) {
  console.log(data.image);
  return (
    <Link
      to={`/blogs/${data.id}`}
      className="w-full max-w-md overflow-hidden flex flex-col gap-3"
    >
      <div className="max-h-[26rem] h-full w-full relative">
        <img
          src={sample}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
          alt="blog"
        />
      </div>

      <div className="">
        <p className="text-lg uppercase text- font-satoshi-bold">
          {data.title}
        </p>
        {/* <p className="text-sm text-charcoalBlack/80 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </p> */}
      </div>
    </Link>
  );
}
