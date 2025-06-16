import React, { useState } from "react";

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:hidden">
      <header className="flex justify-between items-center px-6 py-9 bg-[#111]">
        {/* Logo */}
        <div className="w-36">
          <img src="horizontalLogo.svg" className="w-full h-auto" alt="" />
        </div>
        <button className="w-9" onClick={toggleMenu}>
          {console.log(isOpen)}
          <img src="menuIcon.svg" className="w-full h-auto" alt="" />
        </button>
      </header>
    </nav>
  );
};
