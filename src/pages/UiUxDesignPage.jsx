import { uiUxServiceProcess } from "../assets/ServicesComponentsData/OurProcessData";
import { uiUxSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import { FeaturesChooseUsUiUX } from "../assets/ServicesComponentsData/WhyChooseUsData";
import Bar from "../components/general/Bar";
import { OurProcess } from "../components/general/OurProcessComponent/OurProcess";
import SubServices from "../components/general/SubServices";
import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/UiUxDesignPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";

export const UiUxDesignPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes
          featuresData={FeaturesChooseUsUiUX}
          subtitle="Your website is often the first impression your customers get.
            That's why we don't just build websites, we create digital
            experiences that convert."
          imgSrc="/chooseUsImages/uiUx"
        />
        <Bar />
        <SubServices subServices={uiUxSubServices} imgSrc="/servicesDataImages/uiUx" service="UI/UX Design" />
        <OurProcess ourProcessData={uiUxServiceProcess} 
                  lineStyles={{
            left: "32px",
            top: "1rem",
            height: "calc(100% - 11rem)"
          }}
/>
      </div>
    </>
  );
};
