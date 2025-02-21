import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/instagram/1.jpg";
import img2 from "../../../assets/instagram/2.jpg";
import img3 from "../../../assets/instagram/3.jpg";
import img4 from "../../../assets/instagram/4.jpg";
import img5 from "../../../assets/instagram/4.jpg";
import img6 from "../../../assets/instagram/4.jpg";

const url =
  "https://i.pinimg.com/736x/84/b5/ab/84b5abb68afd9ffcc6005a2c08d73fb4.jpg";

const instagramFeed = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DGH586KSiMO/",
    image: img1,
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DGF_IEWSgSj/",
    image: img2,
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DGDQvZeJX_f/",
    image: img3,
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/C97QQInyfJg/",
    image: img4,
  },
];

export default function InstagramPost() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 4,
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
        {instagramFeed.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            key={index}
            className="relative w-full min-h-[28rem] max-h-[28rem] h-full overflow-hidden"
          >
            <img
              src={item.image}
              alt="uamore - instagram"
              className="w-full min-h-[28rem] max-h-[28rem] h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 w-full h-full hover:opacity-100 opacity-0 flex justify-center items-center bg-black/40">
              <div className="text-white text-center">
                <p className="max-w-max text-sm mt-5">Watch</p>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}
