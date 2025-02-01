import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import Logo from "./Logo";
import bag from "../../assets/svg/bag.svg";
import person from "../../assets/svg/person.svg";
import menu from "../../assets/svg/menu.svg";
import close from "../../assets/svg/close.svg";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [showHamburger, setShowHamburger] = useState(false);
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
      return "opacity-100 bg-white delay-500 shadow-sm";
    }
  };

  return (
    <MainLayout
      style={{ transition: "all 0.5s ease, opacity 0.5s ease" }}
      className={`z-50 text-charcoalBlack fixed top-0 left-0 h-max ${getBackgroundStyle()}`}
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
          <Logo type="black" width="w-20 md:w-24" />
        </div>
        <div className="flex-1 flex gap-3 justify-end items-center">
          <button>
            <img src={person} className="w-8" alt="bag" />
          </button>
          <button>
            <img src={bag} className="w-7 " alt="bag" />
          </button>
          <button onClick={handleHamburger}>
            <img src={menu} className="w-7 " alt="bag" />
          </button>
        </div>
      </div>

      {/* Hamburger menu */}
      <AnimatePresence>
        {showHamburger && (
          <div
            onClick={handleHamburger}
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
                  <Link to="/" className="">
                    <p className="text-[16px] font-satoshi-medium text-charcoalBlack/50 hover:text-charcoalBlack/80">
                      Home
                    </p>
                  </Link>
                  <Link to="/products" className="">
                    <p className="text-[16px] font-satoshi-medium text-charcoalBlack/50 hover:text-charcoalBlack/80">
                      Shop
                    </p>
                  </Link>
                  <Link to="/about" className="">
                    <p className="text-[16px] font-satoshi-medium text-charcoalBlack/50 hover:text-charcoalBlack/80">
                      About
                    </p>
                  </Link>
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] font-satoshi-medium text-charcoalBlack/50 hover:text-charcoalBlack/80">
                      Contact us
                    </p>
                    <div className="text-[15px] pl-4">
                      <div>Phone: 1234567890</div>
                      <div>Email: helpdesk@uamore.com</div>
                      <div>
                        Address:
                        <span className="text-charcoalBlack">
                          1234, Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit
                        </span>
                      </div>
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
