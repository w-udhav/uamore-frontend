import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "../../components/layout/MainLayout";
import BlogDisplayCard from "./components/BlogDisplayCard";
import { blogs } from "../../data/data";
import axiosInstance from "../../utils/axiosInstance";
import { LoaderIcon } from "react-hot-toast";
import BlogDisplayCard2 from "./components/BlogDisplayCard2";

export default function AllBlogs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get("/api/blogs"); // Replace with your API endpoint
      setData(response?.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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
          <div className="w-full flex flex-col gap-2 items-center border-b py-8">
            <h3 className="text-2xl font-medium font-playfair-display">
              Scent Journal
            </h3>
            <span className="text-center max-w-lg text-charcoalBlack/80">
              A collection of scent stories to enrich your olfactory life.
              Written by fragrance creators, for the curious noses.
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-14 gap-y-12 mt-16">
            {loading ? (
              <div className="w-full h-full col-span-full">
                <p className="text-center text-lg font-medium text-charcoalBlack/80">
                  Loading blogs...
                </p>
              </div>
            ) : (
              <>
                {data.length !== 0 &&
                  data.map((blog) => (
                    <BlogDisplayCard2 key={blog._id} data={blog} />
                  ))}
                {blogs &&
                  blogs.map((blog) => (
                    <BlogDisplayCard key={blog.id} data={blog} />
                  ))}
              </>
            )}
          </div>
        </div>
      </MainLayout>
    </motion.div>
  );
}
