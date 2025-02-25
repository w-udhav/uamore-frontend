import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import Logo from "./Logo";

const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/15jDtkmdzN/?mibextid=wwXIfr",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_uamore/",
  },
  {
    name: "Pinterest",
    link: "https://in.pinterest.com/UAmore_/",
  },
];

const footerLinks = [
  {
    title: "Categories",
    links: [{ name: "Men", link: "/products" }],
  },
  {
    title: "Shopping",
    links: [{ name: "Perfumes", link: "/products" }],
  },
  {
    title: "Customer Care",
    links: [{ name: "Contact us", link: "/contact-us" }],
  },
  {
    title: "Site Map",
    links: [
      { name: "Home", link: "/" },
      { name: "Products", link: "/products" },
      { name: "About Us", link: "/about-us" },
      { name: "Blogs", link: "/blogs" },
    ],
  },
];

export default function Footer() {
  const [isCompleted, setIsCompleted] = useState(false);
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
            <button
              onClick={() => setIsCompleted(true)}
              className="w-full p-4 px-6  font-satoshi-medium text-center transition-all ease-in-out bg-charcoalBlack text-white hover:bg-black"
            >
              {isCompleted ? "Thank You!" : "Subscribe"}
            </button>
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
      <div className="flex flex-col md:flex-row text-sm items-center justify-between gap-5 mt-5 mb-2">
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
        <p className="text-center md:text-right text-sm flex-1 text-zinc-500 flex justify-center md:justify-end flex-wrap gap-2">
          <Link to="/terms-and-conditions">Terms and Conditions</Link> |{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link to="/refund-policy">Cancellation & Refund Policy</Link> |{" "}
          <Link to="/shipping-policy">Shipping Policy</Link>
        </p>
      </div>
    </MainLayout>
  );
}
