"use client"
import Image from "next/image";
import cloud4 from "@/public/img/cloud-5.png"
import cloud2 from "@/public/img/cloud-3.png"
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 


export default function CloudePage() {
    gsap.registerPlugin(ScrollTrigger); 
    const cloud1Ref = useRef()
    const cloud2Ref = useRef()
    useLayoutEffect(() => {
        gsap.to(cloud1Ref.current , {
         yPercent: 40,
         duration:2,
         scrollTrigger:{
            trigger:cloud1Ref.current,
            start:"top 30%",
            scrub:3,
         }
        })

        gsap.to(cloud2Ref.current , {
            yPercent: 40,
            duration:5,
            scrollTrigger:{
               trigger:cloud2Ref.current,
               start:"top 30%",
               scrub:2,
            }
           })
    },[])
    return(
        <>
        <div className="pt-24 w-full h-screen relative">
            <Image className="absolute top-0 right-0" alt="cloud-8" id="cloud8" height={950} src={cloud4} ref={cloud1Ref}/> 
        </div>
        <div className="w-full h-screen relative">
        <Image className="absolute -top-80 -left-16 drop-shadow-lg shadow-white" alt="cloud-2" height={900} src={cloud2} ref={cloud2Ref}/>
        </div>
        </>
    )
}