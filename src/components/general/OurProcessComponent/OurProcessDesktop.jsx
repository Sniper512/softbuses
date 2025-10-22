import { SectionHeading } from "../../landingPage/SectionHeading";

import { webDevServiceProcess } from "../../../assets/ServicesComponentsData/OurProcessData";
import {
  containerVariants,
  fadeInUpVariants,
} from "../../../utils/onScrollAnimtions";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function OurProcessDesktop({ ourProcessData = [] }) {
  return (
    <>
      <div className="   md:h-16 lg:h-28   w-full bg-[#121212] "></div>
      <section className="w-full our-process-image hidden md:block    ">
        <div className="max-w-[1660px] mx-auto w-full   flex flex-col gap-y-6 md:gap-y-24  ~md/lg:~px-4/8 ~md/[137.5rem]:~py-16/56  ">
          <div className=" text-center">
            <SectionHeading firstTitle="Our " secondTitle="Process " />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex text-center relative    max-w-[1280px] mx-auto"
          >
            {/* Line from center of first dot to center of last dot */}
            <div
              className="absolute top-0 h-[2px] bg-primary z-0"
              style={{
                left: `${50 / ourProcessData.length}%`,
                right: `${50 / ourProcessData.length}%`,
                top: "-20px",
              }}
            />

            {ourProcessData.map((process, index) => (
              <div className="relative flex-1  px-3 " key={index}>
                {/* Dot at the center of each process step */}
                <div className="absolute -top-[35px] left-1/2 -translate-x-1/2 z-10 ">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                </div>
                <motion.div
                  variants={fadeInUpVariants}
                  className="flex flex-col group "
                >
                  <h3 className="text-xl font-semibold mt-4 group-hover:text-primary transition-colors duration-300 min-h-[4rem] flex items-center justify-center">
                    {process.title}
                  </h3>
                  <p className="text-[10px] text-white/60 group-hover:text-primary transition-colors duration-300 mt-4">
                    {process.detail}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
