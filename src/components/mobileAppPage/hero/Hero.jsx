import {
  containerVariants,
  fadeInUpVariants,
} from "../../../utils/onScrollAnimtions";
import Bar from "../../general/Bar";
import Button from "../../general/Button";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="hero-img">
      <motion.div
        className=" mx-auto max-w-[1660px] pb-8 pt-28 relative z-[1] ~px-6/40 md:~md/lg:~pt-32/52 md:~md/lg:~pb-8/16 "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:~md:~gap-6/32">
          <div className="flex flex-col items-center justify-center text-center gap-y-6 md:text-left md:items-start">
            {/* Main Text */}
            <motion.div variants={fadeInUpVariants}>
              <h1
                className="~sm/xl:~text-2xl/6xl font-bold"
                style={{ lineHeight: "1.2" }}
              >
                Your{" "}
                <span
                  className="text-primary"
                  style={{
                    textShadow:
                      "0 0 5px rgba(105, 255, 0, 0.6), 0 0 10px rgba(105, 255, 0, 0.4), 0 0 20px rgba(105, 255, 0, 0.2)",
                  }}
                >
                  Idea,
                </span>{" "}
                Our Code <br />
                <span
                  className="text-primary"
                  style={{
                    textShadow:
                      "0 0 5px rgba(105, 255, 0, 0.6), 0 0 10px rgba(105, 255, 0, 0.4), 0 0 20px rgba(105, 255, 0, 0.2)",
                  }}
                >
                  Apps
                </span> {" "}
                That Users Love
              </h1>
            </motion.div>
            {/* Sub Text */}
            <motion.h2
              className="text-sm text-justify text-white/80 tracking-widest md:text-base md:text-left"
              variants={fadeInUpVariants}
            >
              We design and build world-class iOS, Android, and cross-platform
              apps that are fast, secure, and built to scale. From concept to
              App Store launch, we&apos;ve got you covered.{" "}
            </motion.h2>
          </div>
          <motion.div
            className="w-3/4 h-auto sm:w-1/2  md:w-full  md:max-w-[450px]    "
            variants={fadeInUpVariants}
          >
            <img
              src="/HeroImages/mobileAppHero.svg"
              alt="Hero Background"
              className="w-full h-full object-contain "
            />
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center ~mt-4/8"
          variants={fadeInUpVariants}
        >
          <Button
            text="Build My Mobile App"
            type="hashlink"
            href="/#co-create"
            bg="green"
          />
        </motion.div>
      </motion.div>
      <Bar />
    </section>
  );
};
