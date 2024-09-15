// 'use client'
import Herosection from "@/components/homepage/herosection";
import AboutMe from "@/components/homepage/aboutme";
import ProjectSection from "@/components/homepage/projectsection";

import Lenis from "lenis";
// import { useEffect, useState } from "react";
import { getProjects } from "@/sanity/sanity-utils";
import { ProjectType } from "@/types/ProjectType";

export default async function Home() {
  const projects = await getProjects()
  console.log(projects)


  return (

    <div className="flex flex-col font-bold scroll-smooth">
      {/* <PageLoader /> */}
      <div className="scroll-smooth">
        <Herosection />
        <AboutMe />
        <ProjectSection projects={projects} />
        {/* <NewsSection />
      <ResourcesSection /> */}
      </div>
    </div>
  )
}
