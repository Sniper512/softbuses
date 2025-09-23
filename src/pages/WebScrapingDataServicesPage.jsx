import { webScrapingSubServices } from "../assets/ServicesComponentsData/OurServicesData";
import { FeaturesChooseUsWebScraping } from "../assets/ServicesComponentsData/WhyChooseUsData";
import Bar from "../components/general/Bar";
import SubServices from "../components/general/SubServices";
import { WhyChooseUsBoxes } from "../components/general/WhyChooseUsBoxes";
import { Hero } from "../components/WebScrapingDataServicesPage/hero/Hero";
import HeroBg from "../components/webDevelopmentPage/hero/HeroBg";
import { OurProcess } from "../components/general/OurProcessComponent/OurProcess";

export const WebScrapingDataServicesPage = () => {
  return (
    <>
      <div className="relative">
        <HeroBg />
        <Hero />
        <WhyChooseUsBoxes featuresData={FeaturesChooseUsWebScraping} subtitle="Reliable, scalable, and compliant scraping solutions tailored to your needs." imgSrc="/chooseUsImages/webScarping" />
        <Bar/>
        <SubServices subServices={webScrapingSubServices} imgSrc="/servicesDataImages/webScarping" service="Web Scraping & Data" />
        <OurProcess/>
      </div>
    </>
  );
};
