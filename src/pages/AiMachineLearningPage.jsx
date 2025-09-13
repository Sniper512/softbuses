import { aiSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import { FeaturesChooseUsAiML } from "../assets/ServicesComponentsData/WhyChooseUsData";
import Bar from "../components/general/Bar";
import SubServices from "../components/general/SubServices";
import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/webDevelopmentPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";

export const AiMachineLearningPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes
          featuresData={FeaturesChooseUsAiML}
          subtitle="From Data to Decisions, We Build Intelligence That Scales"
        />
        <Bar />
        <SubServices subServices={aiSubServices} />
      </div>
    </>
  );
};
