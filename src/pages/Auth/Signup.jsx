import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import MainLayout from "../../components/layout/MainLayout";
import PageHeaders from "../../components/ui/PageHeaders";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    otp: "",
  });

  const [error, setError] = useState(null);
  const [verifyID, setVerifyID] = useState(null);
  const [step, setStep] = useState(1); // Step 1: Signup, Step 2: Verify, Step 3: Login
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step 1: Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/api/v1/user/new", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });
      setVerifyID(res?.data?._id);
      setStep(2); // Move to Verify User step
    } catch (error) {
      setError(error?.response?.data?.message);
      console.error("Signup Error:", error);
    }
    setLoading(false);
  };

  // Step 2: Verify User (Request OTP)
  const handleVerifyUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/account/verify", {
        phone: formData.phone, // Send phone without country code
      });
      setVerifyID(res?.data?.verifyID); // Save verifyID for OTP submission
      setStep(3); // Move to Login User step
    } catch (error) {
      setError(error?.response?.data?.message);
      console.error("Verification Error:", error);
    }
    setLoading(false);
  };

  // Step 3: Login User (Verify OTP)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/account/login", {
        verifyID,
        otp: formData.otp,
        phone: formData.phone.replace("+91", ""),
      });
      login(res?.data); // Log in user after OTP verification
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
          title={
            step === 1
              ? "Create an Account"
              : step === 2
              ? "Verify Your Phone"
              : "Enter OTP"
          }
          subtitle={
            step === 1
              ? "Sign up to get started"
              : step === 2
              ? "We will send an OTP to verify your phone"
              : "Enter the OTP sent to your phone"
          }
        />
        <div className="flex justify-center items-center max-w-md w-full mx-auto">
          <form
            className="flex flex-col gap-5 mt-20 w-full"
            onSubmit={
              step === 1
                ? handleSignup
                : step === 2
                ? handleVerifyUser
                : handleLogin
            }
          >
            {/* Step 1: Signup Form */}
            {step === 1 && (
              <>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">Name</p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 focus:border-black outline-none px-3 py-3"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">Email</p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 focus:border-black outline-none px-3 py-3"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">Password</p>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border-2 focus:border-black outline-none px-3 py-3"
                    placeholder="Create a password"
                    required
                  />
                </div>
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
              </>
            )}

            {/* Step 2: Verify User */}
            {step === 2 && (
              <div className="flex flex-col gap-2">
                <p className="text-sm">Phone</p>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  disabled
                  className="w-full border-2 focus:border-black outline-none px-3 py-3"
                />
              </div>
            )}

            {/* Step 3: OTP Verification */}
            {step === 3 && (
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
                ? "Sign Up"
                : step === 2
                ? "Send OTP"
                : "Verify OTP"}
            </button>

            <Link to="/login">Already have an account? Click here.</Link>
            <p className="text-sm text-red-500">{error && error}</p>
          </form>
        </div>
      </MainLayout>
    </motion.div>
  );
}
