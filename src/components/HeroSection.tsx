import React from "react";

// Import Swiper components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules"; // Import modules

// Import images
import logo from "../assets/images/logo.jpg";
import HeroImg1 from "../assets/images/hero/1.png";
import HeroImg2 from "../assets/images/hero/2.jpg";
import HeroImg3 from "../assets/images/hero/3.jpeg";
import HeroImg4 from "../assets/images/hero/4.jpeg";
import HeroImg5 from "../assets/images/hero/5.jpeg";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5];

const HeroSection: React.FC = () => {
  return (
    <section className="h-[100svh] md:h-screen relative hero overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="absolute w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="relative" key={index}>
            <div
              className="h-screen z-10 relative w-full"
              style={{
                backgroundImage: `linear-gradient(hsla(0, 2%, 11%, 0.7), hsla(0, 2%, 11%, 0.7)), url(${slide})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center text-center">
        <img
          className="size-24 rounded-full mb-4"
          src={logo}
          alt="poolinaria პულინარია logo"
        />
        <h1 className="text-3xl font-bold text-gray-300 leading-10">
          — Poolinaria — <br /> საუკეთესო ადგილი გასართობად
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
