import React from "react";
import { SectionHeading } from "./SectionHeading";
import { servicesAvailable } from "./arrays";

const Services = () => {
  const sections = () => {
    return (
      <div className={`flex items-center justify-center  `}>
        <div className="relative  ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative px-5 py-3 bg-black  text-primary text-lg font-bold ">
            {servicesAvailable.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute top-2 left-2 w-full h-full bg-primary group-hover:bg-white transition-colors duration-300"></div>
                <div
                  key={index}
                  className=" z-10 border-2 border-white group bg-[#121212]  relative p-4     h-full flex flex-col  justify-evenly     gap-y-3     "
                >
                  <div className="">{item.service}</div>
                  <ul className="flex-1">
                    {item.detail.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-white text-xs md:text-sm px-4 py-1 flex  items-center justify-start space-x-4 font-normal"
                      >
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="~/xl:~mt-8/20">
      <div className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40   gap-y-8">
        <SectionHeading firstTitle="See Our" secondTitle="Services" />
        <div>{sections()}</div>
        {/* button */}
        <div className="relative group mt-5 md:mt-8">
          <div className="absolute top-1 left-1 w-full h-full bg-primary group-hover:bg-white transition-colors duration-300"></div>
          <button className="relative ~sm/xl:~px-5/16 py-3  w-full bg-black group-hover:bg-primary group-hover:border-black border-2 border-white text-primary group-hover:text-black text-lg font-bold transition-colors duration-300  cursor-pointer">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
