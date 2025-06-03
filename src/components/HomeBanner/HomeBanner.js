import React from "react";
import Assets from "../Layout/CommonLayout/asset";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <>
      <section
        className="w-full h-full relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-gradient-to-b before:from-black/50 before:to-transparent before:bg-opacity-10"
      >
        <figure className="w-full h-screen mb-0 relative">
          <Image
            fill
            src={Assets.bannerImg}
            alt="bannerImg"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>
    </>
  );
};

export default HomeBanner;
