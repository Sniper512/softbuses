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
import {Footer} from "../components/Footer";
import { Blogs } from "../components/Blogs";

export const LandingPage = () => {
  return (
    <div className=" ">
      <HeaderMobile />
      <HeaderDesktop />
      <Hero />
       <About />
      <Services />
      <Projects />
      <TechGridDesktop />
      <TechGridMobile />
      <Blogs/>  
      <Testimonials />
      <CoCreateSection/>
      <Footer/>
    </div>
  );
};
