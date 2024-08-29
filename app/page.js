

import Hero from "@/components/hero/Hero";
import ScrollHandler from "@/components/layout/ScrollHandler";
import CloudePage from "@/components/sections/Cloudes";
import Info from "@/components/sections/InfoOne";
import InfoTwo from "@/components/sections/InfoTwo";
import Moon from "@/components/sections/Moon";



export default function Home() {

  return (
  <>
   <ScrollHandler/>
   <Hero/>
   <Moon/>
   <CloudePage/>
   <Info/>
   <InfoTwo/>
  </>
  );
}
