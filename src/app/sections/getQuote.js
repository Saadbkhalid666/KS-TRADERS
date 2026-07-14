"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";


export const GetQuote = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gray-200 md:px-20 px-10 py-10 md:py-20">
      <div
        ref={containerRef}
        className="bg-red-700 py-20 md:py-40 rounded-4xl cursor-target"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          Ready to Order Wholesale Water?
        </h1>

        <p className="text-gray-200 text-center mt-4">
          Join the network of businesses that prioritize quality and efficiency.
        </p>

        <div className="flex justify-center">
          <Link href="/support">
            <button className="bg-white text-red-500 px-4 py-5 mt-4 rounded-2xl border-2 border-black hover:scale-105 transition-all shadow-xl cursor-target">
              Get a Custom Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};