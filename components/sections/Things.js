"use client"
import Image from "next/image";
import ballons from "@/public/img/balloons.png";
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
        const context = gsap.context(() => {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef1.current,
                start: "center center",
                end: "bottom top",
                scrub: 2,
              },
            });
            tl.to(refThings1.current, { y: -450 }, 0);
            tl.to(refThings2.current, { y: -950 }, 0);
            tl.to(refThings3.current, { y: -650 }, 0);
          });
          return () => context.revert();
    },[])
  return (
    <>
      <div ref={containerRef1} className="h-screen relative ">
        <div className="h-full absolute right-0">
          <Image ref={refThings1} src={ballons3} height={800} alt="balloons" />
        </div>
    
        <div className="h-full absolute top-0 -left-48">
          <Image ref={refThings2} src={ballons2} height={900} alt="balloons" />
        </div>
     
        <div className="h-full absolute right-60 -bottom-96">
          <Image ref={refThings3} src={ballons4} height={900} alt="balloons" />
        </div>
      </div>
      <div className="h-screen"> </div>
    </>
  );
}
