import React from "react";
import { motion } from "framer-motion";

export default function MainLayout({ className = "", style = {}, children }) {
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={
        "w-full h-full flex justify-center px-4 transition-all " +
        " " +
        className
      }
      style={style}
    >
      <div className="max-w-screen-2xl w-full">{children}</div>
    </div>
  );
}
