"use client";

import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useRef } from "react";

export default function Me() {
  gsap.registerPlugin(ScrollTrigger);
  const smoother = useRef();

  return (
    <div className="container text-white mx-auto px-8 lg:px-24 text-center  leading-loose">
      <div className="flex text-xl lg:text-5xl gap-5 justify-center mb-4">
        <p>Hello World , I am Ali</p>
      </div>
      <g className="text-lg lg:text-4xl text-meOne	mx-auto text-pretty capitalize">
        I have been working in the front-end field for more than 3 years, and I
        am also very interested in designing attractive and special designs. I
        have a good team consisting of front-end, back-end and UI designer, each of
        my colleagues are experts in their field.
      </g>
    </div>
  );
}
