import React from "react";

export default function OurCollectionCard({
  image,
  title = "Title",
  description = "",
  className = "",
}) {
  return (
    <div className={"relative" + " " + className}>
      <div className="w-full h-[30rem] overflow-hidden">
        <img
          src={image}
          className="object-cover w-full h-full"
          alt="perfume collection"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50">
        <div className="w-full h-full flex items-end justify-start p-5">
          <p className="text-ivoryWhite font-satoshi-medium tracking-widest">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
