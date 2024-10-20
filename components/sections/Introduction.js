"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import star1 from "@/public/img/star2.png";
import meteorite from "@/public/img/meteorite.png";
import Image from "next/image";
import MeThree from "../about/MeThree";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 


export default function IntroductionPage() {
  const mainRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger); 
  const meteoriteRefOne = useRef(null);
  const meteoriteRefTwo = useRef(null);
  const meteoriteRefThree = useRef(null);
  useLayoutEffect(() => {
    gsap.to(document.body, {
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 40%",
        end: "center center",
        scrub: true,
      },
      // aecbeb
      background: "#1d3557",
    });
     gsap.fromTo(meteoriteRefOne.current , {
      opacity:0
     },{
      translateX: "-100vw",
      translateY: "100vh",
      ease: "slow(0.7,0.7,false)" ,
      opacity:1,
      duration:2,
      scrollTrigger:{
        trigger:mainRef.current,
        start:"35% center",
        end:"bottom center",
      }
     })

     gsap.fromTo(meteoriteRefTwo.current , {
      opacity:0
     },{
      translateX: "-100vw",
      translateY: "100vh",
      ease: "slow(0.7,0.7,false)" ,
      opacity:1,
      duration:4,
      scrollTrigger:{
        trigger:mainRef.current,
        start:"35% center",
        end:"bottom center",
      }
     })
     gsap.fromTo(meteoriteRefThree.current , {
      opacity:0
     },{
      translateX: "-100vw",
      translateY: "100vh",
      ease: "slow(0.7,0.7,false)" ,
      opacity:1,
      duration:3,
      scrollTrigger:{
        trigger:mainRef.current,
        start:"35% center",
        end:"bottom center"
      }
     })
  }, []);
  return (
    <>
      <div ref={mainRef} className="h-screen pt-24 relative">
        <div className="">
        <Image ref={meteoriteRefOne} className="meteorite absolute right-8 -top-2"  height={400} src={meteorite} />
        <Image ref={meteoriteRefTwo} className="meteorite absolute right-12 "  height={200} src={meteorite} />
        <Image ref={meteoriteRefThree} className="meteorite absolute right-16 -top-12"  height={300} src={meteorite} />
          <Image className="starone mx-auto" height={300} src={star1} />
        </div>
        <div>
          <MeThree/>
        </div>
      </div>
    </>
  );
}
