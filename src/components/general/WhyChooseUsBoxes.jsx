import { SectionHeading } from "../landingPage/SectionHeading";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  containerVariants,
  fadeInUpVariants,
} from "../../utils/onScrollAnimtions";

export const WhyChooseUsBoxes = ({
  featuresData,
  subtitle = "",
  imgSrc = "",
}) => {
  return (
    <section className="w-full ">
      <div className="mx-auto max-w-[1660px] flex flex-col ~sm/lg:~gap-y-6/10 ~px-6/40 ~sm/lg:~py-10/24 ">
        <div className="flex  ~sm/lg:~gap-y-5/7 flex-col items-center justify-center">
          <div>
            <SectionHeading firstTitle="Why" secondTitle="Choose Us" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 1 }}
            className="lg:max-w-[1000px] text-center ~sm/xl:~text-sm/base"
          >
            {subtitle}
          </motion.p>
        </div>
        {featuresData.length === 4 && (
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ~sm/lg:~gap-y-6/16 ~sm/lg:~gap-x-6/11 "
          >
            {featuresData.map((feature, index) => (
              <motion.li
                variants={fadeInUpVariants}
                key={index}
                className="flex flex-col items-center justify-center text-center border border-white/60 hover:border-primary gap-y-4 py-4 px-3 rounded transition-colors duration-500 ease-out"
              >
                <div className="w-10 h-auto">
                  <img src={`${imgSrc}/${feature.icon}.svg`} alt="" />
                </div>
                <h3 className="text-base text-white font-semibold mb-2">
                  {feature.title}
                </h3>
                {/* <p className="flex-1 text-white/75 text-base">{feature.detail}</p> */}
              </motion.li>
            ))}
          </motion.ul>
        )}
        {featuresData.length === 5 && (
          <div className="max-w-[1300px] mx-auto ~sm/lg:~gap-y-10/16 flex flex-col">
            {/* First row with 3 items */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ~sm/lg:~gap-y-10/16 ~sm/lg:~gap-x-6/11 mb-4"
            >
              {featuresData.slice(0, 3).map((feature, index) => (
                <motion.li
                  variants={fadeInUpVariants}
                  key={index}
                  className={`w-full max-w-[300px] mx-auto flex flex-col items-center justify-center text-center border border-white/60 hover:border-primary gap-y-4 py-3 px-2 rounded transition-colors duration-500 ease-out ${
                    index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-10 h-auto">
                    <img src={`${imgSrc}/${feature.icon}.svg`} alt="" />
                  </div>
                  <h3 className="text-base text-white font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="flex-1 text-white/75 text-sm">
                    {feature.detail}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
            {/* Second row with 2 items centered */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col sm:flex-row justify-center ~sm/lg:~gap-y-10/16 ~sm/lg:~gap-x-6/11 max-w-2xl mx-auto"
            >
              {featuresData.slice(3, 5).map((feature, index) => (
                <motion.li
                  variants={fadeInUpVariants}
                  key={index + 3}
                  className="w-full max-w-[300px]  flex flex-col items-center justify-center text-center border border-white/60 hover:border-primary gap-y-4 py-4 px-3 rounded transition-colors duration-500 ease-out"
                >
                  <div className="w-10 h-auto">
                    <img src={`${imgSrc}/${feature.icon}.svg`} alt="" />
                  </div>
                  <h3 className="text-base text-white font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="flex-1 text-white/75 text-sm">
                    {feature.detail}
                  </p>
                </motion.li>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
