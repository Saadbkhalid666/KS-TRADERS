"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@/redux/cartSlice";

export default function CartLoader() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Load cart once
  useEffect(() => {
    const data = localStorage.getItem("cartData");

    if (data) {
      dispatch(setCart(JSON.parse(data)));
    }
  }, [dispatch]);

  // Save whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }, [cartItems]);

  return null;
}