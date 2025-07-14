import { SectionHeading } from "./SectionHeading";
import { servicesAvailable } from "./arrays";

const Services = () => {

  return (
    <section id="services" className="pt-20">
      <div className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40   gap-y-8">
        <SectionHeading firstTitle="See Our" secondTitle="Services" />
        <div>
          <ServicesSections />
        </div>
        {/* button */}
        <div className="relative group mt-5 md:mt-8">
          <button className="relative ~sm/xl:~px-5/16 py-3  w-full group-hover:bg-primary group-hover:border-dark border-2 border-white text-primary group-hover:text-dark text-lg font-bold transition-colors duration-300 cursor-pointer shadow-[4px_4px_0_0_#69FF00] hover:shadow-[4px_4px_0_0_#fff]">
            Get a Quote
          </button>
        </div>
      </div>
      <hr className="h-[1px] border-0 ~sm/xl:~mt-8/16 w-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
    </section>
  );
};

const ServicesSections = () => {
  return (
    <div className={`flex items-center justify-center z-[1] relative`}>
      <div className="relative  ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative px-5 py-3 text-primary-medium text-lg font-bold ">
          {servicesAvailable.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute top-2 left-2 w-full h-full bg-primary-medium group-hover:bg-white transition-colors duration-300"></div>
              <div
                key={index}
                className=" z-10 border-2 border-white group bg-[#121212]  relative p-4     h-full flex flex-col  justify-evenly     gap-y-3     "
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
