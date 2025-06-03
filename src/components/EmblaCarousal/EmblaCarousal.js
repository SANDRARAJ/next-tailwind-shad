"use client";
import React, { useCallback } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Card from "../Card/Card";
import Assets from "../Layout/CommonLayout/asset";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const endSlider = props.isEndSlider;

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
    {
      img: Assets.roomImg1,
      alt: "roomImg1",
      title: "Equarius Villas",
      content:
        "Book with Equarius Villas, tropical sanctuaries offering an idyllic retreat that comes complete with a private sun deck, access to the pool & a personal butler.",
      button_text: "Explore More",
    },
    {
      img: Assets.roomImg2,
      alt: "roomImg2",
      title: "The Laurus",
      content:
        "Nestled on Sentosa, The Laurus is an all-suite sanctuary where colonial elegance meets tropical charm, offering an enchanting escape for unforgettable moments. Open for bookings from May 2025.",
      button_text: "Explore More",
    },
    {
      img: Assets.roomImg3,
      alt: "roomImg3",
      title: "Hotel Michael",
      content:
        "Step into an art gallery in every one of our maple-accented rooms, a luxurious retreat for art lovers and connoisseurs of fine living.",
      button_text: "Explore More",
    },
    {
      img: Assets.roomImg4,
      alt: "roomImg1",
      title: "Crockfords Tower",
      content:
        "An exclusive all-suite hotel with lavishly furnished rooms, custom-designed furniture and  opulent bathrooms with steam room.",
      button_text: "Explore More",
    },
    {
      img: Assets.roomImg5,
      alt: "roomImg1",
      title: "Hotel Ora",
      content:
        "An exclusive all-suite hotel with lavishly furnished rooms, custom-designed furniture and  opulent bathrooms with steam room.Check-in to Hotel Ora and enjoy a 5-star leisure experience of modern luxury from our guestrooms to our workspaces with dining and world-attractions nearby.",
      button_text: "Explore More",
    },
  ];

  return (
    <section className={`embla `}>
      <div className={`embla__viewport pb-10 ${endSlider ? "overflow-visible" : ""}`} ref={emblaRef}>
        <div className="embla__container">
          {slides.map((data, index) => (
            <div className={`embla__slide ${endSlider ? "w-2/3 !basis-2/3" : ""}`} key={index}>
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-1">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
