import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "../../data/data";
import img1 from "../../assets/products/BOX.jpg";
import img2 from "../../assets/products/perfume1.jpg";
import img3 from "../../assets/products/perfume2.jpg";
import axiosInstance from "../../utils/axiosInstance";
import toast from "react-hot-toast";

export default function SingleBlog2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(5);
  const { id } = useParams();
  const navigate = useNavigate();

  const getBlogId = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/api/blogs/" + id);
      setData(res?.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogId();
  }, []);

  useEffect(() => {
    let redirectTimer;
    if (error) {
      redirectTimer = setTimeout(() => {
        if (timer <= 1) {
          navigate("/blogs");
        } else {
          setTimer((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearTimeout(redirectTimer);
  }, [error, timer, navigate]);

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-svh flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout className="">
        <div className="min-h-svh flex items-center justify-center flex-col">
          <p>Blog not found</p>
          <p>Redirecting to the blog list in {timer} seconds... </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainLayout className="mt-24 max-w-screen-md mx-auto">
        {/* Top */}
        <div className="py-8 border-b flex flex-col gap-10 overflow-hidden">
          <div className="max-h-[35rem] h-full overflow-hidden border">
            {data?.image && (
              <img
                src={data.image}
                className="w-full h-full object-cover object-top"
                alt="blog"
              />
            )}
          </div>
          <h2 className="leading-tight">{data?.title}</h2>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 mt-20">
          {data?.subtitles &&
            data.subtitles.length > 0 &&
            data?.subtitles.map((section, index) => {
              return (
                <div key={index} className="flex flex-col gap-5">
                  <h3>{section?.subtitle}</h3>
                  <p>{section?.content}</p>
                  <br />
                </div>
              );
            })}
        </div>
      </MainLayout>
    </motion.div>
  );
}
