"use client"
import Image from "next/image";
import halflitre from "../assets/0.5l.jpg";
import oneAndHalfLitre from "../assets/1.5l.jpg";
import fiveLitre from "../assets/5l.jpg";
import { useState } from "react";
export const Products = () => {

const [quantity, setQuantity] = useState("1")

  const products = [
    {
      heading: "500ml Everyday Case",
      about:
        "The standard for convenience. Perfect for guest rooms, retail counters, and corporate events.",
      price: "700rs",
      img: halflitre 
    },
    {
      heading: "1.5L High Capacity",
      about:
        "Designed for active hydration. Ideal for gymnasiums, sports facilities, and site canteens.",
      price: "560rs",
      img: oneAndHalfLitre 
    },
    {
      heading: "5L Bulk Jug",
      about:
        "Maximum efficiency for bulk use. Best for hospitality kitchens and industrial water stations.",
      price: "350rs",
      img: fiveLitre 
    },
  ];

  return ( <div className="pt-20 border-t-2 border-gray-400  bg-gray-100">
<h1 className={`text-center font-bold font-serif text-3xl text-gray-700 `}>Choose Your Solution</h1>

    <div className="grid grid-cols-3 gap-6 mt-16">
      {products.map((item, index) => {
        return (
          <div key={index}>
            <div className=" mx-auto bg-white border-2 border-gray-400 rounded-3xl   ">
              <div>
                <Image className="rounded-tl-3xl rounded-tr-3xl  hover:scale-105 object-fill duration-300 ease-in-out transition-all" src={item.img} alt="product image" />
              </div>

              <div>
                <h1>{item.heading}</h1>
                <p>{item.about}</p>
                <div>
                  <p>
                    <span>+</span>
                    <span>{quantity}</span>
                    <span>-</span>
                  </p>
                  <p>{item.price}</p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
        </div>
  );
};
