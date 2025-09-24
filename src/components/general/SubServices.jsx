import ServicesCarouselMobile from "./SubServicesParts/ServicesCarouselMobile";
import { SectionHeading } from "../landingPage/SectionHeading";
import { SubServicesGrid } from "./SubServicesParts/SubServicesGrid";
import Bar from "./Bar";

export default function SubServices({
  subServices,
  imgSrc = "",
  service = "",
}) {
  return (
    <section className="w-full pt-10 sm:pt-14 md:pt-16 lg:pt-28   ">
      <div className="max-w mx-auto w-full   flex flex-col gap-y-6 md:gap-y-16   ">
        <div className="px-6         text-center">
          <SectionHeading
            firstTitle="Our "
            secondTitle={`${service} `}
            thirdTitle="Services"
          />
        </div>
        <div>
          <ServicesCarouselMobile subServices={subServices} imgSrc={imgSrc} />
          <SubServicesGrid subServices={subServices} imgSrc={imgSrc} />
          <Bar />
        </div>
      </div>
    </section>
  );
}
