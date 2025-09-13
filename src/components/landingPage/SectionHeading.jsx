// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { containerVariants } from "../../utils/onScrollAnimtions";

export const SectionHeading = ({
  firstTitle = "",
  secondTitle = "",
  thirdTitle = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const firstTitleVariants = {
    hidden: {
      opacity: 0,
      x: -40,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const secondTitleVariants = {
    hidden: {
      opacity: 0,
      x: 40,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className="w-full "
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h2 className="~sm/xl:~text-[1.5rem]/[2.5rem] font-bold space-x-2 text-wrap items-center gap-x-2 justify-center">
        <motion.span variants={firstTitleVariants} className="inline-block">
          {firstTitle}
        </motion.span>
        <motion.span
          variants={secondTitleVariants}
          className="inline-block text-primary"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px rgba(105, 255, 0, 0.6)",
            transition: { duration: 0.2 },
          }}
        >
          {secondTitle}
        </motion.span>
        <motion.span variants={firstTitleVariants} className="inline-block">
          {thirdTitle}
        </motion.span>
      </h2>
    </motion.div>
  );
};
