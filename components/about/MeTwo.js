import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MeTwo() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const infoRef = useRef(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top=+-20% center",
        end: "bottom center",
        scrub: true,
      },
    });
    tl.to(
      infoRef.current,
      {
        yPercent: -40,
      },
      0
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="container mx-auto lg:px-24 text-center -mt-28 "
    >
      <p
        ref={infoRef}
        className="box-c text-two text-lg lg:text-4xl text-meTwo mx-auto text-pretty px-2 lg:mx-24 -z-20"
      >
        we work in one of the most ancient countries in the world and one of the
        most historical provinces in the world, namely Isfahan, with different
        employers and projects.
      </p>
    </div>
  );
}
