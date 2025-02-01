import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const url =
  "https://i.pinimg.com/736x/84/b5/ab/84b5abb68afd9ffcc6005a2c08d73fb4.jpg";

export default function InstagramPost() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          speed: 500,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="w-full max-w-screen-2xl px-3">
      <Slider {...settings}>
        {[0, 1, 2, 3, 4, 5].map((item, index) => (
          <Link
            to="/"
            key={index}
            className="relative w-full min-h-[28rem] max-h-[28rem] h-full overflow-hidden"
          >
            <img
              src={url}
              alt=""
              className="w-full min-h-[28rem] max-h-[28rem] h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 w-full h-full hover:opacity-100 opacity-0 flex justify-center items-center bg-black/40">
              <div className="text-white text-center">
                <Link to="/" className="max-w-max text-sm mt-5">
                  Watch
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
