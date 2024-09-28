"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function IntroductionPage() {
  const mainRef = useRef(null);
  useLayoutEffect(() => {
    gsap.to(document.body, {
      scrollTrigger: {
        trigger: mainRef.current,
        markers:true,
        start:"top 40%",
        end:"center center",
        scrub: true,
      },
      background:"#0096c8"
    });
  }, []);
  return (
    <>
      <div ref={mainRef} className="h-screen">
      </div>
      <div className="h-screen">

      </div>
    </>
  );
}
