import React from "react";
import { tech } from "./arrays";
import { SectionHeading } from "./SectionHeading";

export const TechGridMobile = () => {
  return (
    <section id="technologies" className="mx-auto pt-20 p-6">
      <div className="md:hidden flex flex-col gap-y-12   ">
        <SectionHeading firstTitle="Our" secondTitle="Technologies" />
        <div className="relative">
          <div className="revealed-area-2 z-50 "></div>

          <div className=" grid grid-cols-5 ~/md:~gap-2/5  relative ">
            {/* <div className=" absolute left-0 top-0 bg-gradient-to-r from-black via-transparent to-black w-full h-full z-99" />
          <div className=" absolute left-0 top-0 bg-gradient-to-b from-black via-transparent to-black w-full h-full z-99" /> */}

            {tech.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-evenly  ~sm/md:~py-2/4   rounded transition-shadow duration-300 border-[1px] border-white/20 text-white  bg-white/10 "
              >
                <div className="  mb-3 flex items-center justify-center  relative p-1 w-1/2 ">
                  <img
                    // src={`/technologies/${item.icon}.svg`}
                    src={`/technologies/greenTech/${item.icon}.svg`}
                    alt={item.text}
                    className="~sm/md:~h-3/6 -z-10 absolute left-0 top-0 flex w-full   object-contain  "
                  />
                </div>

                <span className="text-[8px] ~/md:~mt-1/3 md:text-xs font-medium  text-center leading-tight  cursor-default ">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
