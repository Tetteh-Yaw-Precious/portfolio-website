import ProjectCard from "./projectcard"

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-8 py-12">
      <h2 className="text-3xl md:text-6xl heading-text font-sora"><span className="black-radial-gradient">My</span> Projects</h2>
      <div className="flex flex-col gap-20 md:gap-32 project-list">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default ProjectSection