import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

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
    if (scrollY === 0) {
      return "bg-gradient-to-b from-black/20 to-transparent";
    } else if (scrollDirection === "down") {
      return "opacity-0 delay-500";
    } else {
      return "opacity-100 bg-white delay-500";
    }
  };

  return (
    <MainLayout
      style={{ transition: "background-color 0.5s ease, opacity 0.5s ease" }}
      className={`z-50 text-charcoalBlack fixed top-0 left-0 h-20 max-h-20 ${getBackgroundStyle()}`}
    >
      asd
    </MainLayout>
  );
}
