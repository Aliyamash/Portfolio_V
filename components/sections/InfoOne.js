"use client";
import cloud7 from "@/public/img/cloud-7.png";
import Me from "../../components/about/Me";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 


export default function Info() {
  gsap.registerPlugin(ScrollTrigger); 
  const cloudRef = useRef();

  useLayoutEffect(() => {
    if (cloudRef.current) {
      gsap.to(cloudRef.current, {
        yPercent: -40,
        duration: 2,
        scrollTrigger: {
          trigger: cloudRef.current,
          start: "-15% center",
          scrub: 1.5,
        },
      });
    }
  }, []); 

  return (
    <>
      <div>
        <Me />
        <div className="-my-24 relative"> 
          <Image
            src={cloud7}
            alt="cloud-7"
            ref={cloudRef}
            className="opacity-100"
          />
        </div>
      </div>
    </>
  );
}
