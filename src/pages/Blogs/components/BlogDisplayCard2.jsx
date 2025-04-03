import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/sample.png";

export default function BlogDisplayCard2({ data }) {
  const { _id: id, title, image } = data;
  const slug = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <Link
      to={`/blogs/u/${id}/${slug}`}
      className="w-full max-w-md overflow-hidden flex flex-col gap-3"
    >
      <div className="max-h-[17rem] min-h-[17rem] h-full w-full relative">
        <img
          src={image ?? img1}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
          alt="blog"
        />
      </div>

      <div className="">
        <p className="text-lg line-clamp-2">{title}</p>
      </div>
    </Link>
  );
}
