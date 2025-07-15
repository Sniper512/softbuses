import React from "react";
import { SectionHeading } from "./SectionHeading";
import { ContactButton } from "./ContactButton";

export const CoCreateSection = () => {
  return (
    <section id="co-create" className="bg-[#121212] ~/xl:~mt-8/20 ">
      <div className="w-full mx-auto max-w-[1660px]  ~/xl:~px-6/40 flex flex-col items-center justify-center py-12 md:py-16  ">
        <div className="mx-auto w-[75%] h-[1px] bg-white/20 " />
        <div className="w-full mt-8">
          <SectionHeading firstTitle="Co-create " secondTitle="with us" />
        </div>
        <div className="w-full flex flex-col  md:flex-row-reverse bg-white/5 border-[1px] border-primary/25 gap-y-8  mt-8 md:mt-12 md:px-4 md:py-8">
          {/* First half */}
          <div className="w-full md:w-1/2 p-4">
            <div className="mb-8">
              <h4 className=" ~sm/xl:~text-2xl/4xl text-primary font-semibold mb-4">
                Ready to Get a Quote?
              </h4>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                Let's bring your digital vision to life! Whether you need a
                sleek web app, cutting-edge AI integration, intuitive UI/UX, or
                powerful automation tools—our expert team is ready to
                collaborate and build something remarkable with you.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              {/* Full Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
                />
              </div>

              {/* Email Address Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
                />
              </div>

              {/* Phone Number Input */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
                />
              </div>

              {/* Company/Startup Input */}
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Startup (Optional)"
                  className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
                />
              </div>

              {/* Service of Interest Textarea */}
              <div className="relative">
                <textarea
                  name="serviceOfInterest"
                  placeholder="Service of Interest"
                  rows="4"
                  className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm resize-none transition-all duration-200"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end ">
                <div className="flex items-center justify-center">
                  <div className="relative group ">
                    <div className="absolute top-1 left-1 w-full h-full bg-white group-hover:bg-primary transition-colors duration-300"></div>
                    <button className="relative  ~sm/xl:~px-8/10 py-3  w-full bg-primary group-hover:bg-black group-hover:border-white border-2 border-black text-black group-hover:text-primary text-lg font-bold transition-colors duration-300  cursor-pointer">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second half */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-2 py-12 md:py-2">
            <img
              src="coCreateIcon.svg"
              alt="Co-create with us"
              className="w-full h-auto max-w-[500px]"
            />
          </div>
        </div>
        <div className="mx-auto w-[75%] h-[1px] bg-white/20 ~sm/xl:~mt-8/20" />
      </div>
    </section>
  );
};
