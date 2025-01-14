import React from "react";

export default function MainLayout({ className = "", children }) {
  return (
    <div className={"w-full h-full flex justify-center px-4" + " " + className}>
      <div className="max-w-screen-2xl w-full border">{children}</div>
    </div>
  );
}
