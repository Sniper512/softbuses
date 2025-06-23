import { links } from "./arrays";
import { ContactButton } from "./ContactButton";
import React, { useEffect, useState } from "react";

export const HeaderDesktop = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 300;
      setScroll(Math.min(window.scrollY, maxScroll));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Interpolate values based on scroll
  const maxScroll = 300;
  const progress = scroll / maxScroll;
  const bgOpacity = 0.85 * progress;
  const logoMin = 120;
  const logoMax = 144;
  const logoWidth = logoMax - (logoMax - logoMin) * progress;
  const padMin = 12;
  const padMax = 24;
  const padY = padMax - (padMax - padMin) * progress;
  const btnMin = 0.85;
  const btnMax = 1;
  const btnScale = btnMax - (btnMax - btnMin) * progress;

  return (
    <nav
      className="hidden md:block fixed top-0 left-0 w-full z-50"
      style={{
        background: `rgba(18, 18, 18, ${bgOpacity})`,
        transition: "background 0.2s",
      }}
    >
      <header
        className="flex justify-between items-center px-10 lg:px-20 xl:px-36"
        style={{
          paddingTop: padY,
          paddingBottom: padY,
          transition: "padding 0.2s",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: logoWidth,
            transition: "width 0.2s",
          }}
        >
          <img src="horizontalLogo.svg" className="w-full h-auto" alt="" />
        </div>
        {/* Navigation Links */}
        <div className="flex gap-x-3 lg:gap-x-8 text-base items-center justify-center ">
          {links.map((link, index) => (
            <button
              key={index}
              className=" text-white font-extralight tracking-widest hover:text-primary cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>
        {/* Button */}
        <div
          style={{
            transform: `scale(${btnScale})`,
            transition: "transform 0.2s",
          }}
        >
          <ContactButton />
        </div>
      </header>
    </nav>
  );
};
