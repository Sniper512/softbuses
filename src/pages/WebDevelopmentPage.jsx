import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/webDevelopmentPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";
import { FeaturesChooseUsWebDev } from "../assets/ServicesComponentsData/WhyChooseUsData";
import SubServices from "../components/general/SubServices";
import { webDevSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import Bar from "../components/general/Bar";
import { OurProcess } from "../components/general/OurProcessComponent/OurProcess";

import { webDevServiceProcess } from "../assets/ServicesComponentsData/OurProcessData";

export const WebDevelopmentPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes
          featuresData={FeaturesChooseUsWebDev}
          subtitle="Your website is often the first impression your customers get. That's why we don't just build websites, we create digital experiences that convert."
          imgSrc="/chooseUsImages/webDev"
        />
        <Bar />
        <SubServices subServices={webDevSubServices} imgSrc="/servicesDataImages/webDev" service="Web Development" />
        <OurProcess 
          ourProcessData={webDevServiceProcess} 
          lineStyles={{
            left: "32px",
            top: "1rem",
            height: "calc(100% - 9rem)"
          }}
        />
      </div>
    </>
  );
};
