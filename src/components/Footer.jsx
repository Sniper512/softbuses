import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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
    "Home",
    "About Us",
    "Services",
    "Technologies",
    "Projects",
    "Blogs",
    "Contact Us",
  ];

  return (
    <footer className="bg-primary/10 ~/xl:~ ">
      <div className="max-w-[1660px] flex flex-col items-start px-10 py-8">
        {/* Footer 1 */}
        <div className="w-full sm:w-[90%] mx-auto text-sm  max-w-[1300px]">
          <div className="pl-4 flex flex-col sm:flex-row  gap-y-12  relative">
            <div className="hidden sm:block w-[1px] h-[80%] absolute bottom-0 translate-x-1/2 left-[64%] bg-white/30" />
            <div className="hidden sm:block w-[1px] h-[80%] absolute bottom-0 translate-x-1/2 left-[36%] bg-white/30" />
            {/* Box 1 */}
            <div className="flex flex-col items-start sm:items-center justify-center sm:w-1/3 gap-y-6 p-1">
              <div className="w-16 h-auto">
                <img src="verticalLogo.svg" alt="" />
              </div>
              <p className="sm: max-w-[250px] ">
                <span className="text-primary ">Soft</span>Buses is a
                forward-thinking startup driven by passionate engineers crafting
                exceptional web and mobile apps. <br /> We leverage cutting-edge
                technology to deliver innovation, performance, and impact in
                every project.
              </p>
            </div>
            {/* Box 2 */}
            <div className="flex flex-col  items-start sm:items-center justify-center sm:w-1/3 gap-y-4  p-1">
              <h4 className="text-3xl">
                <span className="text-primary font-semibold">Soft</span>Buses
              </h4>
              <ul className="flex flex-col gap-y-1  ">
                {sections.map((section, index) => (
                  <li key={index}>
                    <span className="hover:underline decoration-white hover:text-primary underline-offset-4 cursor-pointer transition-all duration-500">
                      {section}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Box 3 */}
            <div className="flex flex-col  items-start sm:items-center justify-center sm:w-1/3 gap-y-4 p-1">
              <h4 className="text-3xl mr-8">
                Our{" "}
                <span className="text-primary  font-semibold">Services</span>
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
        <div className="mx-auto sm:hidden mt-8 w-[100%] h-[1px] bg-white/20 " />

        {/* Footer 2 */}
        <div className="flex flex-col-reverse sm:flex-row w-full justify-between ~sm/xl:~mt-6/12 max-w-[1100px] mx-auto">
          <div className="flex items-center justify-center py-2">
            <p>
              <span className="text-primary">©</span> 2024{" "}
              <span className="text-primary"> Soft</span>Buses All rights
              reserved
            </p>
          </div>

          <div className="mx-auto sm:hidden  w-[100%] h-[1px] bg-white/20 " />
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
        <div className="mx-auto  mt-4 w-[75%] h-[1px] bg-white/20 " />
      </div>
    </footer>
  );
};
