import React from "react";
import MainLayout from "../../components/layout/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <div className="min-h-svh h-full w-full flex items-center justify-center text-center">
          {/* Wrapper */}
          <div className="flex flex-col gap-5">
            <h1 className="">
              Elevate Your Spirit with Victory Scented Fragrances!
            </h1>
            <p>
              Shop now and embrace the sweet smell of victory with Local Face.
            </p>

            <div>
              <button className="min-w-60 p-5 rounded-full bg-darkPlum hover:bg-charcoalBlack text-ivoryWhite font-satoshi-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </MainLayout>

      <MainLayout className="bg-charcoalBlack text-ivoryWhite">
        <div className="min-h-svh h-full w-full flex items-center justify-center text-center">
          {/* Wrapper */}
          <div className="flex flex-col gap-8 max-w-screen-md">
            <h1 className="">Welcome to Uamore</h1>
            <p className="opacity-80 leading-relaxed">
              Welcome to Local Face Perfumes, where the spirit of victory and
              triumph come alive through scents that empower and inspire. Our
              curated collection, aptly named "Victory Scented," is a
              celebration of success and elegance, designed to unleash your
              victorious essence. Indulge in the sweet taste of triumph with
              captivating fragrances that tell the tale of your achievements. At
              Local Face, we believe that every victory deserves a signature
              scent, and we are dedicated to providing unforgettable fragrances
              that elevate your spirit and empower your journey
            </p>
          </div>
        </div>
      </MainLayout>

      <MainLayout>
        <div className="max-h-svh h-full w-full flex items-center justify-center text-center">
          <div className="grid grid-cols-2 gap-5 items-center">
            <div className="w-full h-full max-h-screen py-5">
              <img
                src="https://i.pinimg.com/736x/45/a8/f7/45a8f79f2be441af23834b53af377cc1.jpg"
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Wrapper */}
            <div className="flex flex-col gap-8 max-w-screen-md">
              <h1 className="">Our Values</h1>
              <p className="opacity-80 leading-relaxed">
                At Local Face, our perfume retail store is built on a foundation
                of passion and authenticity. We believe in celebrating the
                individuality of every customer, providing a diverse collection
                of scents that resonate with their unique personality and style.
                Our dedicated team of fragrance enthusiasts is committed to
                creating a welcoming and inclusive environment, where
                connections are forged, and inspiration thrives.
              </p>
              <p className="opacity-80 leading-relaxed">
                Embracing sustainability and continuous learning, Local Face
                strives to be more than just a shopping destination; we are a
                community that inspires and empowers individuals on their
                fragrance journey.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
