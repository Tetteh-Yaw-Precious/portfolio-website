// 'use client' directive is commented out, indicating this is a Server Component

// Import necessary components for the homepage
import Herosection from '@/components/homepage/herosection';
import AboutMe from '@/components/homepage/aboutme';
import ProjectSection from '@/components/homepage/projectsection';

// Lenis is imported but not used in this file
import Lenis from 'lenis';

// These imports are commented out as they're not currently used
// import { useEffect, useState } from "react";

// Import utility function to fetch projects from Sanity
import { getProjects } from '@/sanity/sanity-utils';

// Import the ProjectType, which is likely used to type the projects data
import { ProjectType } from '@/types/ProjectType';
import Head from 'next/head';

// Main component for the homepage
export default async function Home() {
	// Fetch projects data
	const projects = await getProjects();
	// Debugging line (commented out)

	return (
		<>
			<div className='flex flex-col font-bold scroll-smooth'>
				{/* PageLoader component is commented out */}
				{/* <PageLoader /> */}
				<div className='scroll-smooth'>
					<Herosection />
					<AboutMe />
					<ProjectSection projects={projects} />
					{/* These sections are commented out, possibly for future implementation */}
					{/* <NewsSection />
      <ResourcesSection /> */}
				</div>
			</div>
		</>
	);
}

// Set revalidation time for Incremental Static Regeneration (ISR)
export const revalidate = 1;
