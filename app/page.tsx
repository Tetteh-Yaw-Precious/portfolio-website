// 'use client'
import Curve from "@/components/Layout/curve";
import Inner from "@/components/Layout/inner";
import Herosection from "@/components/homepage/herosection";
import AboutMe from "@/components/homepage/aboutme";
import NewsSection from "@/components/homepage/newssection";
import ProjectSection from "@/components/homepage/projectsection";
import ResourcesSection from "@/components/homepage/resourcessection";
import { useShowStore } from "@/context/context";
import Lenis from "lenis";
// import { useEffect, useState } from "react";
import { getProjects } from "@/sanity/sanity-utils";
import { ProjectType } from "@/types/ProjectType";

export default async function Home() {
  const projects = await getProjects()
  console.log(projects)

  // const gettingProjects = async () => {
  //   try {
  //     const projectsData = await getProjects(); // Assuming getProjects is a function that fetches the project data
  //     return projectsData;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   gettingProjects().then((data: any) => {
  //     setProjects(data); // Update the projects state with the fetched data
  //   });
  // }, []);

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
