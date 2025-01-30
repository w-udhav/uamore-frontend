import React from "react";

export default function MainLayout({ className = "", style = {}, children }) {
  return (
    <div
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
