import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../../components/layout/MainLayout";
import PageHeaders from "../../components/ui/PageHeaders";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import OrdersTab from "./OrdersTab";
import SettingsTab from "./SettingsTab";
import { useAuth } from "../../contexts/AuthContext";

export default function Account() {
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();

  const tabs = [
    {
      id: 1,
      name: "Your Account",
      path: `/account/user`,
      routeName: "user",
    },
    {
      id: 2,
      name: "Orders History",
      path: `/account/orders`,
      routeName: "orders",
    },
    // {
    //   id: 3,
    //   name: "Settings",
    //   path: `/account/settings`,
    //   routeName: "settings",
    // },
  ];

  if (!isLoggedIn) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MainLayout className="mt-24 min-h-svh">
          <PageHeaders
            title="Account"
            subtitle="Manage your account settings right from here"
          />
          <div className="flex justify-center items-center h-96">
            <h1 className="text-3xl font-satoshi-regular">
              You need to login to view this page
            </h1>
          </div>
        </MainLayout>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainLayout className="mt-24 min-h-svh">
        <PageHeaders
          title="Account"
          subtitle="Manage your account settings right from here"
        />
        <div className="flex flex-col gap-5 w-full mt-10 max-w-screen-lg mx-auto">
          {/* Tabs */}
          <div className="w-full flex justify-between items-center gap-5 border-b">
            <div className="w-full flex justify-start gap-5">
              {tabs.map((tab, index) => {
                let isMatch = location.pathname.includes(tab.routeName);
                return (
                  <Link
                    key={index}
                    to={tab.path}
                    className={
                      "text text-charcoalBlack capitalize pb-3 relative " +
                      (isMatch ? "font-satoshi-medium" : "")
                    }
                  >
                    {tab.name}
                    {isMatch && (
                      <span className="absolute bottom-0 left-0 w-full border-b border-black" />
                    )}
                  </Link>
                );
              })}
            </div>
            <div>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-6 py-2 text-sm hover:bg-red-600 hover:text-white transition-all"
              >
                Logout
              </button>
            </div>
          </div>
          {/* Content Area */}
          <div className="">
            <Routes>
              <Route path="/user" element={<ProfileTab />} />
              <Route path="/orders" element={<OrdersTab />} />
              {/* <Route path="/settings" element={<SettingsTab />} /> */}
            </Routes>
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
