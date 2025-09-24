import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServicesCarouselMobile.css";
import Button from "../Button";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function ServicesCarouselMobile({ subServices = [], imgSrc = "" }) {
  // Custom dots component to avoid absolute positioning issues
  const customDots = (dots) => (
    <div className="flex justify-center items-center gap-2 mt-6">{dots}</div>
  );

  // Custom paging for individual dot styling
  const customPaging = (i) => (
    <button className="w-3 h-3 rounded-full bg-[#D9D9D9] hover:bg-[#69FF00] transition-colors duration-300">
      <span className="sr-only">Go to slide {i + 1}</span>
    </button>
  );

  const settings = {
    className: "center",
    centerMode: true,
    arrows:false,
    dots: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    appendDots: customDots,
    customPaging: customPaging,
    dotsClass: "custom-dots-class",
  };

  return (
    <ul className="  sm:hidden py-8  ">
      <Slider {...settings}>
        {subServices.map((services, index) => (
          <li
            key={index}
            className="h-full bg-[#121212] border border-primary/30"
          >
            <div className="flex flex-col items-center justify-center text-center   gap-y-4 py-5 px-3  transition-colors duration-500 ease-out">
              <div className="w-10 h-auto ">
                <img src={`${imgSrc}/${services.icon}.svg`} alt="" />
              </div>
              <h3 className="text-base text-white font-semibold mb-2">
                {services.title}
              </h3>
              <p className="flex-1 text-white/75 text-xs">{services.detail}</p>
            </div>
          </li>
        ))}
      </Slider>
      <li className=" flex  items-center justify-center mt-6">
        <motion.div 
                initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3}}
        viewport={{ once: true, amount: 1 }}

        className="relative group">
          <Button text={"Get a Quote"} type="button" bg="green" />
        </motion.div>
      </li>
    </ul>
  );
}
