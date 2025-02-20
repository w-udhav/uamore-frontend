import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/sample.png";
import img2 from "../../../assets/products/perfume1.jpg";
import img3 from "../../../assets/singleProduct/image2.jpg";

export default function BlogDisplayCard({ data }) {
  const img = [img1, img2, img3];

  return (
    <Link
      to={`/blogs/${data.id}`}
      className="w-full max-w-md overflow-hidden flex flex-col gap-3"
    >
      <div className="max-h-[17rem] min-h-[17rem] h-full w-full relative">
        <img
          src={img[data.id - 1]}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
          alt="blog"
        />
      </div>

      <div className="">
        <p className="text-lg line-clamp-2">{data.title}</p>
        <p className="text-sm text-charcoalBlack/80 line-clamp-2">
          {data.author}
        </p>
      </div>
    </Link>
  );
}
