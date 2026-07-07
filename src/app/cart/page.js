"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

export default function Page() {
  // Replace this with Redux later
  const cartItems = [
    {
      id: 1,
      name: "Nestlé Pure Life 500ml",
      price: 60,
      quantity: 5,
      image: "/products/500ml.png",
    },
    {
      id: 2,
      name: "Nestlé Pure Life 1.5L",
      price: 120,
      quantity: 2,
      image: "/products/1.5l.png",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const delivery = 200;
  const total = subtotal + delivery;

  return (
    <section className="min-h-screen bg-[#f8f8f8] py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#e63539]">
            Home
          </Link>

          <span>/</span>

          <span className="text-[#e63539] font-semibold">Shopping Cart</span>
        </div>

        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-[#e63539] flex items-center justify-center">
            <ShoppingBag className="text-white" size={28} />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-black">Shopping Cart</h1>

            <p className="text-gray-500 mt-1">
              {cartItems.length} Products in your cart
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="w-full md:w-44 h-44 bg-gray-100 rounded-2xl flex justify-center items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-black">
                        {item.name}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        Premium wholesale drinking water.
                      </p>

                      <h3 className="text-3xl font-bold text-[#e63539] mt-5">
                        Rs. {item.price}
                      </h3>
                    </div>

                    <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
                      {/* Quantity */}

                      <div className="flex border rounded-xl overflow-hidden">
                        <button className="p-3 hover:bg-gray-100">
                          <Minus size={18} />
                        </button>

                        <span className="px-6 flex items-center font-bold">
                          {item.quantity}
                        </span>

                        <button className="p-3 hover:bg-gray-100">
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* Remove */}

                      <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium">
                        <Trash2 size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}

            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 mt-6 font-semibold text-[#e63539] hover:underline"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </div>

          {/* RIGHT */}

          <div>
            <div className="bg-white rounded-3xl border border-gray-200 p-8 sticky top-28 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>

                  <span className="font-semibold">Rs. {subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Delivery</span>

                  <span className="font-semibold">Rs. {delivery}</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl">
                  <span className="font-bold">Total</span>

                  <span className="font-bold text-[#e63539]">Rs. {total}</span>
                </div>
              </div>
              <Link href={"/checkout"}>
                <button className="w-full mt-10 bg-[#e63539] hover:bg-red-700 transition text-white py-4 rounded-xl text-lg font-semibold">
                  Proceed to Checkout
                </button>
              </Link>

              <button className="w-full mt-4 border-2 border-black hover:bg-black hover:text-white transition py-4 rounded-xl font-semibold">
                Clear Cart
              </button>

              <div className="mt-8 bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-black">Delivery</h3>

                <p className="text-gray-500 mt-2 text-sm leading-7">
                  We currently deliver only within Lahore. Delivery charges may
                  vary depending on your location and order quantity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
