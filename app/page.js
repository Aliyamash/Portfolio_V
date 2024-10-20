

import Hero from "@/components/hero/Hero";
import ScrollHandler from "@/components/layout/ScrollHandler";
import CloudePage from "@/components/sections/Cloudes";
import Info from "@/components/sections/InfoOne";
import InfoTwo from "@/components/sections/InfoTwo";
import IntroductionPage from "@/components/sections/Introduction";
import Moon from "@/components/sections/Moon";
import Skills from "@/components/sections/Skills";
import Things from "@/components/sections/Things";



export default function Home() {

  return (
  <>
   <ScrollHandler/>
   <Hero/>
   <Moon/>
   <CloudePage/>
   <Info/>
   <InfoTwo/>
   <IntroductionPage/>
   <Skills/>
   <Things/>
  </>
  );
}
