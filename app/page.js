import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollHandler from "@/components/layout/ScrollHandler";
import CloudePage from "@/components/sections/Cloudes";
import Comment from "@/components/sections/Comments";
import FamousPeople from "@/components/sections/FamousPeople";
import Info from "@/components/sections/InfoOne";
import InfoTwo from "@/components/sections/InfoTwo";
import IntroductionPage from "@/components/sections/Introduction";
import Moon from "@/components/sections/Moon";
import Projects from "@/components/sections/project/Projects";
import Skills from "@/components/sections/Skills";
import Things from "@/components/sections/Things";



export default function Home() {

  return (
  <>
  <Header/>

   <Hero/>
   <Moon/>
   <CloudePage/>
   <Info/>
   <InfoTwo/>
   <IntroductionPage/>
   <Skills/>
   <Things/>
   <Comment/> 
   <FamousPeople/>
   <Projects/>
   <Footer/>
  </>
  );
}
