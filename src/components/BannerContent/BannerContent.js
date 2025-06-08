import Image from "next/image";
import React from "react";
import Assets from "../Layout/CommonLayout/asset";

const BannerContent = () => {
  return (
    <>
      <section className="bg-[#fbf2e4] py-10">
        <div className="mx-auto w-[180px] h-[25px] mb-6">
          <Image src={Assets.titleIcon} alt="titleIcon" width={180} height={25} />
        </div>
        <h3 className="text-center text-2xl font-normal leading-normal text-[#50505D] max-w-full sm:max-w-2/3 lg:max-w-1/3 mx-auto">
          Your Home of World-Class Attractions, Hotels, Events and Dining
          Experiences
        </h3>
      </section>
    </>
  );
};

export default BannerContent;
