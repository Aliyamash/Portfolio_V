"use client";

import Down from "@/public/img/down.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto lg:my-80">
        <div className="flex items-center justify-center">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="500"
            className="text-white text-7xl text-center border py-8 px-36 rounded-3xl relative z-0 "
          >
            Let's go down{" "}
            <span>
              <Link href="#moon">
                <Image
                  className="inline icon-hero"
                  alt="hero-img"
                  height={150}
                  src={Down}
                />
              </Link>
            </span>{" "}
            together{" "}
            <span className="px-16 py-2  absolute -bottom-2 right-1/3 mr-14 z-10 bg-black"></span>
          </h1>
        </div>
      </div>
    </>
  );
}
