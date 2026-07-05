"use client";

import DotField from "../components/background/dotField";

export const Hero = () => {
  return (
    <div className="bg-[#e5e7eb] h-screen w-full flex  justify-center ">
      <div className="ml-6 mr-6">
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
          <div className="contact-container flex flex-col  ">
            <h1 className="text-6xl font-extrabold">
              Premium Nestle Pure Life <br /> Water Delivered at <br />
              <span>Wholesale Prices </span>
            </h1>
            <p>
              Fuel your business with the world&apos;s most trusted hydration
              partner. Direct-to-warehouse delivery with transparent tiered
              pricing for procurement managers and high-volume outlets.
            </p>
          </div>
          <div>
            <button>Shop Now</button>
            <button>Contact Sales</button>
          </div>
        </DotField>
      </div>
    </div>
  );
};
