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
      const mm = gsap.matchMedia();

      mm.add("(max-width: 768px)", () => {
       
        const context = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef1.current,
              start: "20% center",
              end: "center top",
              scrub: 2,
              anticipatePin: 1,
            },
          });
          tl.to(refThings1.current, { y: -200 }, 0); 
          tl.to(refThings2.current, { y: -400 }, 0);
          tl.to(refThings3.current, { y: -300 }, 0);
        });
        return () => context.revert();
      });

      mm.add("(min-width: 769px)", () => {
       
        const context = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef1.current,
              start: "-40% center",
              end: "center top",
              scrub: 2,
              anticipatePin: 1,
            },
          });
          tl.to(refThings1.current, { y: -450 }, 0);
          tl.to(refThings2.current, { y: -950 }, 0);
          tl.to(refThings3.current, { y: -650 }, 0);
        });
        return () => context.revert();
      });

      return () => mm.revert(); // پاک‌سازی
    }
  }, []);
  
  
  return (
    <>
      <div ref={containerRef1} className="h-screen relative">
        <div className="h-full absolute right-0">
          <div ref={refThings1}>
            <Image className="ballonOne" src={ballons3} height={600} alt="balloons" />
          </div>
        </div>

        <div className="h-full container-ballonTwo absolute top-0 -left-48">
          <div ref={refThings2}>
            <Image className="ballonTwo" src={ballons2} height={700} alt="balloons" />
          </div>
        </div>

        <div className="h-full absolute left-72 -bottom-96">
         <div className="w-full" ref={refThings3}>
         <Image  className="ballonThree" src={ballons4} height={800} alt="balloons" />
         </div>
        </div>
      </div>
      <div className="-mt-60">
          <h1 className="text-center capitalize text-xl lg:text-4xl drop-shadow-lg ">and developing up-to-date and beautiful websites for example (this site)</h1>
        </div>
    
     
        
    </>
  );
}
