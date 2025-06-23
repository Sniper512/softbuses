import React, { useState, useEffect } from "react";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="md:hidden fixed top-0 left-0 w-full z-50"
      style={{
        background: `rgba(0,0,0,${bgOpacity})`,
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
          <img src="menuIcon.svg" className="w-full h-auto" alt="" />
        </button>
      </header>
    </nav>
  );
};
