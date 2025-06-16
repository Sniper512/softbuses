import React, { useEffect } from "react";
import { tech } from "./arrays";
import { SectionHeading } from "./SectionHeading";

export const TechGridDesktop = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const gradientCenterX = (mouseX / window.innerWidth) * 100;
      const gradientCenterY = (mouseY / window.innerHeight) * 100;

      const revealedArea = document.querySelector(".revealed-area");
      if (revealedArea) {
        revealedArea.style.background = `radial-gradient(
          circle 400px at ${gradientCenterX}% ${gradientCenterY}%,
          transparent 10%,
          rgba(0, 0, 0, 0.98)
        )`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className=" mx-auto  hidden md:flex  max-w-[1660px]">
      <div className="flex flex-col items-start justify-center gap-y-12  mx-auto  ~md/xl:~px-[3.1rem]/[10rem]">
        <div className="px-0 ">
          <SectionHeading firstTitle="Our" secondTitle="Technologies" />
        </div>
        <div className="relative">
          <div className="revealed-area z-50 "></div>
          <div className="grid grid-cols-5 gap-6 w-full ~md/xl:~max-w-[38rem]/[72rem] mx-auto  relative ">
            {/* <div className=" absolute left-0 top-0 bg-gradient-to-r from-black via-transparent to-black w-full h-full z-99" /> */}
            {/* <div className=" absolute left-0 top-0 bg-gradient-to-b from-black via-transparent to-black w-full h-full z-99" /> */}

            {tech.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-evenly ~md/xl:~py-2/4 ~md/xl:~px-8/16  ٖrounded-xl transition-shadow duration-300 border-[1px] border-white/20 text-white hover:text-primary hover:border-primary/70 bg-white/10 group"
              >
                <div className="  mb-3 flex items-center justify-center overflow-visible relative  w-full  ">
                  <div className="p-1">
                    <img
                      src={`/technologies/${item.icon}.svg`}
                      alt={item.text}
                      className="h-6 group-hover:opacity-0 -z-10  absolute left-1 top-1 flex w-full   object-contain text-primary transition-opacity duration-300 opacity-100"
                    />
                  </div>
                  <div className="p-1">
                    <img
                      src={`/technologies/greenTech/${item.icon}.svg`}
                      alt={item.text}
                      className="h-6  w-full   object-contain text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

                <span className="text-[8px] z-0 md:text-xs font-medium  text-center text-nowrap leading-tight cursor-default ">
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
