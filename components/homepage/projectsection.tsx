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
    <div className="flex flex-col items-center gap-4 px-8 py-24">
      <h1 className="text-3xl font-semibold md:text-5xl heading-text font-outfit"><span className="font-outfit">Featured</span> Works</h1>
      <div className="flex flex-col gap-20 md:gap-60 project-list">
        {!projects ? (
          <p >No projects found</p>
        ) : projects?.map((project) => {
          return (
            <ProjectCard status={project.status} title={project.name} shortdescription={project.shortdescription} image={project.thumbnail} key={project._id} role={project.role} link={`/projects/${project.slug}`} url={project.url} />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectSection