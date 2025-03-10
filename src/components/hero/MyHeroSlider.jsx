import React from "react";
import HeroSlider, { Slide, MenuNav } from "hero-slider";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const MyHeroSlider = () => {
  return (
    <>
      <HeroSlider
        height={"100vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        {/* <Overlay>
          <Wrapper>
            <Title>Basic Setup</Title>
            <Subtitle>
              Check out the documentation for more advanced examples.
            </Subtitle>
          </Wrapper>
        </Overlay> */}

        <Slide
          shouldRenderMask
          label="Giau Pass - Italy"
          background={{
            backgroundImageSrc: giauPass,
          }}
        />

        <Slide
          shouldRenderMask
          label="Bogliasco - Italy"
          background={{
            backgroundImageSrc: bogliasco,
          }}
        />

        <Slide
          shouldRenderMask
          label="County Clare - Ireland"
          background={{
            backgroundImageSrc: countyClare,
          }}
        />

        <Slide
          shouldRenderMask
          label="Crater Rock, OR - United States"
          background={{
            backgroundImageSrc: craterRock,
          }}
        />

        <MenuNav />
      </HeroSlider>
    </>
  );
};

export default MyHeroSlider;
