// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const TechSubCard = ({ title, icon, href }) => {
  const subCardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      },
    },
  };
  return (
    <motion.a href={href} target="_blank" className="min-w-[5.5rem] w-[5.5rem] sm:min-w-40 sm:w-40 bg-dark border ~rounded-xl/2xl shadow-md flex flex-col items-center justify-center ~px-2/3 ~py-2/4 brightness-[.4] transition-transform hover:border-primary hover:brightness-100"
      variants={subCardVariants}
      whileHover={{
        scale: 1.05,
        y: -3,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={icon} alt={title} className="~w-4/6 ~h-4/6 ~mb-1/4" />
      <h2 className="~text-xxxs/xs text-center">{title}</h2>
    </motion.a>
  );
}

export default TechSubCard