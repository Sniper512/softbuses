import Bar from "./Bar";
import Button from "./Button";
import { SectionHeading } from "./SectionHeading";
import { servicesAvailable } from "./arrays";

const Services = () => {

  return (
    <>
      <section id="services" className="py-20">
        <div className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40   gap-y-8">
          <SectionHeading firstTitle="See Our" secondTitle="Services" />
          <div>
            <ServicesSections />
          </div>
          {/* button */}
          <Button text="Get a Quote" type="link" href="#co-create" />
          {/* <div className="relative group mt-5 md:mt-8 group">
          <button className="relative ~sm/xl:~px-5/16 py-3  w-full border-2 border-white text-primary text-lg font-bold transition-colors duration-300 cursor-pointer group-hover:shadow-[4px_4px_0_0_#69FF00]">
            Get a Quote
          </button>
        </div> */}
        </div>
      </section>
      <Bar />
    </>
  );
};

const ServicesSections = () => {
  return (
    <div className={`flex items-center justify-center z-[1] relative`}>
      <div className="relative  ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative px-5 py-3 text-primary-medium text-lg font-bold ">
          {servicesAvailable.map((item, index) => (
            <div key={index} className="relative group pt-1 pl-1">
              <div
                className=" z-10 border-2 group bg-[#121212] relative p-4 h-full transition-all flex flex-col justify-evenly gap-y-3 border-white text-primary group-hover:shadow-[4px_4px_0_0_#4fbd00] group-hover:-translate-x-1 group-hover:-translate-y-1"
              >
                <div className="">{item.service}</div>
                <ul className="flex-1">
                  {item.detail.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-white text-xs md:text-sm px-4 py-1 flex  items-center justify-start space-x-4 font-normal"
                    >
                      <div className="w-3 h-3 rounded-full bg-primary-medium"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
