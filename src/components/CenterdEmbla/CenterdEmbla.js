"use client";
import React, { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../EmblaCarousal/EmblaCarouselArrowButtons";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/asset";

const CenterdEmbla = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  const slides = [
    { img: Assets.roomImg1, alt: "roomImg1" },
    { img: Assets.roomImg2, alt: "roomImg2" },
    { img: Assets.roomImg3, alt: "roomImg3" },
    { img: Assets.roomImg4, alt: "roomImg4" },
    { img: Assets.roomImg5, alt: "roomImg5" },
    { img: Assets.roomImg2, alt: "roomImg2" },
    { img: Assets.roomImg3, alt: "roomImg3" },
  ];

  return (
    <>
      <section className="embla w-full">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container ">
            {slides.map((data, index) => (
              <div className="embla__slide" key={index}>
                <figure className="relative aspect-[0.58] ">
                  <Image src={data?.img} alt={data?.alt} fill className="object-cover"/>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CenterdEmbla;
