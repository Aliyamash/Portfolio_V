"use client"
import cloud6 from "@/public/img/cloud-4.png";
import cloud7 from "@/public/img/cloud-7.png";
import Me from "../../components/about/Me";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Info() {
  const cloudRef = useRef()
  useGSAP(() => {
    gsap.to(cloudRef.current , {
     yPercent: -40,
     duration:2,
     scrollTrigger:{
        trigger:cloudRef.current,
        start:"top 30%",
        scrub:true,
     }
    })
 })
  return (
    <>
      <div>
        <Me />
        <div className="">
          <Image src={cloud7} alt="cloud-7" ref={cloudRef} className="opacity-100" />
        </div>
      </div>
    </>
  );
}