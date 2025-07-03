import React, { useState, useEffect } from "react";
import { links } from "./arrays";

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 200;
      setScroll(Math.min(window.scrollY, maxScroll));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close menu after navigation
  };

  // Interpolate values based on scroll
  const maxScroll = 200;
  const progress = scroll / maxScroll;
  const bgOpacity = 0.85 * progress;
  const logoMin = 120; // px (w-22)
  const logoMax = 144; // px (w-36)
  const logoWidth = logoMax - (logoMax - logoMin) * progress;
  const padMin = 24; // px (py-2)
  const padMax = 36; // px (py-9)
  const padY = padMax - (padMax - padMin) * progress;
  const toggleBtnMin = 0.7; // Scale for toggle button
  const toggleBtnMax = 1; // Scale for toggle button
  const toggleBtnScale = toggleBtnMax - (toggleBtnMax - toggleBtnMin) * progress;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="md:hidden fixed top-0 left-0 w-full z-50"
        style={{
          background: `rgba(18, 18, 18, ${bgOpacity})`,
          transition: "background 0.2s",
        }}
      >
        <header
          className="flex justify-between items-center px-6"
          style={{
            paddingTop: padY,
            paddingBottom: padY,
            transition: "padding 0.2s",
          }}
        >
          {/* Logo */}
          <div style={{ width: logoWidth, transition: "width 0.2s" }}>
            <img src="horizontalLogo.svg" className="w-full h-auto" alt="" />
          </div>
          <button className="w-9" onClick={toggleMenu}>
            <img src="menuIcon.svg" className="w-full h-auto" alt="Menu Icon" style={{ transform: `scale(${toggleBtnScale})`, transition: "transform 0.2s" }} />
          </button>
        </header>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-4/5 bg-dark border-l border-primary/20 z-40 transition-all duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div
          className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          style={{
            gridTemplateRows: isOpen ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.3s ease-out'
          }}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col space-y-6 p-6 pt-24">
              {links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link)}
                  className="text-left text-white text-lg font-light tracking-wider hover:text-primary transition-colors duration-200 py-2"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};
