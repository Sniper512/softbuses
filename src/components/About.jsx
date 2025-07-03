import { SectionHeading } from "./SectionHeading";
import SoftBuses from "./SoftBuses";

export const About = () => {
  return (
    <section id="about" className="~/xl:~mt-8/20 relative z-[1]">
      <div className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40   gap-y-8">
        <SectionHeading firstTitle="About" secondTitle="Us" />
        <div className="w-full flex items-center justify-center px-4 ">
          <p className="w-full md:max-w-3xl xl:max-w-4xl px-4 py-6 border border-primary text-white text-base md:text-lg">
            <SoftBuses /> is a dynamic
            startup composed of incredibly passionate and exceptionally talented
            software engineers. They harness the most advanced and innovative
            cutting-edge technologies to create web and mobile applications that
            are nothing short of extraordinary. The team is dedicated to pushing
            the boundaries of what's possible, ensuring every app they develop
            is a masterpiece of excellence and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};
