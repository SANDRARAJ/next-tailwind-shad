"use client";
import React, { useState } from "react";
import Assets from "../Layout/CommonLayout/asset";
import Link from "next/link";
import Image from "next/image";

const HoverTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Adventure Cove Waterpark",
      content:
        "Get your swimsuits ready for a thrilling, water-packed adventure.",
      image: Assets.acwHome,
      alt: "aquarium",
      button_label: "Explore Now",
    },
    {
      id: "tab2",
      label: "Singapore Oceanarium",
      content: "A bold new ocean experience is surfacing soon.",
      image: Assets.seaHome,
      alt: "sea home",
      button_label: "Explore Now",
    },
    {
      id: "tab3",
      label: "Universal Studios Singapore",
      content:
        "Explore all 7 adventure-filled zones featuring thrilling rides.",
      image: Assets.ussHome,
      alt: "uss home",
      button_label: "Explore Now",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 py-10">
      <div className="">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className="animate-[fadeIn_1s_ease-in-out] h-full "
              >
                <figure className="w-full h-full aspect-square relative">
                  <Image src={tab?.image} alt={tab?.alt} fill className="object-cover" />
                </figure>
              </div>
            )
        )}
      </div>
      <div>
        <Image
          src={Assets.subtitleIcon}
          width={86}
          height={25}
          alt="subtitleIcon"
          className="mb-2"
        />
        <p className="mb-4 text-[#50505D] text-base uppercase font-light">
          Experience
        </p>
        <h3 className="mb-2 text-[40px] text-[#c4ab82] font-normal leading-normal">
          Awesome Adventures
        </h3>
        <p className="text-2xl leading-snug mb-4 text-[#17171c] max-w-full">
          From thrilling rides to enriching marine life encounters, there are many ways to play and be amazed, all in one place.
        </p>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            onMouseEnter={() => setActiveTab(tab.id)}
            className="p-6 mt-12 bg-white border-b border-[#dee2e6] flex gap-x-5 items-center hover:bg-[#fffcf7] transition-bg duration-300 ease-in-out"
          >
            <div className="basis-[120px] w-[120px]">
              <Image src={tab?.image} alt={tab?.alt} width={120} height={120} />
            </div>
            <div className="basis-[58%] w-[58%]">
              <h3 className="text-2xl text-[#50505d] mb-1.5">{tab?.label}</h3>
              <p className="text-lg mb-1.5">{tab?.content}</p>
              <Link
                href={"/"}
                className="text-[#c4ab82] underline hover:text-[#0056b3] underline-offset-2 transition-all duration-300 ease-in-out"
              >
                {tab?.button_label}
              </Link>
            </div>
            <div className="basis-[130px] w-[130px]">
              <Link
                href={"/"}
                className="border border-[#ceced5] p-3 hover:bg-[#e4e4e7] hover:border-[#e4e4e7] transition-all ease-in-out duration-300 text-lg inline-block"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverTabs;
