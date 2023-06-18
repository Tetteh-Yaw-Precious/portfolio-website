import Herosection from "@/components/homepage/herosection";
import PageLoader from "@/components/homepage/pageLoader";
import ProjectSection from "@/components/homepage/projectsection";
import TestHero from "@/components/homepage/testhero";

export default function Home() {
  return (
    <main className="flex flex-col font-bold">
      <PageLoader />
      <Herosection />
      {/* <TestHero /> */}
      <ProjectSection />
    </main>
  )
}
