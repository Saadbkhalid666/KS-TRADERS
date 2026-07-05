
import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./sections/hero";
import { WhyChoseUs } from "./sections/whyChooseUs";

export default function Home() {
  return (
  <div>

     <Navbar    />
     <Hero   />
     <WhyChoseUs   />
  
  </div>
  );
}
