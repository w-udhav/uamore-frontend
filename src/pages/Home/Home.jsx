import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MainLayout from "../../components/layout/MainLayout";
import CTAButton from "../../components/ui/CTAButton";
import { home_hero_section } from "../../components/ui/imageURL";
import perfume_sample from "../../assets/video/perfume-sample.mp4";
import InstagramPost from "./components/InstagramPost";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-32"
    >
      <div className="relative min-h-svh h-full bg-white -z-0 overflow-hidden flex justify-center items-end">
        <div className="w-full h-full absolute top-0 left-0 -z-10 flex justify-center items-center">
          <img
            src={home_hero_section}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <MainLayout className="pb-12 w-full h-full text-center text-charcoalBlack">
          <div className="w-full flex justify-end gap-2">
            <div className="flex-1"></div>
            <div className="flex-1 flex flex-col justify-center items-center gap-2">
              <p className="uppercase text-sm">gifts</p>
              <h3>Valentine's Day</h3>
              <Link
                to="/products"
                className="max-w-max underline underline-offset-4 text-sm mt-5"
              >
                Shop Now
              </Link>
            </div>
            <div className="flex-1"></div>
          </div>
        </MainLayout>
      </div>

      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="relative max-h-svh md:max-h-[85svh] min-h-svh md:min-h-[85svh] py-20 h-full w-full">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <video
              className="w-full h-full object-cover "
              src={perfume_sample}
              autoPlay
              loop={true}
              controls={false}
              muted
              playsInline
            ></video>
          </div>
          <div className="absolute top-0 left-0 w-full h-full text-white flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <p className=" text-sm">Makeup</p>
              <h3>Valentine's Day</h3>
              <Link
                to="/"
                className="max-w-max underline underline-offset-4 text-sm mt-5"
              >
                Shop Now
              </Link>
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
