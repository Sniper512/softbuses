import { Hero } from "../components/landingPage/hero/Hero";
import { About } from "../components/landingPage/About";
import Services from "../components/landingPage/services/Services";
import { Testimonials } from "../components/landingPage/Testimonials";
import { CoCreateSection } from "../components/landingPage/coCreate/CoCreateSection";
// import { Blogs } from "../components/Blogs";
import HeroBg from "../components/landingPage/hero/HeroBg";
import { ScrollToTopButton } from "../components/general/ScrollToTopButton";
import ProjectsBg from "../components/landingPage/projects/ProjectsBg";
import Projects from "../components/landingPage/projects/Projects";
import Technologies from "../components/landingPage/technologies/Technologies";

export const LandingPage = () => {
  return (
    <>
      <div id="home" className="relative">
        <HeroBg />
        <Hero />
        <About />
      </div>
      <div className="relative">
        <ProjectsBg />
        <Services />
        <Projects />
      </div>
      <Technologies />
      {/* <Blogs /> */}
      <Testimonials />
      <CoCreateSection />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </>
  );
};
