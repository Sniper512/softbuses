import React from "react";
import ServicesCarouselMobile from "./SubServicesParts/ServicesCarouselMobile";
import { SectionHeading } from "../landingPage/SectionHeading";
import { SubServicesGrid } from "./SubServicesParts/SubServicesGrid";

export default function SubServices({ subServices }) {
  return (
    <section className="w-full py-10 sm:py-14 md:py-16 lg:py-28   ">
      <div className="max-w-[1660px] mx-auto w-full   flex flex-col gap-y-6 md:gap-y-16   ">
        <div>
          <SectionHeading
            firstTitle="Our "
            secondTitle="Web Development "
            thirdTitle="Services"
          />
        </div>
        <div className="bg-[#1B1B1B]  sm:border-y border-primary/15  ">
          <ServicesCarouselMobile subServices={subServices} />
          <SubServicesGrid subServices={subServices} />
        </div>
        </div>
      </section>
  );
}
