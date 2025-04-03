import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/ui/Footer";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Products from "./pages/Products/Products";
import { useState } from "react";
import AboutUs from "./pages/AboutUs";
import AllBlogs from "./pages/Blogs/AllBlogs";
import SingleBlog from "./pages/Blogs/SingleBlog";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import PolicyPage from "./pages/PolicyPage";
import ContactUs from "./pages/ContactUs";
import SingleBlog2 from "./pages/Blogs/SingleBlog2";

export default function App() {
  return (
    <div className="bg-white text-charcoalBlack font-satoshi-regular">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/blogs/u/:id/:slug" element={<SingleBlog2 />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route
          path="/terms-and-conditions"
          element={<PolicyPage policyKey="termsAndConditions" />}
        />
        <Route
          path="/privacy-policy"
          element={<PolicyPage policyKey="privacyPolicy" />}
        />
        <Route
          path="/refund-policy"
          element={<PolicyPage policyKey="refundPolicy" />}
        />
        <Route
          path="/shipping-policy"
          element={<PolicyPage policyKey="shippingPolicy" />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}
