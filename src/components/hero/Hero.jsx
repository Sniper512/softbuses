import Bar from "../Bar";
import Button from "../Button";
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
              <span className="text-primary" style={{ textShadow: '0 0 5px rgba(105, 255, 0, 0.6), 0 0 10px rgba(105, 255, 0, 0.4), 0 0 20px rgba(105, 255, 0, 0.2)' }}>optimal solutions!</span>
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
            <Button text="Get a Quote" type="link" href="#co-create" bg="green" />
            <Button text="See All Projects" type="link" href="#solutions" bg="transparent" />
          </div>
        </div>
      </section>
      <Bar />
    </>
  );
};
