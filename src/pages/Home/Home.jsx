import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MainLayout from "../../components/layout/MainLayout";
import CTAButton from "../../components/ui/CTAButton";
import { home_hero_section } from "../../components/ui/imageURL";
import perfumeVd from "../../assets/video/pf-vd.mp4";
import InstagramPost from "./components/InstagramPost";

import sample from "../../assets/sample3.png";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-32"
    >
      <div className="relative min-h-[95svh] h-full bg-white z-0 overflow-hidden flex justify">
        <div className="absolute bottom-0 left-0 w-full h-60 backdrop-blur-[1px] bg-gradient-to-t from-black/30 to-transparent -z-0" />
        <div className="w-full h-full absolute top-0 left-0 -z-10 flex justify-center items-center">
          <img
            src={sample}
            alt="image"
            className="w-full h-full object-cover object-[50%]"
          />
        </div>
        <MainLayout className="pb-12 w-full h-full text-center text-white z-10 flex items-end absolute top-0 left-0">
          <div className="w-full h-full flex justify-end items-center gap-2">
            <div className="max-w-xl mx-auto flex-1 flex flex-col justify-center items-center gap-2 drop-shadow-xl">
              {/* <p>
                A premium scent means much more than just a fragrance – it is an
                experience, an emotion and sophistication woven into the air
              </p> */}
              <h3 className="text-5xl font-thin">UAmore</h3>
              <Link
                to="/product"
                className="max-w-max underline underline-offset-4 text-sm mt-3"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </MainLayout>
      </div>

      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="relative max-h-svh md:max-h-[80svh] min-h-svh md:min-h-[80svh] py-20 h-full w-full">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <video
              className="w-full h-full object-cover "
              src={perfumeVd}
              autoPlay
              loop={true}
              controls={false}
              muted
              playsInline
            ></video>
            {/* <img
              src={sample}
              alt="image"
              className="w-full h-full object-cover "
            /> */}
          </div>

          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-30"></div>

          <div className="absolute top-0 left-0 w-full h-full text-white flex justify-center items-center">
            <div className="flex flex-col items-center gap-2 relative md:p-20 z-10">
              {/* <p className="">Makeup</p> */}
              <p className="text-center max-w-xl">
                Enter the realm of Uamore—where every fragrance is a work of
                art, every note a breath of refinement, and every bottle a
                signature of eternity waiting to be yours. Surrender to
                opulence, redefine yourself.
              </p>
              {/* <h3 className="text-5xl font-thin">Valentine's Day</h3> */}
              <Link
                to="/product"
                className="max-w-max underline underline-offset-4 text-sm mt-5"
              >
                Shop Now
              </Link>

              <div className="blur-3xl absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <MainLayout>
        <div className="max-h-svh h-full w-full flex items-center justify-center text-center">
          <div className="w-full flex flex-col items-center gap-28">
            <CTAButton
              className="font-medium tracking-widest uppercase"
              type="light"
            >
              Stay Inspired - find us on Instagram
            </CTAButton>
            <InstagramPost />
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
