import { links } from "../arrays";
import Bar from "../Bar";
import { ContactButton } from "../ContactButton";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { headerContactAndHamVariants, headerLogoVariants } from "../../utils/onScrollAnimtions";

export const HeaderDesktop = () => {
  const [showContactLink, setShowContactLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowContactLink(scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Static Logo and Contact Button - scrolls with page */}
      <header className="hidden md:flex justify-between items-center px-10 lg:px-20 xl:px-36 py-3 relative z-[998] lg:py-4">
        {/* Logo */}
        <motion.div
          className="w-36"
          initial="hidden"
          animate="visible"
          variants={headerLogoVariants}
        >
          <img src="horizontalLogo.svg" className="w-full h-auto" alt="" />
        </motion.div>
        {/* Spacer to maintain layout */}
        <div className="flex-1"></div>
        {/* Contact Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerContactAndHamVariants}
        >
          <ContactButton />
        </motion.div>
      </header>
      <Bar />

      {/* Fixed Navigation Links with blur background */}
      <nav
        className={`hidden md:flex items-center fixed top-4 left-1/2 -translate-x-1/2 z-[999] transition-all duration-300 backdrop-blur-lg bg-primary-dark/50 rounded-full border-[.5px] border-primary/30 px-2 py-1`}
      >
        <div className="flex text-xxs lg:text-xs items-center justify-center">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-white tracking-widest hover:text-primary-medium cursor-pointer transition-colors duration-200 py-0.5 px-1.5 lg:py-1 lg:px-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
        {/* Contact Us link with animation */}
        <div
          className={`grid w-max transition-all duration-500 ease-in-out ${showContactLink
            ? 'grid-cols-[1fr] ml-2'
            : 'grid-cols-[0fr] ml-0'
            }`}
        >
          <div className="overflow-hidden">
            <a
              href="#co-create"
              className="block text-xxs text-white border border-primary/20 hover:bg-primary-dark px-2 py-1.5 rounded-full tracking-widest cursor-pointer duration-200 whitespace-nowrap lg:text-xs lg:px-3 lg:py-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
