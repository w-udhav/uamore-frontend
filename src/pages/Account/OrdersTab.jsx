import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import toast from "react-hot-toast";
import img from "../../assets/products/BOX.jpg";
import { AnimatePresence, motion } from "framer-motion";

export default function OrdersTab() {
  const [data, setData] = useState([]);
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleShowDetails = () => {
    setIsShowDetails(!isShowDetails);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.get("/api/v1/orders/user");
      if (res?.data?.data) {
        setData(res?.data?.data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="w-full flex justify-center items-center py-20">
        Loading...
      </div>
    );

  return (
    <div className="w-full flex flex-col gap-2">
      <AnimatePresence>
        {data && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={index}
                className="w-full border border-zinc-200"
              >
                <div className="bg-zinc-50 p-3 border-b border-zinc-100 flex justify-between items-center">
                  <div className="flex gap-5">
                    <div>
                      <p className="text-[13px] leading-relaxed font-semibold text-zinc-500">
                        ORDER PLACED AT
                      </p>
                      <p className="text-sm">
                        {item?.createdAt &&
                          new Date(item?.createdAt)
                            .toISOString()
                            .replace("T", " ")
                            .split(".")[0]}
                      </p>
                    </div>
                    {/* <div>
                    <p className="text-[13px] leading-relaxed font-semibold text-zinc-500">
                      ORDER TOTAL
                    </p>
                    <p className="text-sm">{item?.totalPrice || "Nil"}</p>
                  </div> */}
                  </div>
                  <div>
                    <button onClick={handleShowDetails}>
                      {isShowDetails ? "Show Less" : "Show More"}
                    </button>
                  </div>
                </div>
                {item?.products &&
                  item.products.map((prod, index) => (
                    <div key={prod.itemId} className="py-1">
                      <div className="flex items-start gap-4 p-3">
                        <div className="w-52 h-32 bg-zinc-50 rounded-md">
                          <img
                            src={img}
                            alt="perfume"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <div className="text-zinc-800 font-medium">
                            {prod.title || "Name"}
                          </div>
                          <div className="text-sm text-gray-500">
                            {prod.subtitle || "subtitle"}
                          </div>
                          <div className="text-sm text-gray-500 font-medium">
                            Qty: {prod.quantity || "subtitle"}
                          </div>
                          <div className="flex justify-between w-full">
                            <div>
                              <div className="text-xl font-medium">
                                ₹{prod.price || "price"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                {isShowDetails && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3 overflow-hidden">
                    <div>
                      <h5>Delivery Address</h5>
                      <div className="flex flex-col">
                        {item?.deliveryAddress && (
                          <>
                            <span>{item?.deliveryAddress?.receiverName}</span>
                            <span>{item?.deliveryAddress?.addressLine1}</span>
                            <span>{item?.deliveryAddress?.addressLine2}</span>
                            <span>
                              {item?.deliveryAddress?.city},{" "}
                              {item?.deliveryAddress?.pincode}
                            </span>
                            <span>
                              {item?.deliveryAddress?.state},{" "}
                              {item?.deliveryAddress?.country}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <h5>Payment Information</h5>
                      <div className="grid grid-cols-2">
                        {item?.paymentInfo && (
                          <>
                            <span className=" text-zinc-600 font-satoshi-medium">
                              Currency:{" "}
                            </span>
                            <span>{item?.paymentInfo?.currency}</span>
                            <span className=" text-zinc-600 font-satoshi-medium">
                              Amount Paid:{" "}
                            </span>
                            <span>{item?.paymentInfo?.amountPaid}</span>
                            <span className=" text-zinc-600 font-satoshi-medium">
                              Method:{" "}
                            </span>
                            <span className="uppercase">
                              {item?.paymentInfo?.method}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })
        ) : (
          <p>NO Order Found</p>
        )}
      </AnimatePresence>
    </div>
  );
}
