import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { product } from "../data/data";
import { useAuth } from "./AuthContext";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";
const CartContext = createContext();

export function CartProvider({ children }) {
  const { user, isLoggedIn } = useAuth();
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [isCartLoading, setIsCartLoading] = useState(isLoggedIn ? true : false);
  const [couponDetail, setCouponDetail] = useState();
  const fetchCart = async () => {
    if (isLoggedIn) {
      // setIsCartLoading(true);
      try {
        const res = await axiosInstance.get("/api/v1/my-cart");
        if (res?.data?.data && res?.data?.data.length === 0) return;
        setCart(res?.data?.data?.items);
        setSubtotal(res?.data?.data?.subtotal);
        setTotal(res?.data?.data?.total);
        setCouponDiscount(res?.data?.data?.discountAmount);
        setCouponDetail(res?.data?.data?.coupon);
      } catch (error) {
        console.log("Cart err");
      } finally {
        setIsCartLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchCart();
  }, [isLoggedIn]);

  const addItemToCart = async (item) => {
    if (isLoggedIn && item) {
      try {
        const res = await axiosInstance.post("/api/v1/cart/add", {
          productId: item?._id,
          count: 1,
        });
        if (res.status !== 200) return;
        await fetchCart();
        return;
      } catch (error) {
        toast.error("Something went wrong");
      }
    }

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItemIndex !== -1) {
        return prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const calculateCartValue = useMemo(() => {
    if (!cart.length) return 0;
    return isLoggedIn
      ? total
      : cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart, total]);

  const cartReciept = () => {
    let gst = (subtotal * 0.18).toFixed(2);
    return { subtotal, couponDiscount, total, gst };
  };

  const getCouponValue = async (code) => {
    try {
      await axiosInstance.post("/api/v1/coupon/verify", {
        coupon: code,
      });
      await fetchCart();
    } catch (error) {
      console.log("Invalid");
      toast.error(error.message);
    }
  };

  const removeCoupon = async () => {
    try {
      await axiosInstance.post("/api/v1/coupon/remove", {
        coupon: couponDetail?.code,
      });
      await fetchCart();
    } catch (error) {
      console.log("Not done");
    }
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = () => {
    let total = 0;
    if (cart.length > 0) {
      cart.map((item) => (total += item?.quantity));
    }

    return total;
  };

  const updateCart = async (id, quantity) => {
    if (isLoggedIn) {
      const res = await axiosInstance.post("/api/v1/cart/change", {
        productId: id,
        flag: quantity === 1 ? 1 : 0,
      });
      if (res.status !== 200) return;
      await fetchCart();
    }

    const updatedCart = cart
      .map((item) => {
        if (item?.product?._id === id) {
          const newQuantity = item.quantity + quantity;
          if (newQuantity > 0) {
            return { ...item, quantity: newQuantity };
          }
          return null;
        }
        return item;
      })
      .filter((item) => item !== null);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        calculateCartValue,
        updateCart,
        removeItemFromCart,
        clearCart,
        cartTotal,
        cartReciept,
        isCartLoading,
        getCouponValue,
        couponDiscount,
        couponDetail,
        removeCoupon,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
