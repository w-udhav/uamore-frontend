import React from "react";
import MainLayout from "../components/layout/MainLayout";

export default function AboutUs() {
  return (
    <MainLayout className="mt-24">
      <div className="min-h-svh">
        {/* Description */}
        <div className="w-full flex flex-col gap-2 items-center border-b py-8">
          <h3 className="text-5xl font-playfair-display font-thin">UAmore</h3>
          <span className="text-center max-w-lg text-charcoalBlack/80 italic">
            "Redefining Luxury, One Timeless Scent at a Time"
          </span>
        </div>

        <div className="w-full flex justify-center mt-16">
          <div className="max-w-5xl w-full flex flex-col gap-5 p-5 md:p-0">
            <p className="font-satoshi-regular text-4xl">About Us</p>
            <p className="text-justify">
              If you like smelling awesome all day long, you’re at the right
              place. And if you love luxurious and iconic perfumes but don’t
              want to spend your hard-earned money, then also you’re in the
              right place. BELLAVITA is a fragrance-forward brand that creates
              world-class luxury perfumes along with bath and body products that
              feel good and smell even better. Our perfumes are all you need to
              be the centre of attention, be it day or night. Our best selling
              perfumes are infused in our bath and body range so that you smell
              awesome straight from the time you take a shower. Power through
              the day with imported perfume oils from France, Spain and Italy
              right in your pocket and wardrobe, as BELLAVITA is single-mindedly
              and completely obsessed with making you smell fresh and
              irresistible.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
