"use client";

import Image from "next/image";
import site from "@/public/img/site.png";
import open from "@/public/img/open.png";
import { useRef } from "react";

export default function ApiList() {
  const clip1 = useRef(null);

  const enterMouseHandler1 = () => {
    if (clip1.current) {
      clip1.current.play();
    }
  };
  const leaveMouseHandler1 = () => {
    if (clip1.current) {
      clip1.current.pause();
      clip1.current.currentTime = 0;
    }
  };
  return (
    <>
      <div className="gol">
        <div className="mx-4 lg:mx-20">
          <div className="works-title mb-36 text-center">
            <h1 className="pt-36 py-auto font-bold text-6xl">Api List</h1>
            <p className="mt-8 tracking-widest text-2xl mx-8">
              Get a list of APIs from the desired sources
            </p>
          </div>
          <div className="bg-game p-2 lg:p-16">
            {/* project video */}
            <div className="mt-16 shadow rounded-2xl  shadow-2xl">
              <video
                ref={clip1}
                onMouseEnter={enterMouseHandler1}
                onMouseLeave={leaveMouseHandler1}
                src="/videos/apiList.mp4"
                className="clip-solo rounded-2xl object-fit"
                autoPlay
                muted
              />
            </div>

            {/* btn link */}
            <div className="clip-btn shadow shadow-2xl flex items-center gap-2 justify-center text-center my-12 bg-zinc-800 w-4/5 lg:w-3/4 p-4 mx-auto rounded-2xl">
              <a
                className="text-white  lg:text-2xl"
                href="https://gaming-tau-ebon.vercel.app/"
                target="_blank"
              >
                Let's go to the site
              </a>
              <Image
                className="link-btn"
                src={open}
                width={15}
                alt="link-icon"
              />
            </div>

            <hr className=" border-gray-500" />
            {/* project Desciption */}
            <div className="my-20 px-6 lg:pl-12">
              <h1 className="text-gray-600 my-4">Desciption</h1>
              <p className="text-xl tracking-normal leading-relaxed">
                The purpose of this project is to show the skill of taking API
                from different sources and deploying them. Today, modern tools
                such as Alpine are used and you can see the tools used in this
                project in the tools section, and you can check and view the
                main project and its source codes in the links section.
              </p>
            </div>
            <hr className=" border-gray-500" />
            {/* project Tools */}
            <div className="my-20 px-6 lg:pl-12">
              <h1 className="text-gray-600 my-4 ">Tools</h1>
              <p className="text-xl"> Css / Alpine.js / javaScript</p>
            </div>
            <hr className=" border-gray-500" />
            {/* Links */}
            <div className="my-20 px-6 lg:pl-12">
              <h1 className="text-gray-600 mt-4">Links</h1>
              <p className="text-xl tracking-normal leading-relaxed">
                You can access the site and the source codes of the site in the
                following ways
              </p>
            </div>
            {/* icons and links */}
            <div className="flex items-center gap-4 links-work px-8 pb-8">
              <div className="flex flex-col items-center">
                <a
                  href="https://alpine-api-list.vercel.app/"
                  target="_blank"
                  className="icon-project shadow-white shadow-2xl bg-zinc-800 w-fit p-3 mt-4 mb-1 rounded-lg"
                >
                  <Image src={site} width={30} height={30} alt="site-icon" />
                </a>
                <div className="icon-description">Site</div>
              </div>

              <div className="flex flex-col items-center">
                <a
                  href="https://github.com/Aliyamash/Alpine-Api-list-"
                  target="_blank"
                  className="icon-project shadow-2xl bg-zinc-800 w-fit p-3 mt-4 mb-1 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="30px"
                    fillRule="nonzero"
                  >
                    <g
                      fill="#ffffff"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <div className="icon-description">GitHub</div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
