import { HeaderMobile } from "../components/HeaderMobile";
import { HeaderDesktop } from "../components/HeaderDesktop";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/About";
import Services from "../components/Services";
import { TechGridDesktop } from "../components/TechGridDesktop";
import { TechGridMobile } from "../components/TechGridMobile";
import { Testimonials } from "../components/Testimonials";
import { CoCreateSection } from "../components/CoCreateSection";
import Extra from "../components/Extra";
import { Footer } from "../components/Footer";
import { Blogs } from "../components/Blogs";
import HeroBg from "../components/HeroBg";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import ProjectsBg from "../components/ProjectsBg";
import Projects from "../components/projects/Projects";

export const LandingPage = () => {
  return (
    <div className="">
      <div id="home" className="relative">
        <HeaderMobile />
        <HeaderDesktop />
        <HeroBg />
        <Hero />
        <About />
      </div>
      <div className="relative">
        <ProjectsBg />
        <Services />
        <Projects />
      </div>
      <div id="technologies">
        <TechGridDesktop />
        <TechGridMobile />
      </div>
      <Blogs />
      <Testimonials />
      <CoCreateSection />
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};
