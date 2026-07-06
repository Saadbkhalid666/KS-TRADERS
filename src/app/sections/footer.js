// components/Footer.jsx

import { Globe, Share2, Network } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full rounded-t-xl bg-black text-white mt-20">
      {/* Top Section */}
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 py-12 md:flex-row">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold cursor-target">Nestlé Pure Life</h2>

          <p className="max-w-sm text-gray-400 cursor-target">
            Fuel your business with the world&apos;s most trusted hydration
            partner. Direct-to-warehouse delivery with transparent tiered
            pricing for procurement managers and high-volume outlets.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-3">
          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h5 className="mb-1 font-bold text-white cursor-target">Legal</h5>

            <Link
              href="/pages/terms"
              className="text-sm text-gray-400 transition cursor-target hover:text-red-500"
            >
              Terms of Sale
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-gray-800 px-6 py-6">
        <p className="text-sm text-gray-400">
          © 2026 KS TRADERS. All rights reserved.
        </p>

        <div className="flex gap-4">
          <Globe
            size={22}
            className="cursor-pointer text-gray-400 transition hover:text-red-500"
          />

          <Network
            size={22}
            className="cursor-pointer text-gray-400 transition hover:text-red-500"
          />

          <Share2
            size={22}
            className="cursor-pointer text-gray-400 transition hover:text-red-500"
          />
        </div>
      </div>
    </footer>
  );
};
