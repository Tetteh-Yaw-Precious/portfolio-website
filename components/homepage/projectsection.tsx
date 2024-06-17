'use client'
import { getProjects } from "@/sanity/sanity-utils"
import ProjectCard from "./projectcard"
import { useEffect, useState } from "react"

const ProjectSection = () => {
  const [projects, setProjects] = useState<any[]>([]); // Initialize projects as an empty array

  const gettingProjects = async () => {
    try {
      const projectsData = await getProjects(); // Assuming getProjects is a function that fetches the project data
      return projectsData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingProjects().then((data: any) => {
      setProjects(data); // Update the projects state with the fetched data
    });
  }, []);

  return (
    <>
      <div className="w-full md:my-16 my-8 px-[10%]">
        <h1 className="text-2xl font-semibold md:text-5xl heading-text font-sora italic">My work</h1>
        <p className="md:text-xl text-base text-[#010200] font-light">You might want to brace yourself for this</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-20 py-[8%] md:gap-48 md:px-0 px-[10%] project-list items-center bg-[#FAFEF7] w-full">
          {!projects ? (
            <p >No projects found</p>
          ) : projects?.map((project) => {
            return (
              <ProjectCard status={project.status} title={project.name} shortdescription={project.shortdescription} image={project.thumbnail} key={project._id} role={project.role} link={`/projects/${project.slug}`} url={project.url} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProjectSection