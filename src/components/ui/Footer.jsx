import React from "react";
import MainLayout from "../layout/MainLayout";
import facebook from "../../assets/social icons/facebook.svg";
import instagram from "../../assets/social icons/instagram.svg";
import linkedin from "../../assets/social icons/linkedin.svg";
import twitter from "../../assets/social icons/twitter.svg";
import { Link } from "react-router-dom";

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
    links: [],
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
    <MainLayout className="py-40">
      <div className="w-full grid grid-cols-3 gap-20 border-b-2 pb-20">
        <div className="col-span-1 flex flex-col gap-8">
          <p className="text-3xl font-satoshi-medium">
            Subscribe to our Newsletter:
          </p>

          <div className="w-full flex flex-col gap-2">
            <p className="text-lg">
              Receive Updates on New Arrivals and Special Promotions!
            </p>
            <input
              type="text"
              className="w-full bg-richBurgundy/10 border-2 border-dustyRose/50 outline-dustyRose rounded-md px-3 py-2 placeholder:text-dustyRose text-charcoalBlack"
              placeholder="Enter your email address"
            />
            <button className="w-full p-3 rounded-md bg-richBurgundy hover:bg-charcoalBlack text-ivoryWhite font-satoshi-medium">
              Submit
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((socialLink, index) => (
              <a href={socialLink.link} key={index} target="_blank">
                <img
                  src={socialLink.icon}
                  alt={socialLink.name}
                  className="w-10"
                />
              </a>
            ))}
          </div>
        </div>
        {/* Section 2 */}
        <div className="col-span-2 grid grid-cols-4 pl-10 pt-16">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <p className="text-lg font-satoshi-semibold">{item.title}</p>
              <div className="flex flex-col gap-2 mt-5">
                {item.links.map((link, index) => (
                  <Link key={index} to={link?.link} className="hover:underline">
                    {link?.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-center text-sm">
          &copy; 2025 Uamore | All Rights Reserved | Privacy Policy | Terms and
          Conditions
        </p>
      </div>
    </MainLayout>
  );
}
