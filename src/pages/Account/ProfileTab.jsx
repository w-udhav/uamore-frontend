import React from "react";

export default function ProfileTab() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 pb-20">
        <p className="md:text-2xl font-playfair-display text-charcoalBlack/80 border-b pb-2">
          Basic
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-sm">First Name</p>
            <input
              type="text"
              className="w-full border-2 focus:border-black outline-none px-3 py-3  text-charcoalBlack"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Last Name</p>
            <input
              type="text"
              className="w-full border-2 focus:border-black outline-none px-3 py-3  text-charcoalBlack"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Email</p>
            <input
              type="text"
              className="w-full border-2 focus:border-black outline-none px-3 py-3  text-charcoalBlack"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Phone number</p>
            <input
              type="text"
              className="w-full border-2 focus:border-black outline-none px-3 py-3  text-charcoalBlack"
              placeholder="Enter your last name"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 border-b pb-8">
        <div className="flex justify-between items-center border-b pb-2">
          <p className="md:text-2xl font-playfair-display text-charcoalBlack/80 ">
            Your Addresses
          </p>
          <button className="bg-zinc-100 px-6 py-2 text-sm hover:bg-charcoalBlack hover:text-white transition-all">
            Add
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-sm">First Name</p>
            <input
              type="text"
              className="w-full border-2 focus:border-black outline-none px-3 py-3  text-charcoalBlack"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Last Name</p>
            <input
              type="text"
              className="w-full border-2 focus:border-black outline-none px-3 py-3  text-charcoalBlack"
              placeholder="Enter your last name"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
