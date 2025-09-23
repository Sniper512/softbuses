import { aiSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import { FeaturesChooseUsAiML } from "../assets/ServicesComponentsData/WhyChooseUsData";
import Bar from "../components/general/Bar";
import SubServices from "../components/general/SubServices";
import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/AiMachineLearningPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";
import { OurProcess } from "../components/general/OurProcessComponent/OurProcess";

export const AiMachineLearningPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes
          featuresData={FeaturesChooseUsAiML}
          subtitle="From Data to Decisions, We Build Intelligence That Scales"
          imgSrc="/chooseUsImages/ai"
        />
        <Bar />
        <SubServices subServices={aiSubServices} imgSrc="/servicesDataImages/ai" service="AI & Machine Learning" />
        <OurProcess/>
      </div>
    </>
  );
};
