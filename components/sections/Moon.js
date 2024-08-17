"use client";
import MoonPic from "@/public/img/mooon.png";
import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ParticlesComponent from "../libraries/Particle";
export default function Moon() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
  }, []);
  return (
    <>
      <div className="my-80">
        <div className="relative pt-40 ">
           <ParticlesComponent  id="tsparticles"/>
           <div className="img-moon">
         <Image
            width={750}
            height={750}
            id="moon"
            className="mx-auto object-cover brightness-75 contrast-125"
            src={MoonPic}
            alt="moon"
            ref={imgRef}
          />
         
        
         <h1 className="mt-5 text-white text-6xl drop-shadow-2xl text-center">
            Two Hands , One MasterPiece
          </h1>
         </div>
         
        <div>
        
        </div>
        </div>
      </div>
    </>
  );
}
