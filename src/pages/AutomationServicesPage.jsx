import { automationSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import { FeaturesChooseUsAutomation } from "../assets/ServicesComponentsData/WhyChooseUsData";
import Bar from "../components/general/Bar";
import SubServices from "../components/general/SubServices";
import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/AutomationServicesPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";
import { OurProcess } from "../components/general/OurProcessComponent/OurProcess";
import { automationServiceProcess } from "../assets/ServicesComponentsData/OurProcessData";

export const AutomationServicesPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes
          featuresData={FeaturesChooseUsAutomation}
          subtitle="Smart, secure, and scalable automations built for your unique workflows."
          imgSrc="/chooseUsImages/automation"
        />
        <Bar />
        <SubServices subServices={automationSubServices} imgSrc="/servicesDataImages/automation" service="Automation" />
        <OurProcess ourProcessData={automationServiceProcess} />
      </div>
    </>
  );
};
