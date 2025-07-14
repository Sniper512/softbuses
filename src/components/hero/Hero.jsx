import SoftBuses from "../SoftBuses";
import HeroLogoSection from "./HeroLogoSection";

export const Hero = () => {
  return (
    <>
      <section className="pb-4 pt-24 md:pt-10 md:pb-12 relative z-[1]">
        <div className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center px-4 text-center gap-y-6 md:gap-y-12">
          {/* Logo */}
          {/* <div className="w-[110px] h-auto">
          <img src="verticalLogo.svg" alt="" className="w-full h-auto" />
        </div> */}
          <div className="w-32 lg:w-40 h-auto">
            <HeroLogoSection />
          </div>
          {/* Main Text */}
          <div className="">
            <h1 className="~sm/xl:~text-2xl/6xl font-bold">
              Empowering businesses with <br />
              <span className="text-primary">optimal solutions!</span>
            </h1>
          </div>
          {/* Sub Text */}
          <div className="w-full flex items-center justify-center">
            <h2 className="text-sm md:text-base text-wrap md:w-3/4 xl:w-1/2 text-center text-white/80 tracking-widest">
              <SoftBuses /> builds exceptional web and mobile apps using cutting-edge
              technology and a passionate, talented team.
            </h2>
          </div>
          {/* Call to Action */}
          <div className="flex flex-col md:flex-row gap-x-20 w-4/5 sm:w-2/3 md:w-auto gap-y-6 ">
            <div className="relative group pt-1 pl-1">
              <button className="relative ~sm/xl:~px-5/16 py-3  w-full bg-primary border-2 border-black text-black text-lg font-medium transition-all duration-300 cursor-pointer group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0_0_#fff]">
                Get a Quote
              </button>
            </div>
            <div className="relative group pt-1 pl-1">
              <button className="relative ~sm/xl:~px-5/16 py-3  w-full border-2 border-white text-primary text-lg font-medium transition-all duration-300 cursor-pointer group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0_0_#69FF00]">
                See All Projects
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-[1px] border-0 w-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
    </>
  );
};
