import React from "react";

import { HeaderMobile } from "../components/HeaderMobile";
import { HeaderDesktop } from "../components/HeaderDesktop";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import Services from "../components/Services";
import { Projects } from "../components/Projects";
import { TechGridDesktop } from "../components/TechGridDesktop";
import { TechGridMobile } from "../components/TechGridMobile";
import { Testimonials } from "../components/Testimonials";
import { CoCreateSection } from "../components/CoCreateSection";
import Extra from "../components/Extra";
import { Footer } from "../components/Footer";
import { Blogs } from "../components/Blogs";
import HeroBg from "../components/HeroBg";

export const LandingPage = () => {
  return (
    <div className=" ">
      <HeaderMobile />
      <HeaderDesktop />
      <div className="relative">
        <HeroBg />
        <Hero />
        <About />
      </div>
      <Services />
      <Projects />
      <TechGridDesktop />
      <TechGridMobile />
      <Blogs />
      <Testimonials />
      <CoCreateSection />
      <Footer />
    </div>
  );
};
