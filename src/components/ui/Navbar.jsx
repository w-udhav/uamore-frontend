import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import Logo from "./Logo";
import bag from "../../assets/svg/bag.svg";
import person from "../../assets/svg/person.svg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBackgroundStyle = () => {
    if (location.pathname !== "/") {
      return "bg-white delay-500";
    }
    if (scrollY === 0) {
      return "bg-gradient-to-b from-black/20 to-transparent border-none";
    } else if (scrollDirection === "down") {
      return "opacity-0 delay-500";
    } else {
      return "opacity-100 bg-white delay-500";
    }
  };

  return (
    <MainLayout
      style={{ transition: "all 0.5s ease, opacity 0.5s ease" }}
      className={`z-50 text-charcoalBlack fixed top-0 left-0 h-max border-b ${getBackgroundStyle()}`}
    >
      <div className="w-full flex items-center">
        <div className="flex-1">
          <Link
            to="/products"
            className="max-w-max underline underline-offset-4 text-sm"
          >
            Explore More
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Logo type="black" width="w-24" />
        </div>
        <div className="flex-1 flex gap-3 justify-end items-center">
          <button>
            <img src={person} className="w-8" alt="bag" />
          </button>
          <button>
            <img src={bag} className="w-7 " alt="bag" />
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
