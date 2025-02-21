import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import PageHeaders from "../components/ui/PageHeaders";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";
import CartCard from "../components/ui/CartCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";

export default function Cart() {
  const { isLoggedIn } = useAuth();
  const {
    cart,
    updateCart,
    calculateCartValue,
    clearCart,
    isCartLoading,
    cartReciept,
    getCouponValue,
    couponDetail,
    removeCoupon,
  } = useCart();
  const navigate = useNavigate();
  const { subtotal, total, couponDiscount: discount, gst } = cartReciept();

  const [couponCode, setCouponCode] = useState(couponDetail?.code);
  const [isCouponLoading, setIsCouponLoading] = useState(false);

  const handleRemoveCoupon = async () => {
    if (couponDetail?.code) {
      setIsCouponLoading(true);
      await removeCoupon();
    }
    setIsCouponLoading(false);
    setCouponCode("");
  };

  const handleApplyCoupon = async () => {
    setIsCouponLoading(true);
    try {
      await getCouponValue(couponCode);
    } catch (error) {}
    setIsCouponLoading(false);
  };
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
            <AnimatePresence>
              {isCartLoading ? (
                isCartLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="col-span-full flex justify-center items-center h-96"
                  >
                    <h1 className="text-3xl font-satoshi-regular">
                      Loading...
                    </h1>
                  </motion.div>
                )
              ) : !isCartLoading && cart.length > 0 ? (
                <>
                  <div className="col-span-2">
                    {cart.map((item, index) => (
                      <CartCard
                        key={index}
                        data={item}
                        handleIncrement={() =>
                          updateCart(item?.product?._id, 1)
                        }
                        handleDecrement={() =>
                          updateCart(item?.product?._id, -1)
                        }
                      />
                    ))}
                  </div>
                  <div className="flex flex-col gap-5">
                    {/* Coupon */}
                    {isLoggedIn && (
                      <div className="flex flex-col gap-1">
                        <p className="text-sm">
                          Apply{" "}
                          <span className="font-bold">UAMOREFIRST - </span>
                          To Get <b>5% OFF</b> on your First Order
                        </p>
                        <div className="flex gap-2 w-full ">
                          <input
                            type="text"
                            name="coupon"
                            value={couponCode ?? couponDetail?.code}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className="w-full border-2 focus:border-black outline-none px-3 py-3 uppercase disabled:bg-zinc-200"
                            placeholder="Discount Code"
                            disabled={couponDetail?.code}
                          />

                          {couponDetail?.code ? (
                            <button
                              onClick={handleRemoveCoupon}
                              className="max-w-32 w-full p-4  font-satoshi-medium text-center transition-all ease-in-out bg-charcoalBlack text-white hover:bg-black"
                              disabled={isCouponLoading}
                            >
                              {isCouponLoading ? "Loading..." : "Remove"}
                            </button>
                          ) : (
                            <button
                              onClick={handleApplyCoupon}
                              className="max-w-32 w-full  p-4  font-satoshi-medium text-center transition-all ease-in-out bg-charcoalBlack text-white hover:bg-black"
                              disabled={isCouponLoading}
                            >
                              {isCouponLoading ? "Loading..." : "Apply"}
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col gap-3 border-b">
                      <div className="font-semibold flex justify-between">
                        <span className="font-medium text-zinc-500">
                          Subtotal:
                        </span>
                        <span className="text-lg">
                          ₹{isLoggedIn ? subtotal : calculateCartValue}
                        </span>
                      </div>
                      {isLoggedIn && (
                        <div className="font-semibold flex justify-between">
                          <span className="font-medium text-zinc-500">
                            Discount
                          </span>
                          <span className="text-lg text-green-400">
                            - ₹{discount}
                          </span>
                        </div>
                      )}
                      <div className="font-semibold flex justify-between">
                        <span className="font-medium text-zinc-500">GST</span>
                        <span className="text-lg text-zinc-400 line-through">
                          ₹
                          {isLoggedIn
                            ? gst
                            : (calculateCartValue * 0.18).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="font-semibold flex justify-between">
                      <span className="font-medium text-zinc-500">Total</span>
                      <span className="text-lg">
                        ₹{isLoggedIn ? total : calculateCartValue}
                      </span>
                    </div>

                    <button
                      onClick={() => navigate("/checkout")}
                      className="w-full p-4  font-satoshi-medium text-center transition-all ease-in-out bg-charcoalBlack text-white hover:bg-black"
                    >
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
            </AnimatePresence>
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
