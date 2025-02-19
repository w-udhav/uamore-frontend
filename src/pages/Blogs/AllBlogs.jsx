import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../../components/layout/MainLayout";
import BlogDisplayCard from "./components/BlogDisplayCard";
import { blogs } from "../../data/data";

export default function AllBlogs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainLayout className="mt-24">
        <div className="min-h-svh">
          {/* Description */}
          <div className="w-full flex flex-col gap-2 items-center border-b py-8">
            <h3 className="text-2xl font-medium font-playfair-display">
              Scent Journal
            </h3>
            <span className="text-center max-w-lg text-charcoalBlack/80">
              A collection of scent stories to enrich your olfactory life.
              Written by fragrance creators, for the curious noses.
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-14 gap-y-12 mt-16">
            <BlogDisplayCard data={blogs[0]} />
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
