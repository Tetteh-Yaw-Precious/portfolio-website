'use client'
import Herosection from "@/components/homepage/herosection";
import NewsSection from "@/components/homepage/newssection";
import PageLoader from "@/components/homepage/pageLoader";
import ProjectSection from "@/components/homepage/projectsection";
import ResourcesSection from "@/components/homepage/resourcessection";
import { useShowStore } from "@/context/context";
import { useEffect } from "react";

export default function Home() {
  const { showNav, setShowNav } = useShowStore()



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
