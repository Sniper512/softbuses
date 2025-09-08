import { SectionHeading } from "../SectionHeading";
import SoftBuses from "../general/SoftBuses";

export const Blogs = () => {
  return (
    <section className="~/xl:~mt-8/20 mb-20 bg-[#111]">
      <div className="w-full mx-auto max-w-[1660px]  flex-col items-center justify-center ~/xl:~px-6/40   gap-y-8 ">
        <div className="w-full">
          <SectionHeading firstTitle="Our" secondTitle="Blogs" />
        </div>
        <div className="flex flex-col md:flex-row mt-12 gap-x-6 gap-y-8 group/container">
          {/* First Box */}
          <div className="relative group w-full md:w-2/3 transition-all duration-500 ease-in-out md:group-hover/container:hover:scale-[100.04%] md:group-hover/container:hover:w-[70%] md:group-hover/container:not(:hover):scale-[0.96% ] md:group-hover/container:not(:hover):w-[60%]">
            <div className="absolute top-1 rounded-lg right-1 w-full h-full bg-primary  "></div>
            {/* Main container */}
            <div className="relative flex flex-col items-center justify-center rounded-lg   overflow-hidden    w-full bg-black border-2 border-black  ~sm/xl:~p-3/8 ">
              <div className="flex justify-between w-full ">
                <h5 className="~sm/xl:~text-lg/3xl font-semibold">
                  Rethinking <span className="text-primary">Tomorrow</span>
                </h5>
                <span className="text-sm">May 23,2025</span>
              </div>
              <div className="mt-3">
                <p className="font-medium ~sm/xl:~text-sm/xl self-start text-left ">
                  <span className="text-primary"> "</span>How{" "}
                  <SoftBuses fontSize="~sm/xl:~text-base/2xl" /> Is
                  <span className="text-primary">
                    {" "}Engineering Intelligence{" "}
                    <span className="text-primary">"</span>
                  </span>{" "}
                  Into Everyday Digital Life
                </p>
                <div className="flex flex-col items-start justify-center gap-y-3 ~sm/xl:~pl-0/6 mt-5 ">
                  <p className="italic ~sm/xl:~text-sm/base font-bold">
                    What if apps could think, websites could talk, and software
                    could grow with you?
                  </p>
                  <p className="text-xs font-light">
                    <SoftBuses fontSize="text-sm" />, we don't just code—we engineer intelligent
                    ecosystems. We're moving beyond traditional development to
                    build digital organisms: systems that learn, adapt, and
                    evolve with your business.
                  </p>
                </div>
              </div>
              <div className="w-[90%] mx-auto flex flex-col items-start border-[1px] border-primary px-4 py-6 gap-y-5 mt-6">
                <h5 className=" ~sm/xl:~text-sm/lg  font-semibold">
                  Digital Products Are Dead—
                  <span className="text-primary ">
                    {" "}
                    Welcome to Digital Beings
                  </span>
                </h5>
                <p className="text-xs leading-4 ">
                  We believe the world is shifting away from "digital products"
                  to digital partners. Your website is no longer a static
                  presence—it's an active contributor. Your apps aren't just
                  tools—they're team members. <br />
                  That's why at <SoftBuses fontSize="text-xs" />, we embed every project with a layer
                  of: <br />
                  Behavioral intelligence (AI that adapts) <br />
                  Realtime evolution (live data flow, A/B engines) <br />
                  Humanized design (UX that feels like conversation)
                </p>
              </div>
            </div>
          </div>
          {/* Second Box */}
          <div className="relative group w-full md:w-1/3 transition-all duration-500 ease-in-out md:group-hover/container:hover:scale-[1.02% ] md:group-hover/container:hover:w-[40%] md:group-hover/container:not(:hover):scale-[0.98%]  md:group-hover/container:not(:hover):w-[30%]">
            <div className="absolute top-1 rounded-lg right-1 w-full h-full bg-primary " />
            {/* Main Container */}
            <div className="relative  flex flex-col  w-full bg-black border-2 border-black h-full rounded-lg ~sm/xl:~p-3/8 ">
              <h5 className="~sm/xl:~text-lg/2xl font-semibold">
                Our Internal <span className="text-primary">Mantra</span>
              </h5>
              <p className="~sm/xl:~text-xs/sm text-center  mt-6 mb-2">
                <span className="text-primary">"</span>
                Don't build apps.{" "}
                <span className="text-primary">Build allies.</span>
                <span className="text-primary">"</span>
              </p>
              <div className="w-[90%] mx-auto flex flex-col items-start border-[1px] border-primary px-4 py-6 gap-y-5 mt-6">
                <p className="text-xs leading-4">

                  That's what <SoftBuses fontSize="text-xs" /> is about. <br className="hidden md:block" /> Not just shipping
                  software—but shaping the next generation of <span className="text-primary">living technology.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto ~sm/xl:~mt-8/16 w-[75%] h-[1px] bg-white/20 " />

      </div>
    </section>
  );
};