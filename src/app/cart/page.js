"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/slice";

export default function Page() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  console.log(cartItems);

 const subtotal = cartItems.reduce((total, item) => {
  return total + Number(item.price) * Number(item.quantity);
}, 0);

const delivery = 200;
const totalPrice = subtotal + delivery;
  if (cartItems.length === 0) {
    return (
      <div className="mt-24 text-center">
        <h1 className="text-4xl font-bold">Cart is Empty</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8f8f8] py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 mb-8">
          <Link href="/">Home</Link>
          <span>/</span>
          <span className="text-[#e63539] font-semibold">
            Shopping Cart
          </span>
        </div>

        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-[#e63539] flex justify-center items-center">
            <ShoppingBag className="text-white" size={28} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">Shopping Cart</h1>

            <p className="text-gray-500">
              {cartItems.length} Products in your cart
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6 ">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl cursor-target p-6 border shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-44 h-44 bg-gray-100 rounded-2xl flex justify-center items-center">
                    <Image
                      src={item.img}
                      alt={item.heading}
                      width={120}
                      height={120}
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {item.heading}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        Premium wholesale drinking water.
                      </p>

                      <h3 className="text-3xl font-bold text-[#e63539] mt-5">
                        Rs. {item.price}
                      </h3>
                    </div>

                    <div className="flex justify-between flex-wrap gap-4 mt-8">
                      <div className="flex border rounded-xl overflow-hidden">
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity(item.id))
                          }
                          className="p-3 cursor-target"
                        >
                          <Minus size={18} />
                        </button>

                        <span className="px-6 flex items-center font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            dispatch(increaseQuantity(item.id))
                          }
                          className="p-3 cursor-target"
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          dispatch(removeFromCart(item.id))
                        }
                        className="flex items-center gap-2 text-red-600 cursor-target"
                      >
                        <Trash2 size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 mt-6 text-[#e63539] font-semibold"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </div>

          {/* RIGHT */}
          <div>
            <div className="bg-white rounded-3xl border p-8 sticky top-28 shadow-sm cursor-target">
              <h2 className="text-2xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>Rs. {delivery}</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#e63539]">
                    Rs. {totalPrice}
                  </span>
                </div>
              </div>

              <Link href="/checkout">
                <button className="cursor-target w-full mt-10 bg-[#e63539] text-white py-4 rounded-xl">
                  Proceed to Checkout
                </button>
              </Link>

              <button
                onClick={() => dispatch(clearCart())}
                className="w-full mt-4 border-2 cursor-target border-black py-4 rounded-xl"
              >
                Clear Cart
              </button>

              <div className="mt-8 bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold">Delivery</h3>

                <p className="text-gray-500 mt-2 text-sm">
                  We currently deliver only within Lahore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}