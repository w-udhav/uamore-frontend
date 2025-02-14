import React from "react";

export default function PageHeaders({ title = "", subtitle = "" }) {
  return (
    <div className="w-full flex flex-col gap-2 items-center border-b py-8">
      <h3 className="text-2xl font-medium font-playfair-display">{title}</h3>
      <span className="text-center max-w-lg text-charcoalBlack/80">
        {subtitle}
      </span>
    </div>
  );
}
