import React from "react";
import { SectionHeading } from "./SectionHeading";

export const Blogs = () => {
  return (
    <section className="~/xl:~mt-8/20 mb-20 bg-[#111]">
      <div className="w-full mx-auto max-w-[1660px]  flex-col items-center justify-center ~/xl:~px-6/40   gap-y-8">
        <div className="w-full">
          <SectionHeading firstTitle="Our" secondTitle="Blogs" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="relative group w-full md:w-2/3 ">
            <div className="absolute top-1 rounded-lg right-1 w-full h-full bg-primary "></div>
            <div className="relative    w-full bg-black border-2 border-black text-black">
              Contact 
            </div>
          </div>
          <div className="relative group w-full md:w-1/3 ">
            <div className="absolute top-1 rounded-lg right-1 w-full h-full bg-primary "></div>
            <div className="relative    w-full bg-black border-2 border-black text-black">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
