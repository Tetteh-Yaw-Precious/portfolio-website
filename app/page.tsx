import Herosection from "@/components/homepage/herosection";
import NewsSection from "@/components/homepage/newssection";
import PageLoader from "@/components/homepage/pageLoader";
import ProjectSection from "@/components/homepage/projectsection";
import ResourcesSection from "@/components/homepage/resourcessection";

export default function Home() {
  return (
    <main className="flex flex-col font-bold">
      <PageLoader />
      <Herosection />
      <ProjectSection />
      <NewsSection />
      <ResourcesSection />
    </main>
  )
}
