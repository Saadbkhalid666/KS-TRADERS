"use client";
import Image from "next/image";
import halflitre from "../assets/0.5l.jpg";
import oneAndHalfLitre from "../assets/1.5l.jpg";
import fiveLitre from "../assets/5l.jpg";
import { useState } from "react";
import Link from "next/link";

export const Products = () => {
  const initialProducts = [
    {
      id: 1,
      heading: "500ml Everyday Case",
      about:
        "The standard for convenience. Perfect for guest rooms, retail counters, and corporate events.",
      unitsLabel: "24 Units / Case",
      oldPrice: "900rs",
      price: "700rs",
      badge: "Most Popular",
      badgeStyle: "bg-red-600 text-white",
      defaultQty: 10,
      img: halflitre,
    },
    {
      id: 2,
      heading: "1.5L High Capacity",
      about:
        "Designed for active hydration. Ideal for gymnasiums, sports facilities, and site canteens.",
      unitsLabel: "12 Units / Case",
      oldPrice: "720rs",
      price: "560rs",
      badge: null,
      badgeStyle: "",
      defaultQty: 5,
      img: oneAndHalfLitre,
    },
    {
      id: 3,
      heading: "5L Bulk Jug",
      about:
        "Maximum efficiency for bulk use. Best for hospitality kitchens and industrial water stations.",
      unitsLabel: "4 Units / Case",
      oldPrice: "480rs",
      price: "350rs",
      badge: "Best Value",
      badgeStyle: "bg-gray-900 text-white",
      defaultQty: 20,
      img: fiveLitre,
    },
  ];

  const [quantities, setQuantities] = useState(
    initialProducts.reduce(
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
        {initialProducts.map((item) => {
          const qty = quantities[item.id];

          return (
            <div
              key={item.id}
              className="cursor-target bg-white border-2 border-gray-400 rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
<Link href={"/catalog"}>
                <button className="cursor-target w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-all active:scale-95">
                  Add to Cart
                </button>
</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};