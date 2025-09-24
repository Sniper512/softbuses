import React from "react";
import OurProcessDesktop from "./OurProcessDesktop";
import OurProcessMobile from "./OurProcessMobile";

export const OurProcess = ({ ourProcessData }) => {
  return (
    <>
      <OurProcessDesktop ourProcessData={ourProcessData} />
      <OurProcessMobile ourProcessData={ourProcessData} />
    </>
  );
};
