"use client"
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice";
import { Products } from "../data/products";

export default function Page(){

  const dispatch = useDispatch()

  

  const [quantities, setQuantities] = useState(
    Products.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.defaultQty }),
      {}
    )
  );

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta),
    }));
  };

  return (
    <div className="pt-20 pb-20   bg-gray-100">
      <div className="text-center mb-16 px-6">
        <h1 className="font-bold font-serif text-3xl text-gray-700">
          Choose Your Solution
        </h1>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Optimized formats for retail, corporate offices, and heavy-duty
          industrial needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {Products.map((item) => {
          const qty = quantities[item.id];

          return (
            <div
              key={item.id}
              className="cursor-target bg-white border-2 border-gray-400 rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  className="  group-hover:scale-105 hover:-translate-y-20 hover:rotate-45 transition-transform duration-500"
                  src={item.img}
                  alt={item.heading}
                />
                {item.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${item.badgeStyle} text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider`}
                    >
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.heading}
                  </h3>
                  <span className="text-sm text-red-600 font-bold whitespace-nowrap ml-2">
                    {item.unitsLabel}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 flex-1">{item.about}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="cursor-target px-3 py-1 bg-gray-50 hover:bg-gray-200 transition-colors font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300 font-bold">
                      {qty}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="cursor-target px-3 py-1 bg-gray-50 hover:bg-gray-200 transition-colors font-bold"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex-1 text-right">
                    <span className="block text-xs text-gray-400 line-through">
                      {item.oldPrice}
                    </span>
                    <span className="text-xl font-bold text-gray-900">
                      {item.price}{" "}
                      <span className="text-sm font-normal text-gray-500">
                        / case
                      </span>
                    </span>
                  </div>
                </div>

                <button onClick={()=> {
                  console.log(item)
                  dispatch(addToCart({...item, quantity: qty}))}} className="cursor-target w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-all active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
};
