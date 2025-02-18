import React from "react";
import Icon from "./Icon";
import img from "../../assets/products/BOX.jpg";

export default function CartCard({ data, handleIncrement, handleDecrement }) {
  return (
    <div className="border-b py-1">
      <div className="flex items-start gap-4 p-2">
        <div className="w-52 h-32 bg-zinc-50 rounded-md">
          <img src={img} alt="perfume" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="text-zinc-800 font-medium">
            {data?.product?.name || "Name"}
          </div>
          <div className="text-sm text-gray-500">
            {data?.product?.subtitle || "category"}
          </div>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-4 border max-w-32 w-full">
              <button
                onClick={() => handleDecrement(data)}
                className="hover:bg-charcoalBlack flex items-center justify-center w-8 h-8"
              >
                <Icon
                  name="remove"
                  className="hover:text-white w-full text-xl"
                />
              </button>
              <div className="font-semibold flex-1 flex justify-center">
                {data?.quantity}
              </div>
              <button
                onClick={() => handleIncrement(data)}
                className="hover:bg-charcoalBlack flex items-center justify-center w-8 h-8"
              >
                <Icon name="add" className="hover:text-white text-xl" />
              </button>
            </div>

            <div>
              <div className="text-xl font-medium">₹{data?.product?.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
