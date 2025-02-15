import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import ProductDisplayCard from "../../components/layout/ProductDisplayCard";
import { motion } from "framer-motion";
import PageHeaders from "../../components/ui/PageHeaders";
import { product } from "../../data/data";

const title = "Perfumes";
const subtitle =
  "Enter the realm of Uamore—where every fragrance is a work of art, every note a breath of refinement, and every bottle a signature of eternity waiting to be yours. Surrender to opulence, redefine yourself.";
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
          <PageHeaders title={title} subtitle={subtitle} />
          <div className="w-full grid grid-cols-1 lg:grid-cols- 4 gap-8 lg:gap-10 py-8 lg:py-20">
            {/* <div className="col-span-1">
              <p className="font-satoshi-semibold text-lg">Filter</p>
            </div> */}
            <div className="col-span-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-14 gap-y-12">
                <ProductDisplayCard data={product} />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
