import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MeThree() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const infoRef = useRef(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "-70% 60%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    tl.to(
      infoRef.current,
      {
        opacity: 1,
      },
      0
    );
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-8 lg:px-24 text-center">
      <p
        ref={infoRef}
        className="text-white text-xl lg:text-4xl text-meThree mx-auto text-pretty lg:mx-24 -z-20 opacity-0"
      >
        I acquired a set of versatile technologies based on my passion for my
        career in 2022. I gained many of my skills from the various projects I
        did which you can see below.
      </p>
    </div>
  );
}
