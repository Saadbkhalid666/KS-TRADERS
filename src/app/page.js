
import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./sections/hero";
import { WhyChoseUs } from "./sections/whyChooseUs";
import { Products } from "./sections/products";

export default function Home() {
  return (
  <div>

     <Navbar    />
     <Hero   />
     <WhyChoseUs   />
     <Products   />
  
  </div>
  );
}
