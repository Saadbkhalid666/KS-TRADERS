"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/slice";

export default function CartLoader() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const data = localStorage.getItem("cartData");

    if (data) {
      dispatch(setCart(JSON.parse(data)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }, [cartItems]);

  return null;
}