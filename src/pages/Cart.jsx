import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import PageHeaders from "../components/ui/PageHeaders";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";
import CartCard from "../components/ui/CartCard";

export default function Cart() {
  const { cart, updateCart, calculateCartValue, clearCart } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  const checkCouponValidity = async () => {};

  const handleOrder = async () => {};

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
          <PageHeaders title="Cart" subtitle="Final checkpoint" />
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-0 lg:gap-10 py-8 lg:py-20">
            {cart.length > 0 ? (
              <>
                <div className="col-span-2">
                  {cart.map((item, index) => (
                    <CartCard
                      key={index}
                      data={item}
                      handleIncrement={() => updateCart(item.id, 1)}
                      handleDecrement={() => updateCart(item.id, -1)}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-5">
                  {/* Coupon */}
                  <div className="flex gap-2 w-full ">
                    <input
                      type="text"
                      name="phone"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full border-2 focus:border-black outline-none px-3 py-3 uppercase"
                      placeholder="Discount Code"
                    />
                    <button className="w-32  p-4  font-satoshi-medium text-center transition-all ease-in-out bg-charcoalBlack text-white hover:bg-black">
                      Apply
                    </button>
                  </div>

                  <div className="flex flex-col gap-3 border-b">
                    <div className="font-semibold flex justify-between">
                      <span className="font-medium text-zinc-500">
                        Subtotal:
                      </span>
                      <span className="text-lg">₹{calculateCartValue}</span>
                    </div>
                    <div className="font-semibold flex justify-between">
                      <span className="font-medium text-zinc-500">
                        Discount
                      </span>
                      <span className="text-lg text-green-400">
                        - ₹{couponDiscount}
                      </span>
                    </div>
                    <div className="font-semibold flex justify-between">
                      <span className="font-medium text-zinc-500">GST</span>
                      <span className="text-lg text-green-400">
                        - ₹{couponDiscount}
                      </span>
                    </div>
                  </div>

                  <div className="font-semibold flex justify-between">
                    <span className="font-medium text-zinc-500">Total</span>
                    <span className="text-lg">₹{calculateCartValue}</span>
                  </div>

                  <button className="w-full p-4  font-satoshi-medium text-center transition-all ease-in-out bg-charcoalBlack text-white hover:bg-black">
                    Checkout
                  </button>
                </div>
              </>
            ) : (
              <div className="col-span-full flex justify-center items-center h-96">
                <h1 className="text-3xl font-satoshi-regular">
                  Your Cart is empty
                </h1>
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
