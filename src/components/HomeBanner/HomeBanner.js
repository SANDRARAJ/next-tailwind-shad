"use client";
import React, { useEffect } from "react";
import Assets from "../Layout/CommonLayout/asset";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const HomeBanner = () => {

useEffect(() => {
  gsap.fromTo(
    ".banner_img",
    {
      scale: 1,
      y: 0,
    },
    {
      scrollTrigger: {
        trigger: ".banner_img",
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
      },
      scale: 1.1,
      y: 300,
    }
  );
}, []);


  return (
    <>
      <section className="w-full h-full relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-gradient-to-b before:from-black/50 before:to-transparent before:bg-opacity-10">
        <figure className="w-full h-screen mb-0 relative overflow-hidden">
          <Image
            fill
            src={Assets.bannerImg}
            alt="bannerImg"
            className="w-full h-full object-cover banner_img"
          />
        </figure>
      </section>
    </>
  );
};

export default HomeBanner;
