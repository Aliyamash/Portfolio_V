"use client";
import airplanes from "@/public/img/airplanes.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

export default function Skills() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef();
  const picRef = useRef();

  useGSAP(() => {
   gsap.to(
      picRef.current,
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "10% top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      }
    );
    gsap.to(document.body , {
    
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "30% center",
          scrub: true,
        },
        duration:1,
        ease:"none",
        background: "#abdbf5",
      });
  }, []);

  return (
    <>
      <div className="races"></div>
      <div ref={sectionRef} className="container-airplanes h-screen">
        <div ref={picRef}>
          <Image className="airplane" src={airplanes} />
        </div>
      </div>
      <div className="h-96 mx-auto" >
        <h1 className="text-center text-5xl text-blue-600">Things that make me more special than others</h1>
      </div>
    </>
  );
}
