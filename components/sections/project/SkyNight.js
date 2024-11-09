"use client";
import Image from "next/image";
import Sky from "@/public/img/khalifetower.jpg";

import { useRef } from "react";

export default function SkyNight() {
  const clip1 = useRef(null);
  const clip2 = useRef(null);
  const clip3 = useRef(null);
  const clip4 = useRef(null);
  const clip5 = useRef(null);
  const clip6 = useRef(null);
  const clip7 = useRef(null);

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

  const enterMouseHandler2 = () => {
    if (clip2.current) {
      clip2.current.play();
    }
  };
  const leaveMouseHandler2 = () => {
    if (clip2.current) {
      clip2.current.pause();
      clip2.current.currentTime = 0;
    }
  };

  const enterMouseHandler3 = () => {
    if (clip3.current) {
      clip3.current.play();
    }
  };
  const leaveMouseHandler3 = () => {
    if (clip3.current) {
      clip3.current.pause();
      clip3.current.currentTime = 0;
    }
  };

  const enterMouseHandler4 = () => {
    if (clip4.current) {
      clip4.current.play();
    }
  };
  const leaveMouseHandler4 = () => {
    if (clip4.current) {
      clip4.current.pause();
      clip4.current.currentTime = 0;
    }
  };

  const enterMouseHandler5 = () => {
    if (clip5.current) {
      clip5.current.play();
    }
  };
  const leaveMouseHandler5 = () => {
    if (clip5.current) {
      clip5.current.pause();
      clip5.current.currentTime = 0;
    }
  };

  const enterMouseHandler6 = () => {
    if (clip6.current) {
      clip6.current.play();
    }
  };
  const leaveMouseHandler6 = () => {
    if (clip6.current) {
      clip6.current.pause();
      clip6.current.currentTime = 0;
    }
  };

  const enterMouseHandler7 = () => {
    if (clip6.current) {
      clip6.current.play();
    }
  };
  const leaveMouseHandler7 = () => {
    if (clip6.current) {
      clip6.current.pause();
      clip6.current.currentTime = 0;
    }
  };

  return (
    <>
      <div className="skyPic w-fit">
        <div className="flex justify-between px-8 mb-36">
          <video
            onMouseEnter={enterMouseHandler1}
            onMouseLeave={leaveMouseHandler1}
            ref={clip1}
            src="/videos/game1.mp4"
            className="rounded-2xl object-cover"
            width={550}
            height={100}
            muted
          />
          <video
            onMouseEnter={enterMouseHandler2}
            onMouseLeave={leaveMouseHandler2}
            ref={clip2}
            src="/videos/apiList.mp4"
            className="rounded-2xl"
            width={550}
            height={350}
            muted
          />
        </div>

        <div className="flex justify-between px-8 mb-36">
          <video
            onMouseEnter={enterMouseHandler3}
            onMouseLeave={leaveMouseHandler3}
            ref={clip3}
            src="/videos/game2.mp4"
            className="rounded-2xl"
            width={550}
            height={350}
            poster="/img/game2.png"
            muted
          />
          <video
            onMouseEnter={enterMouseHandler4}
            onMouseLeave={leaveMouseHandler4}
            ref={clip4}
            src="/videos/keyhan.mp4"
            className="rounded-2xl"
            width={550}
            height={350}
            muted
          />
        </div>

        <div className="flex justify-between px-8 mb-36">
          <video
            onMouseEnter={enterMouseHandler5}
            onMouseLeave={leaveMouseHandler5}
            ref={clip5}
            src="/videos/portfolioSH.mp4"
            className="rounded-2xl object-cover"
            width={550}
            height={350}
            muted
          />
          <video
            onMouseEnter={enterMouseHandler6}
            onMouseLeave={leaveMouseHandler6}
            ref={clip6}
            src="/videos/fastFood.mp4"
            className="rounded-2xl"
            width={550}
            height={350}
            poster="/img/fastfood.png"
            muted
          />
        </div>

        <div className="flex justify-between px-8 mb-36">
          <video
            onMouseEnter={enterMouseHandler7}
            onMouseLeave={leaveMouseHandler7}
            ref={clip7}
            src="/videos/travel.mp4"
            className="rounded-2xl"
            width={550}
            height={350}
            muted
          />
        </div>
      </div>
    </>
  );
}
