import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/webDevelopmentPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";
import { FeaturesChooseUsWebDev } from "../assets/ServicesComponentsData/WhyChooseUsData";
import SubServices from "../components/general/SubServices";
import { uiUxSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import Bar from "../components/general/Bar";
import OurProcess from "../components/general/OurProcess";

export const WebDevelopmentPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes
          featuresData={FeaturesChooseUsWebDev}
          subtitle="Your website is often the first impression your customers get.
            That's why we don't just build websites, we create digital
            experiences that convert."
        />
        <Bar />
        <SubServices subServices={uiUxSubServices} />

        <OurProcess/>
      </div>
    </>
  );
};
