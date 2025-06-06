import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import Logo from "./Logo";
import bag from "../../assets/svg/bag.svg";
import bag_white from "../../assets/svg/bag_white.svg";
import person from "../../assets/svg/person.svg";
import person_white from "../../assets/svg/person_white.svg";
import menu from "../../assets/svg/menu.svg";
import menu_white from "../../assets/svg/menu_white.svg";
import close from "../../assets/svg/close.svg";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [showHamburger, setShowHamburger] = useState(false);

  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const { cartTotal } = useCart();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleHamburger = () => {
    if (showHamburger) {
      document.body.style.overflow = "auto";
      setShowHamburger(false);
    } else {
      document.body.style.overflow = "hidden";
      setShowHamburger(true);
    }
  };

  const getBackgroundStyle = () => {
    if (scrollY === 0) {
      return "bg-gradient-to-b from-black/20 to-transparent";
    } else if (scrollDirection === "down") {
      return "opacity-0 delay-500";
    } else {
      return (
        "opacity-100 bg-white/80 delay-500 shadow-sm " +
        (location.pathname === "/" && "text-charcoalBlack")
      );
    }
  };

  return (
    <MainLayout
      style={{ transition: "all 0.5s ease, opacity 0.5s ease" }}
      className={`z-50 fixed top-0 left-0 h-max ${getBackgroundStyle()}`}
    >
      {location.pathname === "/" && scrollY === 0 ? (
        <div className="w-full flex items-center text-white">
          <div className="flex-1">
            <Link
              to="/products"
              className="max-w-max underline underline-offset-4 text-sm"
            >
              Explore More
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Logo type="light" width="w-20 md:w-24" />
          </div>
          <div className="flex-1 flex gap-3 justify-end items-center">
            <Link to={isLoggedIn ? "/account/user" : "/login"}>
              <img src={person_white} className="w-8" alt="bag" />
            </Link>
            <Link to="/cart" className="relative">
              <img src={bag_white} className="w-7 text-white" alt="bag" />
              {cartTotal() > 0 && (
                <p className="text-sm bg-white text-charcoalBlack rounded-full w-6 h-6 flex justify-center items-center absolute -bottom-2 -right-2">
                  {cartTotal()}
                </p>
              )}
            </Link>
            <button onClick={handleHamburger}>
              <img src={menu_white} className="w-7 " alt="bag" />
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center text-charcoalBlack">
          <div className="flex-1">
            <Link
              to="/products"
              className="max-w-max underline underline-offset-4 text-sm"
            >
              Explore More
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Logo type="black" width="w-20 md:w-24" />
          </div>
          <div className="flex-1 flex gap-3 justify-end items-center">
            <Link to={isLoggedIn ? "/account/user" : "/login"}>
              <img src={person} className="w-8" alt="bag" />
            </Link>
            <Link to="/cart" className="relative">
              <img src={bag} className="w-7 " alt="bag" />
              {cartTotal() > 0 && (
                <p className="text-sm bg-black text-white rounded-full w-6 h-6 flex justify-center items-center absolute -bottom-2 -right-2">
                  {cartTotal()}
                </p>
              )}
            </Link>
            <button onClick={handleHamburger}>
              <img src={menu} className="w-7 " alt="bag" />
            </button>
          </div>
        </div>
      )}

      {/* Hamburger menu */}
      <AnimatePresence>
        {showHamburger && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="fixed w-dvh h-dvh right-0 top-0 left-0 bottom-0 backdrop-blur-lg flex justify-end bg-black/40"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-lg w-full overflow-y-auto overflow-x-hidden right-0 top-0 bottom-0 p-2 md:p-5"
            >
              {/* Container */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-md p-5 px-6 w-full h-full flex flex-col gap-6 shadow-sm"
              >
                <div className="flex justify-end border-b pb-5">
                  <button onClick={handleHamburger}>
                    <img src={close} className="w-7 " alt="bag" />
                  </button>
                </div>

                <div className="flex flex-col gap-5 font-medium">
                  <Link to="/products" onClick={handleHamburger}>
                    <p className="text-[16px] font-satoshi-medium text-charcoalBlack/50 hover:text-charcoalBlack/80">
                      Shop Perfumes
                    </p>
                  </Link>
                  <Link to="/blogs" onClick={handleHamburger}>
                    <p className="text-[16px] font-satoshi-medium text-charcoalBlack/50 hover:text-charcoalBlack/80">
                      Scent Journal
                    </p>
                  </Link>
                  <Link to="/about-us" onClick={handleHamburger}>
                    <p className="text-[16px] font-satoshi-medium text-charcoalBlack/50 hover:text-charcoalBlack/80">
                      Know About Us
                    </p>
                  </Link>
                  <div className="flex flex-col gap-2">
                    <Link to="/contact-us" onClick={handleHamburger}>
                      <p className="text-[16px] font-satoshi-medium text-charcoalBlack/50 hover:text-charcoalBlack/80">
                        Contact us
                      </p>
                    </Link>

                    <div className="text-[15px] pl-4 text-charcoalBlack/50 font-semibold grid grid-cols-5 gap-2">
                      <div>Phone:</div>
                      <a
                        href="tel:+919588376534"
                        className="text-charcoalBlack col-span-4"
                      >
                        +91 9588376534
                      </a>
                      <div>Email: </div>
                      <a
                        href="mailto:help@uamore.com"
                        className="text-charcoalBlack  col-span-4"
                      >
                        help@uamore.com
                      </a>
                      <div>Address:</div>
                      <a
                        className="text-charcoalBlack col-span-4"
                        href="http://maps.google.com/?q=1200 Essenceara luxe pvt ltd, house no. 195/2, goel kunj,
                        street opposite to nursing sadan, near gulati road parao
                        enclave Samalkha , Panipat 132101"
                        target="_blank"
                      >
                        Essenceara luxe pvt ltd, house no. 195/2, goel kunj,
                        street opposite to nursing sadan, near gulati road parao
                        enclave Samalkha , Panipat 132101
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
}
