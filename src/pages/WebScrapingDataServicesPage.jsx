import { webScrapingSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import { FeaturesChooseUsWebScraping } from "../assets/ServicesComponentsData/WhyChooseUsData";
import Bar from "../components/general/Bar";
import SubServices from "../components/general/SubServices";
import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/webDevelopmentPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";

export const WebScrapingDataServicesPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes featuresData={FeaturesChooseUsWebScraping} subtitle="Reliable, scalable, and compliant scraping solutions tailored to your needs." />
        <Bar/>
        <SubServices subServices={webScrapingSubServices} />
      </div>
    </>
  );
};
