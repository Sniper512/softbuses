import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { SectionHeading } from "./SectionHeading";
import { projects } from "./arrays";

export const Projects = () => {
  const facilities = [
    "Live & Recorded Learning Options",
    "Expert Tutors & Life Coaches",
    "Personalized Learning Experience",
    "Built with Modern Web Technologies",
    "Secure Payments & Easy Access",
    "Fast, Scalable, and Reliable Hosting",
  ];
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 1000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440, // From 900 to 1100
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1100, // From 768 to 900
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // Below 768
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="~/xl:~mt-8/20 mb-20">
      <div className="w-full mx-auto max-w-[1660px]  ~/xl:~px-6/40    ">
        <div>
          <SectionHeading firstTitle="Our" secondTitle="Projects" />
        </div>
        {/* First Part */}
        <div className="mt-8">
          <Slider className="" {...settings}>
            {projects.map((project, index) => (
              <div className="px-2 md:px-6 " key={index}>
                <div className=" flex  flex-col items-center justify-center p-4  bg-white/10 border-2 border-primary/60 rounded-lg space-y-2 hover:border-primary transition-colors duration-300 ease-in-out ">
                  <div className="~sm/xl:~w-7/12  h-auto  mx-auto">
                    <img src={project.icon} className="w-full h-auto" />
                  </div>
                  <h3 className="~sm/xl:~text-xs/base text-center text-[#A98BFF]">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mx-auto ~sm/xl:~mt-8/16 w-[75%] h-[1px] bg-white/20 " />

        {/* Second Part */}
        <div className=" ~sm/xl:~mt-8/20 bg-[#1B1B1B]  w-full flex flex-col  md:flex-row-reverse  items-center justify-between ~sm/xl:~py-6/12 border-primary  border border-opacity-45  gap-y-12 ~md/xl:~px-6/12 ">
          {/* Image Section */}
          <div className="  w-full md:w-[55%] xl:w-[65%] flex items-center justify-center md:justify-end">
            <div className="~sm/lg:~w-[23.4rem]/[40rem] h-auto ">
              <img src="mobileAndLaptop.svg" alt="" className="w-full h-auto" />
            </div>
          </div>
          {/* Text Section */}
          <div className="flex w-full  h-full md:w-[45%] xl:w-[35%] flex-col items-center md:items-start  justify-between gap-y-3 ">
            <div className="flex items-center justify-start gap-x-5">
              <div>
                <img src="empoweredLearningLogo.svg" alt="" />
              </div>
              <h3 className="~sm/xl:~text-lg/3xl  font-semibold">
                Empower<span className="text-[#7C4DFF] mr-2">Ed</span> Learnings
              </h3>
            </div>
            <ul>
              {facilities.map((facility, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base xl:text-[17px] font-medium  flex  items-center justify-start  gap-x-5 ~sm/xl:~mt-1.5/3.5 "
                >
                  <div className="relative h-5 w-5">
                    <div className="absolute top-[3px] left-[3px] h-4 w-4 bg-primary"></div>

                    <div className="absolute top-0 left-0 h-4 w-4 bg-black border-[2px] border-white"></div>
                  </div>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto ~sm/xl:~mt-8/16 w-[75%] h-[1px] bg-white/20 " />
      </div>
    </section>
  );
};
