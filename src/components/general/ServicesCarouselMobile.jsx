import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServicesCarouselMobile.css";
import { SectionHeading } from "../landingPage/SectionHeading";
import { webDevServices } from "../../assets/ServicesComponentsData/OurServicesData";

export default function ServicesCarouselMobile() {
  // Custom dots component to avoid absolute positioning issues
  const customDots = (dots) => (
    <div className="flex justify-center items-center gap-2 mt-6">
      {dots}
    </div>
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
    dots: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    appendDots: customDots,
    customPaging: customPaging,
    dotsClass: "custom-dots-class",
    responsive: [
      // {
      //   breakpoint: 900,
      //   settings: {
      //     centerPadding: "150px",
      //     slidesToShow: 1,
      //   },
      // },
    ],
  };

  return (
    <section className="w-full py-10 sm:py-14 md:py-20 lg:py-40   overflow-x-hidden">
      <div className="max-w-[1660px] mx-auto w-full   flex flex-col gap-y-6 md:gap-y-16   ">
        <div className="w-full flex justify-center bg-gray-800 items-center">
          <SectionHeading
            firstTitle="Our "
            secondTitle="Web Development "
            thirdTitle="Services"
          />
        </div>
        <div className="bg-[#1B1B1B]">
          <ul className="  sm:hidden  ">
            <Slider {...settings}>
              {webDevServices.map((services, index) => (
                <li key={index} className="h-full bg-[#121212] border border-primary/30">
                  <div className="flex flex-col items-center justify-center text-center   gap-y-4 py-5 px-3  transition-colors duration-500 ease-out">
                    <div className="w-10 h-auto ">
                      <img src="/temp.svg" alt="" />
                    </div>
                    <h3 className="text-base text-white font-semibold mb-2">
                      {services.title}
                    </h3>
                    <p className="flex-1 text-white/75 text-xs">
                      {services.detail}
                    </p>
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </section>
  );
}
