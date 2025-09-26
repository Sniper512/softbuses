import React from "react";
import OurProcessDesktop from "./OurProcessDesktop";
import OurProcessMobile from "./OurProcessMobile";

export const OurProcess = ({ ourProcessData,lineStyles }) => {
  return (
    <>
      <OurProcessDesktop ourProcessData={ourProcessData} />
      <OurProcessMobile  lineStyles={lineStyles} ourProcessData={ourProcessData} />
    </>
  );
};
