import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import ProductDisplayCard from "../../components/layout/ProductDisplayCard";

export default function Products() {
  return (
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

        <div className="w-full grid grid-cols-4 gap-10 py-20">
          <div className="col-span-1">
            <p className="border-b">Filters</p>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-14">
            <ProductDisplayCard />
            <ProductDisplayCard />
            <ProductDisplayCard />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
