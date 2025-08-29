import Bar from "../Bar";
import Button from "../Button";
import SoftBuses from "../SoftBuses";
import HeroLogoSection from "./HeroLogoSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const Hero = () => {
  // Gentle animation variants
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      <section className="pb-8 pt-24 md:pt-10 md:pb-12 relative z-[1]">
        <motion.div
          className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center px-4 text-center gap-y-6 md:gap-y-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div
            className="w-32 lg:w-40 h-auto"
            variants={fadeInUpVariants}
          >
            <HeroLogoSection />
          </motion.div>
          {/* Main Text */}
          <motion.div
            className=""
            variants={fadeInUpVariants}
          >
            <h1 className="~sm/xl:~text-2xl/6xl font-bold">
              Empowering businesses with <br />
              <span className="text-primary" style={{ textShadow: '0 0 5px rgba(105, 255, 0, 0.6), 0 0 10px rgba(105, 255, 0, 0.4), 0 0 20px rgba(105, 255, 0, 0.2)' }}>optimal solutions!</span>
            </h1>
          </motion.div>
          {/* Sub Text */}
          <motion.div
            className="w-full flex items-center justify-center"
            variants={fadeInUpVariants}
          >
            <h2 className="text-sm md:text-base text-wrap md:w-3/4 xl:w-1/2 text-center text-white/80 tracking-widest">
              At <SoftBuses />
              , we're pioneering AI-driven innovations to empower businesses with smarter automation and seamless digital experiences.
            </h2>
          </motion.div>
          {/* Call to Action */}
          <motion.div
            className="flex flex-col md:flex-row gap-x-20 w-4/5 sm:w-2/3 md:w-auto gap-y-6"
            variants={fadeInUpVariants}
          >
            <Button text="Get a Quote" type="link" href="#co-create" bg="green" />
            <Button text="See All Projects" type="link" href="#solutions" bg="transparent" />
          </motion.div>
        </motion.div>
      </section>
      <Bar />
    </>
  );
};
