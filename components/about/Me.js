"use client";

import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useRef } from "react";

export default function Me() {
  gsap.registerPlugin(ScrollTrigger);
  const smoother = useRef();

  return (
    <div className="container text-white mx-auto px-24 text-center -mt-28">
      <div className="flex text-5xl gap-5 justify-center leading-relaxed">
        <p>Hello, I am </p>
        <p>Ali</p>
      </div>
      <p className="box-c text-4xl leading-relaxed mx-auto text-pretty">
        I have been working in the front-end field for more than 3 years, and I
        am also very interested in designing attractive and special designs. I
        have a good team consisting of front-end, back-end and UI / UX, each of
        my colleagues are experts in their field.
      </p>
    </div>
  );
}
