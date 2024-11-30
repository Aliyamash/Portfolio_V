"use client";
import Image from "next/image";
import ballons2 from "@/public/img/balloons2.png";
import ballons3 from "@/public/img/balloons3.png";
import ballons4 from "@/public/img/balloons4.png";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Things() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef1 = useRef(null);
  const refThings1 = useRef();
  const refThings2 = useRef();
  const refThings3 = useRef();

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const context = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef1.current,
            start: "-40% center",
            end: "center top",
            scrub: 2,
            anticipatePin: 1,
          },
        }, 0);
        tl.to(refThings1.current, { y: -450 }, 0);
        tl.to(refThings2.current, { y: -950 }, 0);
        tl.to(refThings3.current, { y: -650 }, 0);
      });
      return () => context.revert();
    }
  }, []);
  
  
  return (
    <>
      <div ref={containerRef1} className="h-screen relative">
        <div className="h-full absolute right-0">
          <div ref={refThings1}>
            <Image src={ballons3} height={600} alt="balloons" />
          </div>
        </div>

        <div className="h-full absolute top-0 -left-48">
          <div ref={refThings2}>
            <Image src={ballons2} height={700} alt="balloons" />
          </div>
        </div>

        <div className="h-full absolute left-72 -bottom-96">
         <div ref={refThings3}>
         <Image  src={ballons4} height={800} alt="balloons" />
         </div>
        </div>
      </div>
      <div className="-mt-60">
          <h1 className="text-center capitalize text-xl lg:text-4xl drop-shadow-lg ">and developing up-to-date and beautiful websites for example (this site)</h1>
        </div>
    
     
        
    </>
  );
}
