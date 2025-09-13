import { automationSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import { FeaturesChooseUsAutomation } from "../assets/ServicesComponentsData/WhyChooseUsData";
import Bar from "../components/general/Bar";
import SubServices from "../components/general/SubServices";
import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/webDevelopmentPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";

export const AutomationServicesPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes
          featuresData={FeaturesChooseUsAutomation}
          subtitle="Smart, secure, and scalable automations built for your unique workflows."
        />
        <Bar />
        <SubServices subServices={automationSubServices} />
      </div>
    </>
  );
};
