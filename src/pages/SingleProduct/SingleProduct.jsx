import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { single_product_display } from "../../components/ui/imageURL";
import CTAButton from "../../components/ui/CTAButton";
import Slider from "react-slick";
import img1 from "../../assets/singleProduct/image1.jpg";
import img2 from "../../assets/singleProduct/image2.jpg";
import img3 from "../../assets/singleProduct/image3.jpg";
import mainImg from "../../assets/singleProduct/main.jpg";

import { product } from "../../data/data";

import { useCart } from "../../contexts/CartContext";
import Icon from "../../components/ui/Icon";
import axiosInstance from "../../utils/axiosInstance";
import { useParams } from "react-router-dom";
import Logo from "../../components/ui/Logo";
import { useAuth } from "../../contexts/AuthContext";

const tabs = ["description", "ingredients", "how to use"];

export default function SingleProduct() {
  // const [data, setData] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedTab, setSelectedTab] = useState("description");
  const [selectedTabContent, setSelectedTabContent] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItem, setCartItem] = useState([]);

  const { cart, addItemToCart, updateCart } = useCart();
  const { isLoggedIn } = useAuth();

  const handleAddToCart = () => {
    addItemToCart(data);
  };

  const handleIncrement = () => {
    const totalQuantity = data?.inventory[0]?.items;
    if (cartItem?.quantity === totalQuantity) {
      setError("Maximum quantity reached");
      return;
    }
    updateCart(cartItem?.product?._id, 1);
  };
  const handleDecrement = () => {
    updateCart(cartItem?.product?._id, -1);
  };

  useEffect(() => {
    setTimeout(() => setError(null), 10000);
  }, [error]);

  const handleTabSelection = (tab) => {
    if (tab === selectedTab) return;
    if (tabs.includes(tab)) setSelectedTab(tab);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const productImages = [img1, img2, img3, mainImg];

  const { id } = useParams();

  const fetch = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/products");
      let x = res?.data?.data;
      let prod = x.filter((item) => item?._id === id);
      setData(prod[0]);
      setSelectedSize(
        prod[0]?.inventory.length > 0 && prod[0]?.inventory[0]?.size
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      setCartItem(cart.find((item) => item?.product?._id === data?._id));
    } else {
      setCartItem(cart.find((item) => item?._id === data?._id));
    }
    fetch();
  }, [cart]);

  console.log(cartItem);

  if (loading) {
    return (
      <div className="min-h-svh flex justify-center items-center">
        <Logo width="w-52" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full grid grid-cols-1 lg:grid-cols-10"
    >
      <div className="col-span-6 ">
        <div className="hidden lg:grid grid-cols-2 gap-1">
          <img src={img1} className="col-span-2" alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={mainImg} alt="" />
        </div>

        <div className="lg:hidden max-w-screen-xl w-full h-[70vh] md:h-svh overflow-hidden ">
          <Slider {...sliderSettings}>
            {productImages.map((image, index) => (
              <div
                className="w-full md:max-h-[95svh] md:min-h-[95svh] max-h-[65vh] min-h-[65vh] h-full overflow-hidden relative"
                key={index}
              >
                <div className="absolute top-0 left-0 right-0 bottom-0">
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt="uamore"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="col-span-full lg:col-span-4 py-10 lg:py-32 flex justify-center">
        <div className=" px-5 max-w-2xl w-full">
          <div className="w-full flex flex-col items-start md:items-center md:text-center gap-16">
            {/* Header */}
            <div className="flex flex-col gap-5">
              <h3 className="">{product.title}</h3>
              <p className="text-charcoalBlack/60 text-sm font-satoshi-medium">
                {product.subtitle}
              </p>
            </div>
            <div />
            {/* Size */}
            {/* <div className="flex gap-5 items-start md:items-center">
              <p className="text-charcoalBlack/60 text-sm font-satoshi-medium">
                Select option:
              </p>
              <div className="flex gap-2">
                {data &&
                  data?.inventory.map((item) => (
                    <button
                      className={`max-w-32 rounded-md px-3 py-2 border  text-sm font-satoshi-bold text-charcoalBlack/80 ${
                        selectedSize === item.size
                          ? "border-charcoalBlack/60 bg-charcoalBlack/10"
                          : "border-charcoalBlack/50"
                      }`}
                      onClick={() => setSelectedSize(item.size)}
                    >
                      {item.size}
                    </button>
                  ))}
              </div>
            </div> */}

            {/* Buy */}
            {/* <button className="w-full  p-4 px-6  font-satoshi-medium text-center transition-all ease-in-out bg-charcoalBlack text-white hover:bg-black">
              Add to Bag
            </button> */}
            <div className="w-full">
              {cartItem ? (
                <div className="flex items-center gap-4 border w-full ">
                  <button
                    onClick={handleDecrement}
                    className="hover:bg-charcoalBlack hover:text-white flex items-center justify-center"
                  >
                    <Icon name="remove" className=" w-full text-xl  p-4 px-6" />
                  </button>
                  <div className="font-semibold flex-1 flex justify-center">
                    {cartItem?.quantity}
                  </div>
                  <button
                    onClick={handleIncrement}
                    className="hover:bg-charcoalBlack hover:text-white flex items-center justify-center"
                  >
                    <Icon name="add" className="text-xl  p-4 px-6" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="w-full  p-4 px-6  font-satoshi-medium text-center transition-all ease-in-out bg-charcoalBlack text-white hover:bg-black"
                >
                  Add to Bag
                </button>
              )}
              <p className="text-sm text-red-500">{error && error}</p>
            </div>

            {/* Extra */}
            <div className="flex flex-col gap-5 w-full">
              {/* Tabs */}
              <div className="w-full flex justify-start gap-5 border-b">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`text-sm text-charcoalBlack capitalize pb-3 relative ${
                      selectedTab === tab ? "" : ""
                    }`}
                    onClick={() => handleTabSelection(tab)}
                  >
                    {tab}
                    {tab === selectedTab && (
                      <span className="absolute bottom-0 left-0 w-full border-b border-black" />
                    )}
                  </button>
                ))}
              </div>
              {/* Content Area */}
              <div className="">
                <div className="text-left text-lg">
                  {selectedTab === "description" && (
                    <div
                      dangerouslySetInnerHTML={{ __html: product?.about?.desc }}
                    />
                  )}

                  {selectedTab === "ingredients" && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product?.about?.ingredients,
                      }}
                    />
                  )}
                  {selectedTab === "how to use" && (
                    <div
                      className="flex flex-col gap-3 leading-snug"
                      dangerouslySetInnerHTML={{
                        __html: product?.about?.howToUse,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
