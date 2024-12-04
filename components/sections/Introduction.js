"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import star1 from "@/public/img/star2.png";
import meteorite from "@/public/img/meteorite.png";
import Image from "next/image";
import MeThree from "../about/MeThree";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function IntroductionPage() {
  const mainRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const meteoriteRefOne = useRef(null);
  const meteoriteRefTwo = useRef(null);
  const meteoriteRefThree = useRef(null);
  useLayoutEffect(() => {
    gsap.to(document.body, {
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 40%",
        end: "center center",
        scrub: true,
      },
      // aecbeb
      background: "#1d3557",
    });
    gsap.fromTo(
      meteoriteRefOne.current,
      {
        opacity: 0,
      },
      {
        translateX: "-100vw",
        translateY: "100vh",
        ease: "slow(0.7,0.7,false)",
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: mainRef.current,
          start: "35% center",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      meteoriteRefTwo.current,
      {
        opacity: 0,
      },
      {
        translateX: "-100vw",
        translateY: "100vh",
        ease: "slow(0.7,0.7,false)",
        opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: mainRef.current,
          start: "35% center",
          end: "bottom center",
        },
      }
    );
    gsap.fromTo(
      meteoriteRefThree.current,
      {
        opacity: 0,
      },
      {
        translateX: "-100vw",
        translateY: "100vh",
        ease: "slow(0.7,0.7,false)",
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: mainRef.current,
          start: "35% center",
          end: "bottom center",
        },
      }
    );
  }, []);
  return (
    <>
      <div ref={mainRef} className="h-screen pt-24 relative">
        <div className="">
          <div ref={meteoriteRefOne}>
            <Image
              className="meteorite absolute right-8 -top-2"
              height={400}
              width={400}
              style={{
                width: "400px",
                height: "auto",
              }}
              src={meteorite}
              alt="meteorite"
            />
          </div>
          <div ref={meteoriteRefTwo}>
            <Image
              className="meteorite absolute right-12 "
              style={{
                width: "200px",
                height: "auto", // یا برعکس
              }}
              src={meteorite}
              alt="meteorite"
            />
          </div>
          <div ref={meteoriteRefThree}>
            <Image
              className="meteorite absolute right-16 -top-12"
              style={{
                width: "auto",
                height: "300px"
              }}
              src={meteorite}
              alt="meteorite"
            />
          </div>
          <Image
            className="starone mx-auto"
            style={{
              width: "300px",
              height: "auto", 
            }}
            src={star1}
            alt="meteorite"
          />
        </div>
        <div>
          <MeThree />
        </div>
      </div>
    </>
  );
}
