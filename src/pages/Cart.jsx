import React from "react";
import MainLayout from "../components/layout/MainLayout";

export default function Cart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4"
    >
      <MainLayout className="mt-24 min-h-svh"></MainLayout>
    </motion.div>
  );
}
