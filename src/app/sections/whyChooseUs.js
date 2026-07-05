import { Banknote, ShieldCheck, Store, Truck } from "lucide-react";
import { melfira } from "../fonts/fonts";

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
    <div className="mt-66 ">
      <div className="flex flex-row ">
        {featuresCards.map((item, index) => {
          return (
            <div key={index} className="">
              <p className="text-[#e63539]  bg-red-300 w-max px-4 py-3  rounded-2xl  ">
                {item.icon}
              </p>
              <h1 className={`text-[#111111] text-2xl font-bold ${melfira.className} `}>{item.heading}</h1>
              <p>{item.about}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
