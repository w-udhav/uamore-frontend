import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import CTAButton from "../../components/ui/CTAButton";
import { home_hero_section } from "../../components/ui/imageURL";
import perfume_sample from "../../assets/video/perfume-sample.mp4";
import { Link } from "react-router-dom";
import InstagramPost from "./components/InstagramPost";

const collectionImages = [
  "https://i.pinimg.com/736x/17/4b/76/174b763274a5696909575c2a165cfa9f.jpg",
  "https://i.pinimg.com/736x/5f/74/9f/5f749f794a61f04c579e225e48e46b80.jpg",
  "https://i.pinimg.com/736x/8c/0f/e4/8c0fe43fc106f746feb8b375f20e569e.jpg",
  "https://i.pinimg.com/736x/80/30/40/8030406692ac3153b8fd1d6ad05d71be.jpg",
  "https://i.pinimg.com/736x/17/4b/76/174b763274a5696909575c2a165cfa9f.jpg",
  "https://i.pinimg.com/736x/5f/74/9f/5f749f794a61f04c579e225e48e46b80.jpg",
  "https://i.pinimg.com/736x/8c/0f/e4/8c0fe43fc106f746feb8b375f20e569e.jpg",
  "https://i.pinimg.com/736x/80/30/40/8030406692ac3153b8fd1d6ad05d71be.jpg",
];

const saleBgImage =
  "https://s3-alpha-sig.figma.com/img/180c/9ce1/700521424939141fe53023f283580e9f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVoMUYKkmuU-holEnBurS6Ov6qPLlF2Eg77cBQZWpDgQTboA-k7ZpQEb02ryUzQloTu5PxY~jlDZiyfiUZ2zVDJyIAy~kLHdVdexOPVdzHnHEU2t7WGwTtfoviT4D-~hLdBvptNQ6rpdLzvY2JvA9z1dM~ju1RrwjA6sagSo5WrJvfKlVyOQ19I2LsGXJZNxZCs154Qs9FDDs2xvZUwLqDF438yVdUf9w1Q9CkNJx~KfCgZi3s3HjHlznX4xnu77StfF~-uY2e9TkLvG2uZGxaU6zeBQ1QdjtrWfzr6rWUvoUhGenBrnRJ53Id0TYkPJhFhLbXPObsIyHTLyCaVggg__";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
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
              loop={true}
              controls={false}
              muted
              playsInline
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
    </div>
  );
}
