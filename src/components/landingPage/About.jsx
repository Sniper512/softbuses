import { containerVariants, fadeInUpVariants } from "../../utils/onScrollAnimtions";
import Bar from "../general/Bar";
import { SectionHeading } from "./SectionHeading";
import SoftBuses from "../general/SoftBuses";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="about" className="py-20 relative z-[1]">
        <motion.div
          ref={ref}
          className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40 gap-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading firstTitle="About" secondTitle="Us" />
          <motion.div className="w-full flex items-center justify-center px-4 "
            variants={fadeInUpVariants}
          >
            <p className="w-full md:max-w-3xl xl:max-w-4xl px-4 py-6 border border-primary text-white text-base shadow-glow-2 md:text-lg">
              <SoftBuses /> develops intelligent, AI-powered automation and web scraping solutions that enable businesses to streamline operations, make data-driven decisions, and gain a competitive edge.
              We also create customized web and app solutions that integrate with your automated systems, helping you stand out and provide a seamless customer experience.
            </p>
          </motion.div>
        </motion.div>
      </section>
      <Bar />
    </>
  );
};
