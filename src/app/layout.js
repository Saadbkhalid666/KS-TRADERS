import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TargetCursor from "./components/cursor/cursor";
import { Navbar } from "./components/navbar";
import { Providers } from "./redux/provider";
import CartLoader from "./utils/CartLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KS Traders | Nestlé Pure Life Wholesale Water Supplier in Lahore",
  description:
    "KS Traders is a trusted wholesale supplier of Nestlé Pure Life water bottles in Lahore. Buy 500ml, 1.5L and 5L bottles at competitive wholesale prices with fast delivery.",

  keywords: [
    "Nestle Water",
    "Nestlé Pure Life",
    "Water Bottle",
    "Wholesale Water",
    "Water Supplier Lahore",
    "Mineral Water",
    "Bulk Water Bottles",
    "KS Traders",
    "Nestle Distributor Lahore",
    "Wholesale Nestle Water",
    "Drinking Water",
    "Water Delivery Lahore",
    "500ml Water Bottles",
    "1.5L Water Bottles",
    "5L Water Bottles"
  ],

  openGraph: {
    title: "KS Traders | Wholesale Nestlé Pure Life Water",
    description:
      "Premium Nestlé Pure Life water delivered across Lahore at wholesale prices.",
    url: "https://kstraders.vercel.app",
    siteName: "KS Traders",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  alternates: {
    canonical: "https://kstraders.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
          cursorColor="#ffffff"
          cursorColorOnTarget="#B497CF"
        />
<CartLoader   />
        <Navbar />
        {children}
        </Providers>
      </body>
    </html>
  );
}
