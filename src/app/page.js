
import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./sections/hero";
import { WhyChoseUs } from "./sections/whyChooseUs";
import { Products } from "./sections/products";
import { GetQuote } from "./sections/getQuote";

export default function Home() {
  return (
  <div>

     <Navbar    />
     <Hero   />
     <WhyChoseUs   />
     <Products   />
     <GetQuote   />
  
  </div>
  );
}
