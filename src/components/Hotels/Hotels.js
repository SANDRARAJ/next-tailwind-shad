import Image from "next/image";
import React from "react";
import Assets from "../Layout/CommonLayout/asset";
import Link from "next/link";
import EmblaCarousel from "../EmblaCarousal/EmblaCarousal";

const Hotels = () => {
  return (
    <>
      <section className="py-10 bg-[#fffcf7]">
        <div className="container">
          <Image
            src={Assets.subtitleIcon}
            width={86}
            height={25}
            alt="subtitleIcon"
            className="mb-2"
          />
          <p className="mb-4 text-[#50505D] text-base uppercase font-light">
            our hotels
          </p>
          <h3 className="mb-2 text-[40px] text-[#c4ab82] font-normal leading-normal">
            From ultimate exclusivity to endless celebrations
          </h3>
          <p className="text-2xl leading-snug mb-4 text-[#17171c] max-w-3/4">
            There’s a stay for all at Resorts World Sentosa and a hotel to match
            the experience from ultimate exclusivity to endless celebrations.
          </p>
          <Link
            href={"/"}
            className="border border-[#ceced5] p-3 hover:bg-[#e4e4e7] hover:border-[#e4e4e7] transition-all ease-in-out duration-300 text-lg inline-block"
          >
            View All Hotels
          </Link>
          <div className="mt-12 w-full">
            <EmblaCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotels;


