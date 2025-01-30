import React from "react";
import { Link } from "react-router-dom";

export default function InstagramPost({ data }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Link
      to="/"
      className="relative w-full min-h-[28rem] max-h-[28rem] h-full overflow-hidden"
    >
      <img
        // src="https://i.pinimg.com/736x/84/b5/ab/84b5abb68afd9ffcc6005a2c08d73fb4.jpg"
        src={data}
        alt=""
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full hover:opacity-100 opacity-0 flex justify-center items-center bg-black/40">
        <div className="text-white text-center">
          <Link to="/" className="max-w-max text-sm mt-5">
            Watch
          </Link>
        </div>
      </div>
    </Link>
  );
}
