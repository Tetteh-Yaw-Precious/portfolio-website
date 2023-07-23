'use client'
import { getProjects } from "@/sanity/sanity-utils"
import ProjectCard from "./projectcard"

const ProjectSection = async () => {
  const projects = await getProjects()

  return (
    <div className="flex flex-col items-center gap-4 px-8 py-12">
      <p className="text-3xl font-bold md:text-6xl heading-text font-dgrotesk"><span className="black-radial-gradient font-dgrotesk">Selected</span> Works</p>
      <div className="flex flex-col gap-20 md:gap-32 project-list">
        {!projects ? (
          <p >No projects found</p>
        ) : projects?.map((project) => {
          return (
            <ProjectCard status={project.status} title={project.name} shortdescription={project.shortdescription} image={project.thumbnail} key={project._id} role={project.role} link={`/projects/${project.slug}`} />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectSection