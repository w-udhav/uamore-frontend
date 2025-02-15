import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import PageHeaders from "../components/ui/PageHeaders";

export default function Checkout() {
  const { cart, calculateCartValue } = useCart();
  const { user } = useAuth();

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: user?.name,
    email: user?.email,
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

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
    if (!userDetails.name || !userDetails.email || !userDetails.addressLine1) {
      alert("Please fill all details");
      return;
    }

    if (!paymentMethod) {
      alert("Select a payment method");
      return;
    }

    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    // Call backend to create an order
    const orderData = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: calculateCartValue() * 100, // Razorpay expects amount in paise
        currency: "INR",
        receipt: `receipt_${Math.random()}`,
      }),
    }).then((res) => res.json());

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: orderData.amount,
      currency: orderData.currency,
      name: "UAmore",
      description: "Order Payment",
      image: "../assets/logos/logo_black.png",
      order_id: orderData.id,
      handler: async function (response) {
        alert("Payment Successful");
        navigate("/success");
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phoneNumber,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <MainLayout className="mt-24 ">
      <PageHeaders title="Checkout" subtitle="Your final stop" />
      <div className="min-h-svh py-10 max-w-xl mx-auto">
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
            className="w-full border-2 px-3 py-2 my-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            className="w-full border-2 px-3 py-2 my-2"
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            className="w-full border-2 px-3 py-2 my-2"
          />
        </div>

        {/* Address */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Delivery Address</h2>
          <input
            type="text"
            placeholder="Address Line 1"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
            className="w-full border-2 px-3 py-2 my-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            className="w-full border-2 px-3 py-2 my-2"
          />
          <input
            type="text"
            placeholder="Delivery Address"
            value={userDetails.address}
            onChange={(e) =>
              setUserDetails({ ...userDetails, address: e.target.value })
            }
            className="w-full border-2 px-3 py-2 my-2"
          />
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Select Payment Method</h2>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border-2 px-3 py-2 my-2"
          >
            <option value="">Choose</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="paypal">PayPal</option>
          </select>
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
