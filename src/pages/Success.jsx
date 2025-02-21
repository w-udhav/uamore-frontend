import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import { motion } from "framer-motion";
import Icon from "../components/ui/Icon";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainLayout>
        <div className="min-h-svh max-w-xl mx-auto flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-satoshi-regular">
              Order successfull
              <Icon name="verified" className="text-4xl" />
            </h1>
            <Link
              to="/"
              className="max-w-max underline underline-offset-4 text-sm mt-5"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
