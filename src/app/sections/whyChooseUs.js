"use client"
import { Banknote, ShieldCheck, Store, Truck } from "lucide-react";
import { melfira, sansation } from "../fonts/fonts";

export const WhyChoseUs = () => {
  const featuresCards = [
    {
      id: "1",
      icon: <ShieldCheck />,
      heading: "Genuine Products",
      about:
        "Direct sourcing guarantees 100% authentic Nestlé quality for every pallet.",
    },
    {
      id: "2",
      icon: <Banknote />,
      heading: "Wholesale Prices",
      about:
        "Dynamic tiered pricing designed to scale with your business requirements.",
    },
    {
      id: "3",
      icon: <Truck />,
      heading: "Fast Delivery",
      about:
        "Priority logistics network ensures next-day delivery for bulk regional orders",
    },
    {
      id: "4",
      icon: <Store />,
      heading: "Bulk Orders",
      about:
        "Seamlessly manage large-scale replenishment with our custom portal.",
    },
  ];

  return (
    <div className=" pt-20  bg-[#e5e7eb] mx-auto ">
        

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-4 ml-2 mr-2 ">
        {featuresCards.map((item, index) => {
            return (
                <div key={index} className="bg-white px-10 py-10 rounded-3xl">
              <p className="text-[#9e1e20]  bg-red-200 w-max px-4 py-3  rounded-2xl  ">
                {item.icon}
              </p>
              <h1
                className={`text-[#111111]  text-2xl font-bold ${melfira.className} `}
                >
                {item.heading}
              </h1>
              <p className={`${sansation.className}`}>{item.about}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
