"use client"
import shahriarH from "@/public/img/shahriarH.png";
import ifund from "@/public/img/logo-white-2.png";
import Image from "next/image";
import MeTwo from "../about/MeTwo";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";


export default function InfoTwo() {

  return (
    <>
      <div className="pb-80 border">
        <div>
          <Image className="object-cover" height={80} src={shahriarH}/>
          <Image className="object-cover" height={80} src={ifund}/>
          
        </div>
        <div>
        <MeTwo />
        </div>
      </div>
    </>
  );
}
