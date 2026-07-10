
import { Hero } from "./sections/hero";
import { WhyChoseUs } from "./sections/whyChooseUs";
import { Products } from "./sections/products";
import { GetQuote } from "./sections/getQuote";
import { Footer } from "./sections/footer";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  return (
  <div className="cursor-none">

     <Hero   />
     <WhyChoseUs   />
     <Products   />
     <GetQuote   />
     <Footer   />
  
  </div>
  );
}
