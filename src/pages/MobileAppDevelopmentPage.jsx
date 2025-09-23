import { mobileDevSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import { FeaturesChooseUsMobileAppDev } from "../assets/ServicesComponentsData/WhyChooseUsData";
import Bar from "../components/general/Bar";
import { OurProcess } from "../components/general/OurProcessComponent/OurProcess";
import SubServices from "../components/general/SubServices";
import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/mobileAppPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";

export const MobileAppDevelopmentPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes
          featuresData={FeaturesChooseUsMobileAppDev}
          subtitle="Your website is often the first impression your customers get. That's why we don't just build websites,  we create digital experiences that convert."
          imgSrc="/chooseUsImages/mobileDev"
        />
        <Bar />
        <SubServices subServices={mobileDevSubServices} imgSrc="/servicesDataImages/mobileDev" />
        <OurProcess/>
      </div>
    </>
  );
};
