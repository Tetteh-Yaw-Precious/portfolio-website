'use client';
import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ProjectCard from './projectcard';
import { getProjects } from '@/sanity/sanity-utils';

const ProjectSection = async () => {
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
		<div className='flex flex-col items-center w-full'>
			<Tabs
				variant='unstyled'
				className='flex flex-col items-center w-full gap-8'
			>
				<TabList className='flex gap-4'>
					<Tab
						_selected={{ color: 'red', bg: 'blue.500' }}
						className='md:px-12 px-6 border-2 button-hover md:text-lg text-sm text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light aria-selected:!bg-brandblack aria-selected:border-white aria-selected:text-white'
					>
						All
					</Tab>
					<Tab
						_selected={{ color: 'red', bg: 'brand.wblue.100' }}
						className='md:px-12 !px-6 border-2 button-hover md:text-lg text-sm text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light aria-selected:!bg-brandblack aria-selected:border-white aria-selected:text-white'
					>
						Design
					</Tab>
					<Tab
						_selected={{ color: 'red', bg: 'blue.500' }}
						className='md:px-12 px-6 border-2 button-hover md:text-lg text-sm text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light aria-selected:!bg-brandblack aria-selected:border-white aria-selected:text-white'
					>
						Frontend Development
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<div className='!w-full md:grid md:grid-cols-2 flex flex-col gap-10 items-center px-[3%]'>
							{!projects ? (
								<p>No projects found</p>
							) : (
								projects?.map((project: any) => {
									return (
										<ProjectCard
											title={project.name}
											shortdescription={
												project.shortdescription
											}
											role={project.role}
											image={project.thumbnail}
											key={project._id}
											link={`/projects/${project.slug}`}
										/>
									);
								})
							)}
						</div>
					</TabPanel>
					<TabPanel>
						<p>two!</p>
					</TabPanel>
					<TabPanel>
						<p>three!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
};

export default ProjectSection;
