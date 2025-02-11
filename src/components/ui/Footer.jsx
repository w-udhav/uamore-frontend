import React from "react";
import MainLayout from "../layout/MainLayout";
import facebook from "../../assets/social icons/facebook.svg";
import instagram from "../../assets/social icons/instagram.svg";
import linkedin from "../../assets/social icons/linkedin.svg";
import twitter from "../../assets/social icons/twitter.svg";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import logo_black from "../../assets/logos/logo_black.png";
import Logo from "./Logo";

const socialLinks = [
  {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
];

const footerLinks = [
  {
    title: "Categories",
    links: [],
  },
  {
    title: "Shopping",
    links: [{ name: "Perfumes", link: "/products" }],
  },
  {
    title: "Customer Care",
    links: [],
  },
  {
    title: "Site Map",
    links: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <MainLayout className="mt-28">
      {/* Footer top */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-20 border-t pt-20">
        <div className="col-span-1 flex flex-col gap-8 max-w-lg">
          <p className="md:text-2xl font-playfair-display text-charcoalBlack/80">
            Sign up for exclusivity
          </p>

          <div className="w-full flex flex-col gap-2">
            <p className="text-sm text-zinc-500">
              Receive Updates on New Arrivals and Special Promotions!
            </p>
            <input
              type="text"
              className="w-full border-2 focus:border-black outline-none px-3 py-3  text-charcoalBlack"
              placeholder="Enter your email address"
            />
            <CTAButton
              className="h-14 flex justify-center items-center"
              type="light"
            >
              Subscribe
            </CTAButton>
          </div>
        </div>
        {/* Section 2 */}
        <div className="col-span-2 grid-cols-1 grid md:grid-cols-4 lg:pl-10">
          {footerLinks.map((item, index) => (
            <div key={index} className="md:mb-0 mb-10">
              <p className="md:text-2xl font-playfair-display text-charcoalBlack/80">
                {item.title}
              </p>
              <div className="flex flex-col gap-2 mt-5">
                {item.links.map((link, index) => (
                  <Link
                    key={index}
                    to={link?.link}
                    className="hover:underline text-zinc-500 text-sm"
                  >
                    {link?.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer bottom */}
      <div className="flex text-sm items-center justify-between mt-5">
        {/* Social links */}
        <div className="flex-1 flex flex-wrap items-center gap-4 text-sm">
          <p className="text-sm text-zinc-500 w-max">Follow us:</p>
          {socialLinks.map((socialLink, index) => (
            <a href={socialLink.link} key={index} target="_blank">
              {socialLink.name}
            </a>
          ))}
        </div>
        <div className="flex-1 flex flex-col items-center text-zinc-500">
          <Logo type="black" />
        </div>
        <p className="text-right text-sm flex-1 text-zinc-500 flex-wrap">
          All Rights Reserved | Privacy Policy | Terms and Conditions
        </p>
      </div>
    </MainLayout>
  );
}
