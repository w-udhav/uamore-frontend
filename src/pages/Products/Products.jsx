import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import ProductDisplayCard from "../../components/layout/ProductDisplayCard";
import { motion } from "framer-motion";

export default function Products() {
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
              Perfumes
            </h3>
            <span className="text-center max-w-lg text-charcoalBlack/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols- 4 gap-8 lg:gap-10 py-8 lg:py-20">
            {/* <div className="col-span-1">
              <p className="font-satoshi-semibold text-lg">Filter</p>
            </div> */}
            <div className="col-span-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-14 gap-y-12">
                <ProductDisplayCard />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
