import { uiUxSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import { FeaturesChooseUsUiUX } from "../assets/ServicesComponentsData/WhyChooseUsData";
import Bar from "../components/general/Bar";
import SubServices from "../components/general/SubServices";
import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/webDevelopmentPage/hero/Hero";
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
        />
        <Bar />
        <SubServices subServices={uiUxSubServices} />
      </div>
    </>
  );
};
