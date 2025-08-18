import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SoftBuses from "./SoftBuses";

const socialLinks = [
  { icon: FaFacebookF, url: "https://facebook.com" },
  { icon: FaLinkedinIn, url: "https://linkedin.com" },
  { icon: FaInstagram, url: "https://instagram.com" },
  { icon: FaXTwitter, url: "https://twitter.com" },
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
        <div className="mx-auto max-w-7xl flex flex-col items-start px-10">
          {/* Footer 1 */}
          <div className="w-full mx-auto text-sm">
            <div className="pl-4 flex flex-col md:flex-row  gap-y-12  relative">
              <div className="hidden md:block w-[1px] h-[80%] absolute bottom-0 translate-x-1/2 left-[64%] bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
              <div className="hidden md:block w-[1px] h-[80%] absolute bottom-0 translate-x-1/2 left-[36%] bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
              {/* Box 1 */}
              <div className="flex flex-col items-start justify-center md:w-1/3 gap-y-6 p-1">
                <div className="w-16 h-auto">
                  <img src="verticalLogo.svg" alt="" />
                </div>
                <p className="max-w-[250px]">
                  <SoftBuses fontSize="text-base md:text-lg" /> is a
                  forward-thinking startup driven by passionate engineers crafting
                  exceptional web and mobile apps. <br /> We leverage cutting-edge
                  technology to deliver innovation, performance, and impact in
                  every project.
                </p>
              </div>
              {/* Box 2 */}
              <div className="flex flex-col items-start md:items-center justify-center md:w-1/3 gap-y-4 p-1">
                <h4 className="text-3xl ">
                  <span className="text-primary font-semibold">Soft</span>
                  <span>Buses</span>
                </h4>
                <ul className="flex flex-col md:items-center gap-y-1">
                  {sections.map((section, index) => (
                    <li key={index}>
                      <a
                        href={section.href}
                        className="decoration-white hover:text-primary underline-offset-4 cursor-pointer transition-all duration-500"
                      >
                        {section.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Box 3 */}
              <div className="flex flex-col items-start justify-center gap-y-4 p-1 md:w-1/3 md:items-end md:text-right">
                <h4 className="text-3xl ">
                  Our{" "}
                  <span className="text-primary font-semibold">Services</span>
                </h4>
                <ul className="flex flex-col gap-y-1">
                  {services.map((service, index) => (
                    <li key={index}>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto md:hidden mt-8 w-[100%] h-[1px] bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 " />

          {/* Footer 2 */}
          <div className="flex flex-col-reverse md:flex-row w-full justify-between md:~md/xl:~mt-0/8 max-w-[1100px] mx-auto">
            <div className="flex items-center justify-center py-2">
              <p>
                <span className="text-primary">©</span> 2024{" "}
                <SoftBuses /> All rights
                reserved
              </p>
            </div>

            <div className="mx-auto md:hidden  w-[100%] h-[1px] bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 " />
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
        <hr className="h-4 border-0 w-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
      </div>
    </>
  );
};
