// 'use client'
import Curve from "@/components/Layout/curve";
import Inner from "@/components/Layout/inner";
import Herosection from "@/components/homepage/herosection";
import AboutMe from "@/components/homepage/aboutme";
import NewsSection from "@/components/homepage/newssection";
import ProjectSection from "@/components/homepage/projectsection";
import ResourcesSection from "@/components/homepage/resourcessection";
import { getProjects } from "@/sanity/sanity-utils";
import { ProjectType } from "@/types/ProjectType";

export async function getServerSideProps() {
  // Fetch fresh data on each request
  const projects: ProjectType[] = await getProjects();
  console.log(projects); // Log to verify data fetching

  return {
    props: {
      projects,
    },
  };
}

// Main component
export default function Home({ projects }: { projects: ProjectType[] }) {
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
  );
}
