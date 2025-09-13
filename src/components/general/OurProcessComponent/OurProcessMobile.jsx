import { SectionHeading } from "../../landingPage/SectionHeading";
import { webDevServiceProcess } from "../../../assets/ServicesComponentsData/OurProcessData";
import {
  containerVariants,
  fadeInUpVariants,
} from "../../../utils/onScrollAnimtions";
import { motion } from "motion/react";

export default function OurProcessMobile() {
  return (
    <section className="w-full our-process-image md:hidden">
      <div className="max-w-[1660px] mx-auto w-full flex flex-col gap-y-12 py-10 sm:py-14">
        <div className="text-center">
          <SectionHeading firstTitle="Our " secondTitle="Process " />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col text-center relative max-w-[400px] mx-auto px-4 gap-y-10"
        >
          {/* Vertical connecting line */}
          <div
            className="absolute w-[1px] bg-primary z-0"
            style={{
              left: "32px", // Position at center of dots (left margin + half dot width)
              top: "1rem", // Start at first dot center
              height: `calc(100% - 9rem)`, // Connect from first to last dot
            }}
          />

          {webDevServiceProcess.map((process, index) => (
            <motion.div
              variants={fadeInUpVariants}
              className="flex ~/md:~gap-x-3/8 "
              key={index}
            >
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary" />
              </div>

              <div className="flex flex-col gap-y-4   max-w-[250px]">
                <h3 className="relative text-lg font-semibold ">
                  {process.title}
                </h3>
                <p className="text-sm text-white/60  px-4">{process.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
