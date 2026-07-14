"use client";

import { Banknote, ShieldCheck, Store, Truck } from "lucide-react";
import { melfira, sansation } from "../fonts/fonts";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const WhyChoseUs = () => {
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".feature-card");

      cards.forEach((card) => {
        const icon = card.querySelector(".feature-icon");
        const heading = card.querySelector(".feature-heading");
        const about = card.querySelector(".feature-about");
        const inner = [icon, heading, about].filter(Boolean);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1,
            // markers: true, // uncomment to debug trigger positions
          },
        });

        tl.fromTo(
          card,
          { opacity: 0, scale: 0.82, y: 90 },
          { opacity: 1, scale: 1, y: 0, ease: "power2.out", duration: 0.5 }
        )
          .fromTo(
            inner,
            { opacity: 0, y: 24, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: "power2.out",
              duration: 0.35,
              stagger: 0.08,
            },
            "-=0.3"
          )
          .to(inner, {
            opacity: 0,
            y: -16,
            scale: 0.92,
            ease: "power2.in",
            duration: 0.25,
            stagger: 0.05,
          })
          .to(
            card,
            {
              opacity: 0,
              scale: 0.82,
              y: -90,
              ease: "power2.in",
              duration: 0.5,
            },
            "-=0.15"
          );
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [pathname]);

  const featuresCards = [
    {
      id: 1,
      icon: <ShieldCheck size={32} />,
      heading: "Genuine Products",
      about:
        "Direct sourcing guarantees 100% authentic Nestlé quality for every pallet.",
    },
    {
      id: 2,
      icon: <Banknote size={32} />,
      heading: "Wholesale Prices",
      about:
        "Dynamic tiered pricing designed to scale with your business requirements.",
    },
    {
      id: 3,
      icon: <Truck size={32} />,
      heading: "Fast Delivery",
      about:
        "Priority logistics network ensures next-day delivery for bulk regional orders.",
    },
    {
      id: 4,
      icon: <Store size={32} />,
      heading: "Bulk Orders",
      about:
        "Seamlessly manage large-scale replenishment with our custom portal.",
    },
  ];

  return (
    <section className="bg-[#f8f8fa] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuresCards.map((item) => (
            <div
              key={item.id}
              className="feature-card rounded-3xl border-2 border-gray-300 bg-white px-8 py-12 shadow-sm"
            >
              <div className="feature-icon mb-5 w-max rounded-2xl bg-red-100 p-4 text-[#9e1e20]">
                {item.icon}
              </div>

              <h2
                className={`feature-heading mb-3 text-2xl font-bold ${melfira.className}`}
              >
                {item.heading}
              </h2>

              <p className={`feature-about ${sansation.className}`}>
                {item.about}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};