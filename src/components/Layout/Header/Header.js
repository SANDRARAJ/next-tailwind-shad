"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Assets from "../CommonLayout/asset";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from '../../../../public/assets/logo.webp';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed bg-transparent top-0 left-0 z-20 py-3 w-full ${scrolled ? "bg-white" : ""}`}>
      <div className="container">
        <div className="flex justify-between items-center">
          <figure className="aspect-square w-10">
            <Image src={logo.src} alt="logo" width={40} height={40} />
          </figure>
          <div>
            <Link href={"/"} className={`p-2  text-lg font-medium ${scrolled ? "text-black" : "text-white"}`}>
              Play
            </Link>
            <Link href={"/"} className={`p-2  text-lg font-medium ${scrolled ? "text-black" : "text-white"}`}>
              Stay
            </Link>
            <Link href={"/"} className={`p-2  text-lg font-medium ${scrolled ? "text-black" : "text-white"}`}>
              Dine
            </Link>
            <Link href={"/"} className={`p-2  text-lg font-medium ${scrolled ? "text-black" : "text-white"}`}>
              Entertainment
            </Link>
            <Link href={"/"} className={`p-2  text-lg font-medium ${scrolled ? "text-black" : "text-white"}`}>
              Shop
            </Link>
            <Link href={"/"} className={`p-2  text-lg font-medium ${scrolled ? "text-black" : "text-white"}`}>
              Promotions
            </Link>
            <Link href={"/"} className={`p-2  text-lg font-medium ${scrolled ? "text-black" : "text-white"}`}>
              Meetings
            </Link>
            <Link href={"/"} className={`p-2  text-lg font-medium ${scrolled ? "text-black" : "text-white"}`}>
              About Us
            </Link>
          </div>
          <div>
            <Button className="w-full h-12 hover:bg-[#0a0a48]">Book Now</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
