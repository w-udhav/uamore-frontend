import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { blogs } from "../../data/data";
import img1 from "../../assets/products/BOX.jpg";
import img2 from "../../assets/products/perfume1.jpg";
import img3 from "../../assets/products/perfume2.jpg";

export default function SingleBlog() {
  const { id } = useParams();
  const img = [img1, img2, img3];
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
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
            <img
              src={img[id - 1]}
              className="w-full h-full object-cover object-top"
              alt="blog"
            />
          </div>
          <h2 className="leading-tight">{blog.title}</h2>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 mt-20">
          {blog.content.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </div>
      </MainLayout>
    </motion.div>
  );
}
