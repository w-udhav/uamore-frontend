import React from "react";
import MainLayout from "../components/layout/MainLayout";
import img1 from "../assets/sample2.png";
import { motion } from "framer-motion";
import PageHeaders from "../components/ui/PageHeaders";

export default function ContactUs() {
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
          <PageHeaders
            title="Contact Us"
            subtitle="UAmore is always there to help you. You just need to contact us."
          />

          <div className="flex justify-center items-center max-w-md w-full mx-auto">
            <div className="flex flex-col gap-5 mt-20 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-sm">Phone</p>
                <a
                  href="tel:+919588376534"
                  className="w-full border-2 bg-zinc-100 outline-none px-3 py-3"
                >
                  +91 9588376534
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Email</p>
                <a
                  href="mailto:help@uamore.com"
                  className="w-full border-2 bg-zinc-100 outline-none px-3 py-3"
                >
                  help@uamore.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Address</p>
                <a
                  className="w-full border-2 bg-zinc-100 outline-none px-3 py-3"
                  href="http://maps.google.com/?q=1200 Essenceara luxe pvt ltd, house no. 195/2, goel kunj,
                        street opposite to nursing sadan, near gulati road parao
                        enclave Samalkha , Panipat 132101"
                  target="_blank"
                >
                  Essenceara luxe pvt ltd, house no. 195/2, goel kunj, street
                  opposite to nursing sadan, near gulati road parao enclave
                  Samalkha , Panipat 132101
                </a>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
