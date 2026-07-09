"use client";

import Link from "next/link";
import DotField from "../components/background/dotField";

export const Hero = () => {
  return (
    <div className="h-screen w-full   bg-[#e5e7eb]">
      <DotField
        dotRadius={1.5}
        dotSpacing={14}
        bulgeStrength={67}
        glowRadius={160}
        sparkle={false}
        waveAmplitude={0}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly
        gradientFrom="#A855F7"
        gradientTo="#B497CF"
        glowColor="#120F17"
      >
        <div className="mx-auto flex h-screen max-w-7xl flex-col justify-center px-6">
          <div className="max-w-3xl">
            <h1 className="md:text-6xl  text-2xl sm:text-3xl font-extrabold leading-tight">
              Premium Nestle Pure Life Water Delivered at
              <br />
              <span className="text-[#e63539] ">Wholesale Prices</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-700">
              Fuel your business with the world&apos;s most trusted hydration
              partner. Direct-to-warehouse delivery with transparent tiered
              pricing for procurement managers and high-volume outlets.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href={"/catalog"}>
                <button className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white">
                  Shop Now
                </button>
              </Link>
              <Link href={"/support"}>
                <button className="rounded-lg border border-gray-400 px-6 py-3 font-semibold">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </div>
      </DotField>
    </div>
  );
};
