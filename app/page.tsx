'use client'
import Curve from "@/components/Layout/curve";
import Inner from "@/components/Layout/inner";
import Herosection from "@/components/homepage/herosection";
import AboutMe from "@/components/homepage/aboutme";
import NewsSection from "@/components/homepage/newssection";
import ProjectSection from "@/components/homepage/projectsection";
import ResourcesSection from "@/components/homepage/resourcessection";
import { useShowStore } from "@/context/context";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis()
  //   lenis.on('scroll', (e: any) => {
  //     // console.log(e)
  //   })

  //   function raf(time: any) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])
  return (

    <div className="flex flex-col font-bold scroll-smooth">
      {/* <PageLoader /> */}
      <div className="scroll-smooth">
        <Herosection />
        <AboutMe />
        <ProjectSection />
        {/* <NewsSection />
      <ResourcesSection /> */}
      </div>
    </div>
  )
}
