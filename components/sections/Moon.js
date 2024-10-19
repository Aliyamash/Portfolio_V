"use client";
import MoonPic from "@/public/img/mooon.png";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ParticlesComponent from "../libraries/Particle";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default function Moon() {

  const textRef = useRef(null);
  const imgRef = useRef(null);

gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    gsap.to(textRef.current, {
      yPercent: -400,
      duration:3,
      scrollTrigger: {
        trigger:".Moon",
        pinSpacing:true,
        start:"top 30%",
        invalidateOnRefresh:true,
        scrub: 2
      },
    });

    gsap.to(imgRef.current, {
      yPercent: 20,
      duration:2,
      scrollTrigger: {
        trigger:".Moon",
        start:"-50% 40%",
        scrub: 3
      },
    });

  }, []);
  return (
    <>
      <div className="my-80">
        <div className="relative pt-40 ">
          <ParticlesComponent id="tsparticles" />
          <div className="img-moon Moon">
            <Image
              ref={imgRef}
              width={850}
              height={850}
              id="Moon"
              className="mx-auto object-cover brightness-75 contrast-125"
              src={MoonPic}
              alt="moon"
            />

            <div ref={textRef} id="textMoon">
              <h1 className="text-white text-8xl drop-shadow-2xl text-center">
                Two Hands , One MasterPiece
              </h1>
          </div>
            </div>
        </div>
      </div>
    </>
  );
}
