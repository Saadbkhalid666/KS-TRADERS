import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TargetCursor from "./components/cursor/cursor";
import { Navbar } from "./components/navbar";
import { Providers } from "./redux/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KS Traders",
  description: "Wholesale Water Bottles",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
          cursorColor="#ffffff"
          cursorColorOnTarget="#B497CF"
        />
        <Providers>

        <Navbar />
        {children}
        </Providers>
      </body>
    </html>
  );
}
