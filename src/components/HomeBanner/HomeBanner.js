import React from "react";
import Assets from "../Layout/CommonLayout/asset";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <>
      <section className="w-full h-full">
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
