"use client"
import React, { createContext, useContext, useState } from "react";

// Define the cart item type
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Define the context type
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart provider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
