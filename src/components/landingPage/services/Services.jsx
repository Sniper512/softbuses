import Bar from "../../general/Bar";
import Button from "../../general/Button";
import { SectionHeading } from "../SectionHeading";

// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { containerVariants, fadeInUpVariants } from "../../../utils/onScrollAnimtions";
import { ServicesSections } from "./ServicesSections";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="services" className="py-20">
        <motion.div
          ref={ref}
          className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40 gap-y-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading firstTitle="See Our" secondTitle="Services" />
          <ServicesSections />
          <motion.div variants={fadeInUpVariants}>
            <Button text="Get a Quote" type="hashlink" href="/#co-create" />
          </motion.div>
        </motion.div>
      </section>
      <Bar />
    </>
  );
};

export default Services;
