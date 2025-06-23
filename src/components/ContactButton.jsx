import React from "react";

export const ContactButton = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative group ">
        <button className="relative px-5 py-3 group-hover:bg-primary group-hover:border-black border-2 border-white text-primary group-hover:text-black text-lg font-bold transition-colors duration-300  cursor-pointer shadow-[4px_4px_0_0_#69FF00] hover:shadow-[4px_4px_0_0_#fff]">
          Contact Us
        </button>
      </div>
    </div>
  );
};
