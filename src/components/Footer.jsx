import React from "react";
import { FaDotCircle, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SoftBuses from "./SoftBuses";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { containerVariants, fadeInUpVariants } from "../utils/onScrollAnimtions";

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61563772225653" },
  { icon: FaLinkedinIn, url: "http://linkedin.com/company/softbuses" },
  { icon: FaInstagram, url: "https://www.instagram.com/softbuses/" },
  { icon: FaXTwitter, url: "https://x.com/SoftBuses" },
  { icon: IoIosMail, url: "mailto:info@softbuses.com" },
];

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    " Web Development",
    " Mobile App Development",
    " AI & Machine Learning",
    " UI/UX Design",
    " Automation Services",
    " Web Scrapping & Data Services",
    " Cloud & DevOps",
  ];

  const sections = [
    { text: "Home", href: "#home" },
    { text: "About Us", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Solutions", href: "#solutions" },
    { text: "Technologies", href: "#technologies" },
    // { text: "Blogs", href: "#blogs" },
    { text: "Contact Us", href: "#co-create" },
  ];


  return (
    <>
      <footer className="pt-20 pb-8">
        <motion.div
          ref={ref}
          className="mx-auto max-w-7xl flex flex-col items-start ~px-6/10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Footer 1 */}
          <motion.div className="w-full mx-auto text-sm" variants={fadeInUpVariants}>
            <div className="flex flex-col gap-y-12 md:flex-row md:gap-x-8 md:items-center md:justify-between">

              {/* Box 1 */}
              <motion.div
                className="flex flex-col items-start justify-center gap-y-6"
                variants={fadeInUpVariants}
              >
                <div className="w-16 h-auto">
                  <img src="verticalLogo.svg" alt="" />
                </div>
                <p className="max-w-[40ch]">
                  <SoftBuses fontSize="text-base md:text-lg" /> is a
                  forward-thinking startup driven by passionate engineers crafting
                  exceptional web and mobile apps. <br /> We leverage cutting-edge
                  technology to deliver innovation, performance, and impact in
                  every project.
                </p>
              </motion.div>

              <motion.div
                className="hidden md:block w-[1px] h-60 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                style={{ originY: 0.5 }}
              />

              {/* Box 2 */}
              <motion.ul
                className="flex flex-col items-start justify-center gap-y-2"
                variants={fadeInUpVariants}
              >
                <li className="mb-4">
                  <h4 className="~text-xl/3xl ">
                    <span className="text-primary font-semibold">Soft</span>
                    <span>Buses</span>
                  </h4>
                </li>
                {sections.map((section, index) => (
                  <li key={index} className="flex items-center gap-x-4">
                    <FaDotCircle size={8} />
                    <a
                      href={section.href}
                      className="decoration-white hover:text-primary underline-offset-4 cursor-pointer transition-all duration-500"
                    >
                      {section.text}
                    </a>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                className="hidden md:block w-[1px] h-60 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                style={{ originY: 0.5 }}
              />

              {/* Box 3 */}
              <motion.ul
                className="flex flex-col items-start justify-center gap-y-2"
                variants={fadeInUpVariants}
              >
                <li className="mb-4">
                  <h4 className="~text-xl/3xl">
                    Our{" "}
                    <span className="text-primary font-semibold">Services</span>
                  </h4>
                </li>
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-x-4">
                    <FaDotCircle size={8} />
                    <span>{service}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
          <div className="mx-auto md:hidden mt-8 w-[100%] h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 " />

          {/* Footer 2 */}
          <motion.div
            className="flex flex-col-reverse md:flex-row w-full justify-between md:mt-8 max-w-[1100px] mx-auto"
            variants={fadeInUpVariants}
          >
            <div className="flex items-center text-center justify-center py-2 mt-4 md:mt-0">
              <p>
                &copy; {new Date().getFullYear()}{" "}
                <SoftBuses /> • All rights
                reserved
              </p>
            </div>

            <div className="mx-auto md:hidden w-[100%] h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 " />
            <ul className="text-2xl text-white flex items-center justify-center gap-x-5 py-4">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a target="__blank" href={`${link.url}`}>
                    <span className="hover:text-primary duration-500 transition-colors">
                      <link.icon />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </footer>
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <hr className="h-4 border-0 w-full rounded-t-[100%] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
      </motion.div>
    </>
  );
};
