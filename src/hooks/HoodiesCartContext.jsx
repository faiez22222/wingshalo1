import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const HoodiesCartContext = createContext();

export const useHoodiesCart = () => {
  return useContext(HoodiesCartContext);
};

export const HoodiesCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    toast("Added to cart!");
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <HoodiesCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children}
    </HoodiesCartContext.Provider>
  );
};
