import Herosection from "@/components/homepage/herosection";
import ProjectSection from "@/components/homepage/projectsection";
import TestHero from "@/components/homepage/testhero";

export default function Home() {
  return (
    <main className="flex flex-col font-bold">
      <Herosection />
      {/* <TestHero /> */}
      <ProjectSection />
    </main>
  )
}
