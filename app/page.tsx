import Herosection from "@/components/homepage/herosection";
import ProjectSection from "@/components/homepage/projectsection";

export default function Home() {
  return (
    <main className="flex flex-col font-bold">
      <Herosection />
      <ProjectSection />
    </main>
  )
}
