import Me from "@/components/about/Me";
import Hero from "@/components/hero/Hero";
import ScrollHandler from "@/components/layout/ScrollHandler";
import Info from "@/components/sections/InfoOne";
import IntroductionPage from "@/components/sections/Introduction";
import Moon from "@/components/sections/Moon";


export default function Home() {
  return (
  <>
   <ScrollHandler/>
   <Hero/>
   <Moon/>
   <Info/>
  </>
  );
}
