"use client";
import MoonPic from "@/public/img/mooon.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ParticlesComponent from "../libraries/Particle";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default function Moon() {

  const textRef = useRef(null);
  const imgRef = useRef(null);

gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.to(textRef.current, {
      yPercent: -400,
      duration:3,
      scrollTrigger: {
        trigger:".Moon",
        start:"top 30%",
      markers:true,
        scrub: true
      },
    });

    gsap.to(imgRef.current, {
      yPercent: 20,
      duration:2,
      scrollTrigger: {
        trigger:".Moon",
        start:"top 30%",
        scrub: true
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
              <h1 className="text-white text-5xl drop-shadow-2xl text-center">
                Two Hands , One MasterPiece
              </h1>
          </div>
            </div>
        </div>
      </div>
    </>
  );
}