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
    <div ref={containerRef} className="container mx-auto px-24 text-center">
      <p
        ref={infoRef}
        className="w-3/4 text-white text-4xl leading-relaxed mx-auto text-pretty mx-24 -z-20 opacity-0"
      >
        I acquired a set of versatile technologies based on my passion for my
        career in 2022. I gained many of my skills from the various projects I
        did.
      </p>
    </div>
  );
}
