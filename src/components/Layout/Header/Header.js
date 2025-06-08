"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '../../../../public/assets/logo.webp';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Play",
    "Stay",
    "Dine",
    "Entertainment",
    "Shop",
    "Promotions",
    "Meetings",
    "About Us",
  ];

  const textColor = scrolled ? "text-black" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 z-20 w-full py-3 transition-colors duration-300 max-w-full ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <figure className="aspect-square w-10">
            <Image src={logo.src} alt="logo" width={40} height={40} />
          </figure>

          <nav className="hidden md:flex gap-4">
            {menuItems.map((item) => (
              <Link
                key={item}
                href="/"
                className={`p-2 text-lg font-medium ${textColor}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className="h-12 hover:bg-[#0a0a48]">Book Now</Button>
          </div>

          <div className="block lg:hidden">
            <button onClick={() => setMenuOpen(true)} className="mr-4">
              <Menu className={`w-6 h-6 ${textColor}`} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item}
              href="/"
              className="text-base font-medium text-black"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Button className="mt-4 h-12 w-full hover:bg-[#0a0a48]">Book Now</Button>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
