import { FaCircleDot } from "react-icons/fa6";
import Bar from "./Bar";
import Button from "./Button";
import { SectionHeading } from "./SectionHeading";
import { servicesAvailable } from "./arrays";

const Services = () => {

  return (
    <>
      <section id="services" className="py-20">
        <div className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40 gap-y-10">
          <SectionHeading firstTitle="See Our" secondTitle="Services" />
          <ServicesSections />
          <Button text="Get a Quote" type="link" href="#co-create" />
        </div>
      </section>
      <Bar />
    </>
  );
};

const ServicesSections = () => {
  return (
    <div className="w-full flex items-center justify-center z-[1]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ~gap-4/8">
        {servicesAvailable.map((item, index) => (
          <div key={index} className="group w-full">
            <div
              className="z-10 border-2 group bg-[#121212] p-4 h-full transition-all flex flex-col justify-evenly gap-y-2 border-white text-primary group-hover:shadow-[4px_4px_0_0_#4fbd00] group-hover:-translate-x-1 group-hover:-translate-y-1"
            >
              <div className="font-semibold ~text-sm/lg">{item.service}</div>
              <ul className="flex-1">
                {item.detail.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="text-white/90 text-xxs md:text-sm px-4 py-1 flex items-center justify-start space-x-4 font-light"
                  >
                    <FaCircleDot size={10} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
