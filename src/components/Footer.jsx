import React from "react";
import { FaDotCircle, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SoftBuses from "./SoftBuses";

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61563772225653" },
  { icon: FaLinkedinIn, url: "http://linkedin.com/company/softbuses" },
  { icon: FaInstagram, url: "https://www.instagram.com/softbuses/" },
  { icon: FaXTwitter, url: "https://x.com/SoftBuses" },
  { icon: IoIosMail, url: "mailto:info@softbuses.com" },
];

export const Footer = () => {
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
        <div className="mx-auto max-w-7xl flex flex-col items-start ~px-6/10">
          {/* Footer 1 */}
          <div className="w-full mx-auto text-sm">
            <div className="flex flex-col gap-y-12 md:flex-row md:gap-x-8 md:items-center md:justify-between">

              {/* Box 1 */}
              <div className="flex flex-col items-start justify-center gap-y-6">
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
              </div>

              <div className="hidden md:block w-[1px] h-60 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

              {/* Box 2 */}
              <ul className="flex flex-col items-start justify-center gap-y-2">
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
              </ul>

              <div className="hidden md:block w-[1px] h-60 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

              {/* Box 3 */}
              <ul className="flex flex-col items-start justify-center gap-y-2">
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
              </ul>
            </div>
          </div>
          <div className="mx-auto md:hidden mt-8 w-[100%] h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 " />

          {/* Footer 2 */}
          <div className="flex flex-col-reverse md:flex-row w-full justify-between md:mt-8 max-w-[1100px] mx-auto">
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
                <li key={index}>
                  <a target="__blank" href={`${link.url}`}>
                    <span className="hover:text-primary duration-500 transition-colors">
                      <link.icon />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <div className="relative w-full">
        <hr className="h-4 border-0 w-full rounded-t-[100%] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
      </div>
    </>
  );
};
