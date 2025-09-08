import Bar from "../../general/Bar";
import { SectionHeading } from "../SectionHeading";
import { ContactForm } from "./ContactForm";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { containerVariants, fadeInUpVariants } from "../../../utils/onScrollAnimtions";

export const CoCreateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="co-create" className="py-20">
        <motion.div
          ref={ref}
          className="w-full mx-auto max-w-[1660px] ~/xl:~px-6/40 flex flex-col items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="w-full" variants={fadeInUpVariants}>
            <SectionHeading firstTitle="Co-create " secondTitle="with us" />
          </motion.div>
          <motion.div 
            className="w-full flex flex-col  md:flex-row-reverse bg-white/5 border-[1px] border-primary/25 gap-y-8  mt-8 md:mt-12 md:px-4 md:py-8"
            variants={fadeInUpVariants}
          >
            {/* First half */}
            <motion.div className="w-full md:w-1/2 p-4" variants={fadeInUpVariants}>
              <div className="mb-8">
                <h4 className=" ~sm/xl:~text-2xl/4xl text-primary font-semibold mb-4">
                  Ready to Get a Quote?
                </h4>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                  Let's bring your digital vision to life! Whether you need a
                  sleek web app, cutting-edge AI integration, intuitive UI/UX, or
                  powerful automation tools—our expert team is ready to
                  collaborate and build something remarkable with you.
                </p>
              </div>

              <ContactForm />
            </motion.div>

            {/* Second half */}
            <motion.div 
              className="hidden md:w-1/2 md:flex items-center justify-center p-2 py-12 md:py-2"
              variants={fadeInUpVariants}
            >
              <img
                src="coCreateIcon.svg"
                alt="Co-create with us"
                className="w-full h-auto max-w-[500px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Bar />
    </>
  );
};
