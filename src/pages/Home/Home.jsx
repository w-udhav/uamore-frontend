import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import OurCollectionCard from "./components/OurCollectionCard";
import CTAButton from "../../components/ui/CTAButton";
import { home_hero_section } from "../../components/ui/imageURL";
import perfume_sample from "../../assets/video/perfume-sample.mp4";
import { Link } from "react-router-dom";

const collectionImages = [
  "https://i.pinimg.com/736x/17/4b/76/174b763274a5696909575c2a165cfa9f.jpg",
  "https://i.pinimg.com/736x/5f/74/9f/5f749f794a61f04c579e225e48e46b80.jpg",
  "https://i.pinimg.com/736x/8c/0f/e4/8c0fe43fc106f746feb8b375f20e569e.jpg",
  "https://i.pinimg.com/736x/80/30/40/8030406692ac3153b8fd1d6ad05d71be.jpg",
];

const saleBgImage =
  "https://s3-alpha-sig.figma.com/img/180c/9ce1/700521424939141fe53023f283580e9f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVoMUYKkmuU-holEnBurS6Ov6qPLlF2Eg77cBQZWpDgQTboA-k7ZpQEb02ryUzQloTu5PxY~jlDZiyfiUZ2zVDJyIAy~kLHdVdexOPVdzHnHEU2t7WGwTtfoviT4D-~hLdBvptNQ6rpdLzvY2JvA9z1dM~ju1RrwjA6sagSo5WrJvfKlVyOQ19I2LsGXJZNxZCs154Qs9FDDs2xvZUwLqDF438yVdUf9w1Q9CkNJx~KfCgZi3s3HjHlznX4xnu77StfF~-uY2e9TkLvG2uZGxaU6zeBQ1QdjtrWfzr6rWUvoUhGenBrnRJ53Id0TYkPJhFhLbXPObsIyHTLyCaVggg__";

export default function Home() {
  return (
    <div>
      <div className="relative max-h-[95svh] h-full bg-white -z-0 overflow-hidden">
        <img
          src={home_hero_section}
          alt="image"
          className="object-cover w-full h-full"
        />
        <MainLayout className="absolute top-0 left-0 pb-12 w-full h-full flex items-end text-center text-charcoalBlack">
          <div className="w-full flex justify-end gap-2">
            <div className="flex-1"></div>
            <div className="flex-1 flex flex-col justify-center items-center gap-2">
              <p className="uppercase text-sm">gifts</p>
              <h3>Valentine's Day</h3>
              <Link
                to="/"
                className="max-w-max underline underline-offset-4 text-sm mt-5"
              >
                Shop Now
              </Link>
            </div>
            <div className="flex-1"></div>
          </div>
        </MainLayout>
      </div>

      <MainLayout className="">
        <div className="min-h-svh py-20 h-full w-full flex items-center justify-center">
          <div className="relative">
            <video
              className="object-contain w-full h-full"
              src={perfume_sample}
              autoPlay
              loop
              muted
            ></video>
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
      </MainLayout>

      <MainLayout>
        <div className="min-h-svh h-full w-full flex items-center justify-center text-center">
          <div className="lg:grid grid-cols-2 gap-5 items-center">
            <div className="lg:block hidden w-full h-full max-h-screen py-5">
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

      <MainLayout className="mt-28">
        <div className="h-full w-full flex justify-center text-center">
          {/* Wrapper */}
          <div className="flex flex-col gap-8 max-w-screen-md">
            <h1>Best Selling Products</h1>
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

      <MainLayout className="mt-28">
        <div className="h-full w-full flex justify-center text-center">
          {/* Wrapper */}
          <div className="flex flex-col gap-8 w-full">
            <h1>Our Collection</h1>
            <div className="grid grid-cols-3 collection-grid-template gap-5">
              <OurCollectionCard
                image={collectionImages[0]}
                title="Designer Delights Collection"
              />
              <OurCollectionCard
                image={collectionImages[1]}
                className="col-span-2"
              />
              <OurCollectionCard
                image={collectionImages[2]}
                className="col-span-2"
              />
              <OurCollectionCard image={collectionImages[3]} />
            </div>
          </div>
        </div>
      </MainLayout>

      <MainLayout className="mt-28">
        <div className="relative">
          <img
            src={saleBgImage}
            alt="sale image"
            className="max-h-[50rem] w-full h-full object-cover object-center"
          />

          <div className="absolute w-full h-full top-0 left-0 inset-0 flex items-center justify-start text-ivoryWhite p-5">
            <div className="flex flex-col gap-6 max-w-screen-md">
              <div className="flex flex-col gap-2">
                <h1>Perfume Year-End Sale!</h1>
                <p className="text-5xl font-satoshi-bold">Up to 50% OFF</p>
              </div>

              <p className="text-xl opacity-80">
                Discover an exquisite collection of premium perfumes at
                unbelievable prices during our exclusive Perfume Sale!
              </p>
              <CTAButton className="mt-10" type="dark">
                Know More
              </CTAButton>
            </div>
          </div>
        </div>
      </MainLayout>

      <MainLayout className="mt-28">
        <div className="h-full w-full flex justify-center text-center">
          {/* Wrapper */}
          <div className="flex flex-col gap-8 w-full">
            <h1>Latest Articles</h1>
            <div className="grid grid-cols-3 collection-grid-template gap-5"></div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
