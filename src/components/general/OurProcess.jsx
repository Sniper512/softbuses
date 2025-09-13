import { SectionHeading } from "../landingPage/SectionHeading";

import { webDevServiceProcess } from "../../assets/ServicesComponentsData/OurProcessData";
export default function OurProcess() {
  return (
    <section className="w-full py-10 sm:py-14 md:py-16 lg:py-28 our-process-image   ">
      <div className="max-w-[1660px] mx-auto w-full   flex flex-col gap-y-6 md:gap-y-16   ">
        <div>
          <SectionHeading firstTitle="Our " secondTitle="Process " />
        </div>

          <div className="bg-primary w-full  h-[2px]   mb-2 px-8"></div>
          <div className="  flex  text-center  gap-x-8">
            {webDevServiceProcess.map((process, index) => (
              <div className="relative" key={index}>
                <div className="absolute -top-20 left-1/2 rounded-full -translate-x-1/2 bg-primary  w-3 h-3" />
                <h3 className="text-lg font-semibold">{process.title}</h3>
                <p className="text-[10px]">{process.detail}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
