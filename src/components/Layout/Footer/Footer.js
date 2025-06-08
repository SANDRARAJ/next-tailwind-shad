"use client";
import Link from "next/link";
import React, { useState } from "react";

const footerData = [
  {
    title: "Attractions",
    links: [
      { name: "Beaches", path: "/attractions/beaches" },
      { name: "Museums", path: "/attractions/museums" },
      { name: "Parks", path: "/attractions/parks" },
      { name: "Temples", path: "/attractions/temples" },
      { name: "Hill Stations", path: "/attractions/hills" },
      { name: "Wildlife", path: "/attractions/wildlife" },
      { name: "Lakes", path: "/attractions/lakes" },
    ],
  },
  {
    title: "Activities",
    links: [
      { name: "Trekking", path: "/activities/trekking" },
      { name: "Boating", path: "/activities/boating" },
      { name: "Camping", path: "/activities/camping" },
      { name: "Cycling", path: "/activities/cycling" },
      { name: "Backwater Tours", path: "/activities/backwater" },
      { name: "Cultural Shows", path: "/activities/culture" },
      { name: "Scuba Diving", path: "/activities/scuba" },
    ],
  },
  {
    title: "Dining",
    links: [
      { name: "Local Cuisine", path: "/dining/local" },
      { name: "Seafood Spots", path: "/dining/seafood" },
      { name: "Fine Dining", path: "/dining/fine" },
      { name: "Street Food", path: "/dining/street" },
      { name: "Vegetarian", path: "/dining/vegetarian" },
      { name: "Cafes", path: "/dining/cafes" },
      { name: "Desserts", path: "/dining/desserts" },
    ],
  },
  {
    title: "Travel Info",
    links: [
      { name: "Getting Here", path: "/info/getting-here" },
      { name: "Public Transport", path: "/info/transport" },
      { name: "Travel Tips", path: "/info/tips" },
      { name: "Weather", path: "/info/weather" },
      { name: "Safety", path: "/info/safety" },
      { name: "Travel Insurance", path: "/info/insurance" },
      { name: "FAQs", path: "/info/faqs" },
    ],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="py-20 bg-[#f1ece4]">
      <div className="container">
        <div className="block md:hidden">
          {footerData.map((section, index) => (
            <div key={index} className="mb-4 border-b border-[#ccc]">
              <button
                className="w-full text-left py-3 flex justify-between items-center text-[#8b7655] font-medium text-lg uppercase"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out pb-2 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {section.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.path}
                    className="block p-2 text-[#50505d] hover:text-[#0a0a48] transition duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h2 className="text-[#8b7655] text-lg font-medium uppercase mb-3">
                {section.title}
              </h2>
              {section.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.path}
                  className="text-[#50505d] text-lg font-normal pb-2 block hover:text-[#0a0a48] transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
