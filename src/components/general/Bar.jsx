// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Bar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const barVariants = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <>
      <div className="relative" ref={ref}>
        <motion.hr
          className="h-[1px] border-0 w-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={barVariants}
        />
      </div>
    </>
  );
};

export default Bar;