import React from "react";

export const SectionHeading = ({ firstTitle = "", secondTitle = "" }) => {
  return (
    <div className="w-full ">
      <h2 className="~sm/xl:~text-[1.5rem]/[2.5rem]   font-bold">
        {firstTitle} <span className="text-primary">{secondTitle}</span>
      </h2>
    </div>
  );
};
