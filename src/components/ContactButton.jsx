import React from "react";

export const ContactButton = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative group ">
        <div className="absolute top-1 left-1 w-full h-full bg-primary group-hover:bg-white transition-colors duration-300"></div>
        <button className="relative px-5 py-3 bg-black group-hover:bg-primary group-hover:border-black border-2 border-white text-primary group-hover:text-black text-lg font-bold transition-colors duration-300  cursor-pointer">
          Contact Us
        </button>
      </div>
    </div>
  );
};
