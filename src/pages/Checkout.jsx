import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import PageHeaders from "../components/ui/PageHeaders";
import axiosInstance from "../utils/axiosInstance";
import logo from "../assets/logos/logo_black.png";

export default function Checkout() {
  const { cart, calculateCartValue, cartReciept } = useCart();
  const { subtotal, total, couponDiscount: discount, gst } = cartReciept();

  const { isLoggedIn, user, getDetails, addAddress } = useAuth();

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",

    receiverName: user?.addresses[0]?.receiverName ?? "",
    addressLine1: user?.addresses[0]?.addressLine1 ?? "",
    addressLine2: user?.addresses[0]?.addressLine2 ?? "",
    city: user?.addresses[0]?.city ?? "",
    state: user?.addresses[0]?.state ?? "",
    addressType: user?.addresses[0]?.addressType ?? "",
    pincode: user?.addresses[0]?.pincode ?? "",
    country: user?.addresses[0]?.country ?? "",
  });
  let flag = true;
  const handleAddress = async () => {
    const address = {
      receiverName: userDetails.receiverName,
      addressLine1: userDetails.addressLine1,
      addressLine2: userDetails.addressLine2,
      city: userDetails.city,
      state: userDetails.state,
      addressType: userDetails.addressType,
      pincode: userDetails.pincode,
      country: userDetails.country,
    };

    if (flag) {
      try {
        const res = await addAddress(address);
        if (res.status === 200) {
          console.log("success");
        }
        flag = false;
      } catch (error) {}
    }
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlaceOrder = async () => {
    if (
      !userDetails.name ||
      !userDetails.email ||
      !userDetails.phone ||
      !userDetails.addressLine1 ||
      !userDetails.addressLine2 ||
      !userDetails.addressType ||
      !userDetails.city ||
      !userDetails.country ||
      !userDetails.state
    ) {
      alert("Please fill all details");
      return;
    }

    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    // Call backend to create an order
    let orderData;

    if (isLoggedIn) {
      orderData = await axiosInstance.post("/api/v1/order", {
        Address: {
          receiverName: userDetails.receiverName,
          addressLine1: userDetails.addressLine1,
          addressLine2: userDetails.addressLine2,
          city: userDetails.city,
          state: userDetails.state,
          addressType: userDetails.addressType,
          pincode: userDetails.pincode,
          country: userDetails.country,
        },
      });
    } else {
      let cartItems = [];
      cartItems.map((item) => {
        cartItems.push({
          product: {
            id: item._id,
            name: item.name,
            title: item.title,
            subtitle: item.subtitle,
            price: item.price,
          },
          quantity: item.quantity,
        });
      });
      orderData = await axiosInstance.post("/api/v1/order-guest", {
        Address: {
          receiverName: userDetails.receiverName,
          addressLine1: userDetails.addressLine1,
          addressLine2: userDetails.addressLine2,
          city: userDetails.city,
          state: userDetails.state,
          addressType: userDetails.addressType,
          pincode: userDetails.pincode,
          country: userDetails.country,
        },
        phone: userDetails?.phone,
        cartItems: cartItems,
        name: userDetails?.name,
        email: userDetails?.email,
      });
    }

    const options = {
      key: "rzp_test_IfN2wjYveyC6WC",
      KeySecret: "aIq3n5XdfbKxzgHNEatBt8bc",
      amount: orderData?.data?.totalPrice * 100,
      currency: "INR",
      name: userDetails.name,
      description: "UAmore transaction",
      image: { logo },
      order_id: orderData?.data?.paymentInfo?.gatewayOrderId,
      handler: async function (response) {
        const data = {
          orderCreationId: orderData?.data?.paymentInfo?.gatewayOrderId,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log(response);

        const result = await axiosInstance.post(
          "/api/v1/verify-purchase",
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      notes: {
        address: "UAmore",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <MainLayout className="mt-24 ">
      <PageHeaders title="Checkout" subtitle="Your final stop" />
      <div className="min-h-svh py-10 max-w-2xl mx-auto flex flex-col gap-10">
        {/* User Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Your Details</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
            className="w-full border-2 px-3 py-2 my-2 h-11"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            className="w-full border-2 px-3 py-2 my-2 h-11"
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={userDetails.phone}
            onChange={(e) =>
              setUserDetails({ ...userDetails, phone: e.target.value })
            }
            className="w-full border-2 px-3 py-2 my-2 h-11"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Delivery Address</h2>
          <div className="grid grid-cols-2 gap-x-2">
            <input
              type="text"
              placeholder="Receiver Name"
              value={userDetails.receiverName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, receiverName: e.target.value })
              }
              className="w-full border-2 px-3 py-2 my-2 h-11"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              value={userDetails.addressLine1}
              onChange={(e) =>
                setUserDetails({ ...userDetails, addressLine1: e.target.value })
              }
              className="w-full border-2 px-3 py-2 my-2 h-11"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              value={userDetails.addressLine2}
              onChange={(e) =>
                setUserDetails({ ...userDetails, addressLine2: e.target.value })
              }
              className="w-full border-2 px-3 py-2 my-2 h-11"
            />
            <input
              type="text"
              placeholder="City"
              value={userDetails.city}
              onChange={(e) =>
                setUserDetails({ ...userDetails, city: e.target.value })
              }
              className="w-full border-2 px-3 py-2 my-2 h-11"
            />
            <input
              type="text"
              placeholder="State"
              value={userDetails.state}
              onChange={(e) =>
                setUserDetails({ ...userDetails, state: e.target.value })
              }
              className="w-full border-2 px-3 py-2 my-2 h-11"
            />
            <input
              type="number"
              placeholder="Pincode"
              value={userDetails.pincode}
              onChange={(e) =>
                setUserDetails({ ...userDetails, pincode: e.target.value })
              }
              className="w-full border-2 px-3 py-2 my-2 h-11"
            />
            <input
              type="text"
              placeholder="Country"
              value={userDetails.country}
              onChange={(e) =>
                setUserDetails({ ...userDetails, country: e.target.value })
              }
              className="w-full border-2 px-3 py-2 my-2 h-11"
            />
            <select
              value={userDetails.addressType}
              onChange={(e) => {
                setUserDetails({ ...userDetails, addressType: e.target.value });
              }}
              className="w-full border-2 px-3 py-2 my-2 h-11"
            >
              <option value="">Address Type</option>
              <option value="HOME">Home</option>
              <option value="WORK">Work</option>
            </select>
          </div>

          {isLoggedIn && (
            <div>
              <button
                onClick={handleAddress}
                className="bg-zinc-100 px-6 py-2 text-sm hover:bg-charcoalBlack hover:text-white transition-all"
              >
                Add
              </button>
            </div>
          )}
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="flex flex-col gap-3 border-b py-2">
            <div className="font-semibold flex justify-between">
              <span className="font-medium text-zinc-500">Subtotal:</span>
              <span className="text-lg">
                ₹{isLoggedIn ? subtotal : calculateCartValue}
              </span>
            </div>
            {isLoggedIn && (
              <div className="font-semibold flex justify-between">
                <span className="font-medium text-zinc-500">Discount</span>
                <span className="text-lg text-green-400">- ₹{discount}</span>
              </div>
            )}
            <div className="font-semibold flex justify-between">
              <span className="font-medium text-zinc-500">GST</span>
              <span className="text-lg text-zinc-400 line-through">
                ₹{isLoggedIn ? gst : calculateCartValue * 0.18}
              </span>
            </div>
          </div>
          <div className="font-semibold flex justify-between pt-2">
            <span className="font-medium text-zinc-500">Total</span>
            <span className="text-lg">
              ₹{isLoggedIn ? total : calculateCartValue}
            </span>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          className="w-full p-4 bg-charcoalBlack text-white hover:bg-black"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </MainLayout>
  );
}
