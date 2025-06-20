import React, { useState } from "react";
import { links } from "./arrays";
import {  ContactButton } from "./ContactButton";

export const HeaderDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="hidden md:block ">
      <header className=" flex justify-between items-center px-10 lg:px-20 xl:px-36 py-6 ">
        {/* Logo */}
        <div className="w-36">
          <img src="horizontalLogo.svg" className="w-full h-auto" alt="" />
        </div>
        {/* Navigation Links */}

        <div className="flex gap-x-3 lg:gap-x-8 text-base items-center justify-center ">
          {links.map((link, index) => (
            <button
              key={index}
              className=" text-white hover:text-primary cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Button */}
        <ContactButton  />  
      </header>
      <div className="mx-auto w-[75%] h-[1px] bg-white/20"></div>

    </nav>
  );
};
