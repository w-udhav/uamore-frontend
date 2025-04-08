import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import MainLayout from "../../components/layout/MainLayout";
import PageHeaders from "../../components/ui/PageHeaders";
import axiosInstance from "../../utils/axiosInstance";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
  });

  const [error, setError] = useState(null);
  const [verifyID, setVerifyID] = useState(null);
  const [step, setStep] = useState(1); // Step 1: Request OTP, Step 2: Verify OTP
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const phoneWithoutCountryCode = value.replace(/^\+91|^0/, "");
      setFormData((prev) => ({ ...prev, [name]: phoneWithoutCountryCode }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step 1: Request OTP
  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/account/verify", {
        phone: formData.phone.replace("+91", ""), // Send phone without country code
      });
      setVerifyID(res?.data?.data?.id);
      setStep(2); // Move to OTP verification step
    } catch (error) {
      setError(error?.response?.data?.message);
      console.error("OTP Request Error:", error);
    }
    setLoading(false);
  };

  // Step 2: Verify OTP and Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/account/login", {
        verifyID,
        otp: formData.otp,
        phone: formData.phone.replace("+91", ""),
      });
      login(res?.data?.user); // Log in user after OTP verification
    } catch (error) {
      setError(error?.response?.data?.message);
      console.error("Login Error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => setError(null), 3000);
  }, [error]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4"
    >
      <MainLayout className="mt-24 min-h-svh">
        <PageHeaders
          title={step === 1 ? "Login" : "Enter OTP"}
          subtitle={
            step === 1
              ? "Enter your phone number to receive OTP"
              : "Enter the OTP sent to your phone"
          }
        />
        <div className="flex justify-center items-center max-w-md w-full mx-auto">
          <form
            className="flex flex-col gap-5 mt-20 w-full"
            onSubmit={step === 1 ? handleRequestOTP : handleLogin}
          >
            {/* Step 1: Request OTP */}
            {step === 1 && (
              <div className="flex flex-col gap-2">
                <p className="text-sm">Phone</p>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 focus:border-black outline-none px-3 py-3"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            )}

            {/* Step 2: OTP Verification */}
            {step === 2 && (
              <div className="flex flex-col gap-2">
                <p className="text-sm">OTP</p>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className="w-full border-2 focus:border-black outline-none px-3 py-3"
                  placeholder="Enter OTP"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full p-4 px-6 mt-5 text-center transition-all ease-in-out bg-charcoalBlack text-white hover:bg-black"
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : step === 1
                ? "Send OTP"
                : "Verify OTP"}
            </button>
            <Link to="/register">Don't have an account? Click here.</Link>
            <p className="text-sm text-red-500">{error && error}</p>
          </form>
        </div>
      </MainLayout>
    </motion.div>
  );
}
