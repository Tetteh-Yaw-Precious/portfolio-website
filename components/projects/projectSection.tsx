import React from 'react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ProjectCard from './projectcard';
import { getProjects } from '@/sanity/sanity-utils';

const projectSection = async () => {
  const projects = await getProjects()
  return (
    <div className='flex flex-col items-center w-full'>
      <Tabs variant='unstyled' className='flex flex-col items-center w-full gap-8'>
        <TabList className='flex gap-4'>
          <Tab _selected={{ color: 'red', bg: 'blue.500' }} className='md:px-12 px-6 border-2 button-hover md:text-lg text-sm text-gray-700 rounded-[0.5rem] font-dgrotesk border-black md:h-14 h-12 shadow-neubrutalism-button font-light aria-selected:!bg-brandblack aria-selected:border-white aria-selected:text-white'>
            All
          </Tab>
          <Tab _selected={{ color: 'red', bg: 'brand.wblue.100' }} className='md:px-12 !px-6 border-2 button-hover md:text-lg text-sm text-gray-700 rounded-[0.5rem] font-dgrotesk border-black md:h-14 h-12 shadow-neubrutalism-button font-light aria-selected:!bg-brandblack aria-selected:border-white aria-selected:text-white'>
            Design
          </Tab>
          <Tab _selected={{ color: 'red', bg: 'blue.500' }} className='md:px-12 px-6 border-2 button-hover md:text-lg text-sm text-gray-700 rounded-[0.5rem] font-dgrotesk border-black md:h-14 h-12 shadow-neubrutalism-button font-light aria-selected:!bg-brandblack aria-selected:border-white aria-selected:text-white'>
            Frontend Development
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel >
            <div className='!w-full md:grid md:grid-cols-2 flex flex-col  gap-8 items-center px-[3%]' >
              {!projects ? (
                <p>No projects found</p>
              ) : projects?.map((project) => {
                return (
                  <ProjectCard title={project.name} shortdescription={project.shortdescription} role={project.role} image={project.thumbnail} key={project._id} link={`/projects/${project.slug}`} />
                )
              })}
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
  )
}

export default projectSection