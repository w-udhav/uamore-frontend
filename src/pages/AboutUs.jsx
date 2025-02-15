import React from "react";
import MainLayout from "../components/layout/MainLayout";
import img1 from "../assets/sample2.png";

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

        <div className="w-full flex justify-center mt-16 text-justify">
          <div className="max-w-5xl w-full flex flex-col gap-20 p-5 md:p-0">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <p className="font-satoshi-regular text-4xl mb-2">About Us</p>
              <div className="flex flex-col gap-5">
                <p>
                  A premium scent means much more than just a fragrance – it is
                  an experience, an emotion and sophistication woven into the
                  air. At Uamore, we create high-end perfumes that last through
                  endless time, capturing that perfect harmony between style and
                  sentiment. Every ingredient is an act of love, a homage to the
                  classics, and a testament of a new definition of luxury.
                </p>
                <p>
                  For the connoisseurs of the perfumes, Uamore is not just a
                  scent, it is an experience, a signature, a story which is yet
                  to be told.
                </p>
                <p>Uamore—where scent becomes a soul-stirring masterpiece.</p>
              </div>
            </div>
            <div>
              <p className="font-satoshi-regular text-4xl mb-2">Our values</p>
              <div className="flex flex-col gap-5">
                <p>
                  At Uamore, we believe that a high-end fragrance is a unspoken
                  language, a luxurious timeless whisper of love, art and
                  sophistication. Rooted on the principles of the premium art of
                  perfumery, every perfume is crafted with masterful artistry,
                  harmonizing heritage with evocative modernity to produce
                  scents that unfold like a sonnet upon the skin. Every note is
                  a story, and every bottle is an emotion – for those who
                  deserve a whisper of exquisite allure.
                </p>
                <p>
                  The luxury that we are chasing after is not the one that is
                  hidden in, or defined by material values, but the one which is
                  characterized by the depth, the meaning, and the connection.
                  Our idea is that true beauty is ageless, that affection is
                  incorporated into every part, and that class is often found in
                  the quietness of things. For this reason, Uamore is not just a
                  fragrance but a whole experience: a chance to create an
                  intimate and lasting signature
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
