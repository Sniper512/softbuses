import Button from "../Button";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { childTranslateY, parentTranslateY } from "../MotionFunctions";

export const SubServicesGrid = ({ subServices = [], imgSrc = "" }) => {
  return (
    <div className=" ~sm/lg:~p-8/20  flex-col items-center bg-[#1b1b1b] justify-center hidden sm:flex gap-y-8 lg:gap-y-12">
      <motion.div
        variants={parentTranslateY}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, amount: 0.5 }}
        className="grid max-w-[1300px] mx-auto grid-cols-2 lg:grid-cols-3  ~sm/lg:~gap-8/14 ~sm/lg:~px-8/20 "
      >
        {subServices.map((services, index) => (
          <motion.li
            variants={childTranslateY}
            key={index}
            className="h-full list-none  bg-[#121212] border border-primary/30 hover:border-white/50 transition-colors duration-500 ease-in-out"
          >
            <div className="flex flex-col items-center justify-center text-center  gap-y-4 py-5 px-3  transition-colors duration-500 ease-out">
              <div className="w-10 h-auto ">
                <img src={`${imgSrc}/${services.icon}.svg`} alt="" />
              </div>
              <h3 className="text-base text-white font-semibold mb-2">
                {services.title}
              </h3>
              <p className="flex-1 text-white/75 text-xs">{services.detail}</p>
            </div>
          </motion.li>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
        viewport={{ once: true, amount: 1 }}
        className="relative group"
      >
        <Button text={"Get a Quote"} type="button" bg="green" />
      </motion.div>
    </div>
  );
};
