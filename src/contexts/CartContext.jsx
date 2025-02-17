import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { product } from "../data/data";
import { useAuth } from "./AuthContext";
const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  const addItemToCart = async (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const calculateCartValue = useMemo(() => {
    if (cart.length === 0) return 0;
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

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

  const updateCart = (id, quantity) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
