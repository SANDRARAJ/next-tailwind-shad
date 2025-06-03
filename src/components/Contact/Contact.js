import React from "react";
import CenterdEmbla from "../CenterdEmbla/CenterdEmbla";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/asset";
import EmblaCarousel from "../EmblaCarousal/EmblaCarousal";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className="py-10 h-[920px]">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="pt-40 pl-24">
            <Image
              src={Assets.subtitleIcon}
              width={86}
              height={25}
              alt="subtitleIcon"
              className="mb-2"
            />
            <p className="mb-4 text-[#50505D] text-base uppercase font-light">
              Restaurants
            </p>
            <h3 className="mb-2 text-[40px] text-[#c4ab82] font-normal leading-normal max-w-2/3">
              Dine
            </h3>
            <p className="text-2xl leading-normal text-[#17171c] max-w-3/4 mb-12">
              Indulge in a culinary journey from sumptuous lunches to
              unforgettable evenings.
            </p>
            <Link
              href={"/"}
              className="border border-[#ceced5] p-3 hover:bg-[#e4e4e7] hover:border-[#e4e4e7] transition-all ease-in-out duration-300 text-lg inline-block"
            >
              View All Restaurants
            </Link>
          </div>
          <div className="relative ">
            <div className="absolute left-0 top-0">
              <EmblaCarousel isEndSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
