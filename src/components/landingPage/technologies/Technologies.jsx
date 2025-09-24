import { useRef } from "react";
import Bar from "../../general/Bar";
import { SectionHeading } from "../SectionHeading";
import TechMainCard from "./TechMainCard"
import TechSubCard from "./TechSubCard";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";

const technologies = [
  {
    title: "Agentic AI",
    icon: "/technologies/agenticAi.svg",
    href: "#",
    type: "sub"
  },
  {
    title: "Android Studio",
    icon: "/technologies/androidStudio.svg",
    href: "https://developer.android.com/studio",
    type: "sub"
  },
  {
    title: "Angular",
    icon: "/technologies/angular.svg",
    href: "https://angular.io/",
    type: "sub"
  },
  {
    title: "AWS",
    icon: "/technologies/aws.svg",
    href: "https://aws.amazon.com/",
    type: "sub"
  },
  {
    title: "Django",
    icon: "/technologies/django.svg",
    href: "https://www.djangoproject.com/",
    type: "sub"
  },
  {
    title: "Docker",
    icon: "/technologies/docker.svg",
    href: "https://www.docker.com/",
    type: "sub"
  },
  {
    title: "Firebase",
    icon: "/technologies/firebase.svg",
    href: "https://firebase.google.com/",
    type: "sub",
  },
  {
    title: "express",
    icon: "/technologies/express.svg",
    href: "https://expressjs.com/",
    type: "sub"
  },
  {
    title: "Figma",
    icon: "/technologies/figma.svg",
    href: "https://www.figma.com/",
    type: "sub"
  },
  {
    title: "Flutter",
    icon: "/technologies/flutter.svg",
    href: "https://flutter.dev",
    type: "sub"
  },
  {
    title: "Framer",
    icon: "/technologies/framer.svg",
    href: "https://www.framer.com/",
    type: "sub"
  },
  {
    title: "Generative AI",
    icon: "/technologies/generativeAi.svg",
    href: "#",
    type: "sub"
  },
  {
    title: "GraphQL",
    icon: "/technologies/graphql.svg",
    href: "https://graphql.org/",
    type: "sub"
  },
  {
    title: "Kotlin",
    icon: "/technologies/kotlin.svg",
    href: "https://kotlinlang.org/",
    type: "sub"
  },
  {
    title: "Laravel",
    icon: "/technologies/laravel.svg",
    href: "https://laravel.com",
    type: "sub"
  },
  {
    title: "Next.js",
    icon: "/technologies/nextjs.svg",
    href: "https://nextjs.org",
    type: "sub"
  },
  {
    title: "Playwright",
    icon: "/technologies/playwright.svg",
    href: "https://playwright.dev/",
    type: "sub"
  },
  {
    title: "Puppeteer",
    icon: "/technologies/puppeteer.svg",
    href: "https://pptr.dev/",
    type: "sub"
  },
  {
    title: "React",
    icon: "/technologies/react_colored.svg",
    href: "https://reactjs.org",
    type: "main",
    bg: "/technologies/react_bg.png"
  },
  {
    title: "NodeJS",
    icon: "/technologies/nodejs_colored.svg",
    href: "https://nodejs.org",
    type: "main",
    bg: "/technologies/nodejs_bg.png"
  },
  {
    title: "Scrapy",
    icon: "/technologies/scrapy.svg",
    href: "https://scrapy.org",
    type: "sub"
  },
  {
    title: "Selenium",
    icon: "/technologies/selenium.svg",
    href: "https://www.selenium.dev/",
    type: "sub"
  },
  {
    title: "Sketch",
    icon: "/technologies/sketch.svg",
    href: "https://www.sketch.com/",
    type: "sub"
  },
  {
    title: "Tailwind",
    icon: "/technologies/tailwind.svg",
    href: "https://tailwindcss.com/",
    type: "sub"
  },
  {
    title: "Typescript",
    icon: "/technologies/typescript.svg",
    href: "https://www.typescriptlang.org/",
    type: "sub"
  },
  {
    title: "Vercel",
    icon: "/technologies/vercel.svg",
    href: "https://vercel.com",
    type: "sub"
  },
  {
    title: "Xcode",
    icon: "/technologies/xcode.svg",
    href: "https://developer.apple.com/xcode/",
    type: "sub"
  },
  {
    title: "Zapier",
    icon: "/technologies/zapier.svg",
    href: "https://zapier.com",
    type: "sub"
  },
  {
    title: "Playwright",
    icon: "/technologies/playwright_colored.svg",
    href: "https://playwright.dev/",
    type: "main",
    bg: "/technologies/playwright_bg.png"
  },
  {
    title: "Ethereum",
    icon: "/technologies/ethereum_colored.svg",
    href: "https://ethereum.org/",
    type: "main",
    bg: "/technologies/ethereum_bg.png"
  },
  {
    title: "Agentic AI",
    icon: "/technologies/agenticAi.svg",
    href: "https://agentic.ai/",
    type: "sub"
  },
  {
    title: "Android Studio",
    icon: "/technologies/androidStudio.svg",
    href: "https://developer.android.com/studio",
    type: "sub"
  },
  {
    title: "Angular",
    icon: "/technologies/angular.svg",
    href: "https://angular.io/",
    type: "sub"
  },
  {
    title: "AWS",
    icon: "/technologies/aws.svg",
    href: "https://aws.amazon.com/",
    type: "sub"
  },
  {
    title: "Django",
    icon: "/technologies/django.svg",
    href: "https://www.djangoproject.com/",
    type: "sub"
  },
  {
    title: "Docker",
    icon: "/technologies/docker.svg",
    href: "https://www.docker.com/",
    type: "sub"
  },
  {
    title: "Firebase",
    icon: "/technologies/firebase.svg",
    href: "https://firebase.google.com/",
    type: "sub",
  },
  {
    title: "express",
    icon: "/technologies/express.svg",
    href: "https://expressjs.com/",
    type: "sub"
  },
  {
    title: "Figma",
    icon: "/technologies/figma.svg",
    href: "https://www.figma.com/",
    type: "sub"
  },
  {
    title: "Flutter",
    icon: "/technologies/flutter.svg",
    href: "https://flutter.dev",
    type: "sub"
  },
  {
    title: "Framer",
    icon: "/technologies/framer.svg",
    href: "https://www.framer.com/",
    type: "sub"
  },
  {
    title: "Generative AI",
    icon: "/technologies/generativeAi.svg",
    href: "#",
    type: "sub"
  },
  {
    title: "GraphQL",
    icon: "/technologies/graphql.svg",
    href: "https://graphql.org/",
    type: "sub"
  },
  {
    title: "Kotlin",
    icon: "/technologies/kotlin.svg",
    href: "https://kotlinlang.org/",
    type: "sub"
  },
  {
    title: "Laravel",
    icon: "/technologies/laravel.svg",
    href: "https://laravel.com",
    type: "sub"
  },
  {
    title: "Next.js",
    icon: "/technologies/nextjs.svg",
    href: "https://nextjs.org",
    type: "sub"
  },
  {
    title: "Playwright",
    icon: "/technologies/playwright.svg",
    href: "https://playwright.dev/",
    type: "sub"
  },
  {
    title: "Puppeteer",
    icon: "/technologies/puppeteer.svg",
    href: "https://pptr.dev/",
    type: "sub"
  },
  {
    title: "Scrapy",
    icon: "/technologies/scrapy.svg",
    href: "https://scrapy.org",
    type: "sub"
  },
  {
    title: "Agentic AI",
    icon: "/technologies/agenticAi.svg",
    href: "#",
    type: "sub"
  },
  {
    title: "Android Studio",
    icon: "/technologies/androidStudio.svg",
    href: "https://developer.android.com/studio",
    type: "sub"
  },
  {
    title: "Angular",
    icon: "/technologies/angular.svg",
    href: "https://angular.io/",
    type: "sub"
  },
]

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologiesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger for grid items
        delayChildren: 0.2,    // Shorter delay
      },
    },
  };

  return (
    <>
      <motion.section id="technologies" className="w-full overflow-hidden py-20 mx-auto flex flex-col items-center ~gap-y-4/12"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={technologiesContainerVariants}
      >
        <motion.div
          className="w-full ~md/xl:~px-[3.1rem]/[10rem] max-w-[1660px]"
        >
          <SectionHeading firstTitle="Our" secondTitle="Technologies" />
        </motion.div>
        <div className="technologies_section w-max overflow-hidden grid grid-cols-8 gap-2 sm:gap-4" >
          {/* Placeholder for additional technology cards */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="min-w-[5.5rem] w-[5.5rem] sm:min-w-40 sm:w-40 ~h-16/20 bg-dark border ~rounded-xl/2xl flex items-center justify-center brightness-[.4]">
            </div>
          ))}

          {technologies.map((tech, index) => {
            if (tech.type === "main") {
              return <TechMainCard key={index} title={tech.title} icon={tech.icon}
                bg={tech.bg}
                href={tech.href}
              />
            } else {
              return <TechSubCard key={index} title={tech.title} icon={tech.icon}
                href={tech.href}
              />
            }
          })}

          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="min-w-[5.5rem] w-[5.5rem] sm:min-w-40 sm:w-40 ~h-16/20 bg-dark border ~rounded-xl/2xl flex items-center justify-center brightness-[.4]">
            </div>
          ))}
        </div>
      </motion.section >
      <Bar />
    </>
  );
};

export default Technologies;