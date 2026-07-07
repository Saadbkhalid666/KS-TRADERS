"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { melfira } from "../fonts/fonts";
 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/catalog" },
  { name: "Support", href: "/support" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" top-0 left-0 w-full  border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className={`${melfira.className} cursor-target text-2xl md:text-3xl text-[#E53935]`}
        >
          KS TRADERS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative text-lg font-medium text-[#666666] transition-colors duration-300 hover:text-[#E53935] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#E53935] after:transition-all after:duration-300 hover:after:w-full cursor-target"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="rounded-full p-2 transition cursor-target hover:bg-red-50">
            <Link href={"/cart"}>
            <ShoppingCart
              size={22}
              className="text-gray-600 hover:text-[#E53935]"
              />
              </Link>
          </button>

          <button className="rounded-xl cursor-target bg-[#E53935] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-700 active:scale-95">
            Order Now
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ShoppingCart size={22} className="cursor-pointer text-gray-700" />

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-[#E53935]" />
            ) : (
              <Menu size={28} className="text-[#E53935]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <nav>
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block border-b border-gray-100 py-4 text-lg text-[#666666] transition hover:text-[#E53935]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-6">
            <button className="w-full rounded-xl bg-[#E53935] py-3 font-semibold text-white transition hover:bg-red-700">
              Order Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
