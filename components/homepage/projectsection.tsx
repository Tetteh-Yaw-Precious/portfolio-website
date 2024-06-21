'use client'
import { getProjects } from "@/sanity/sanity-utils"
import ProjectCard from "./projectcard"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

const ProjectSection = () => {
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
    <>
      <div className="w-full md:my-4 my-8 px-[10%] gap-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold md:text-5xl heading-text font-sora text-[#191819] leading-[100%]">My work</h1>
        <p className="md:text-xl text-base text-[#464646]">You might want to brace yourself for this</p>
      </div>

      <Tabs variant='unstyled' className='flex flex-col items-center w-full'>
        <TabList className='flex gap-4 w-full items-center justify-center min-h-[10vh] bg-white'>
          <Tab _selected={{ color: 'red', bg: 'blue.500' }} className='md:px-12 px-6 border-2 md:text-lg bg-[#E5E7E3] text-sm text-[#191819] rounded-full font-sora  md:h-12 h-10 font-medium aria-selected:!bg-[#C9F1A6] aria-selected:border-transparent aria-selected:text-[#191819]'>
            All
          </Tab>
          <Tab _selected={{ color: 'red', bg: 'brand.wblue.100' }} className='md:px-12 px-6 border-2 md:text-lg bg-[#E5E7E3] text-sm text-[#191819] rounded-full font-sora  md:h-12 h-10 font-medium aria-selected:!bg-[#C9F1A6] aria-selected:border-transparent aria-selected:text-[#191819]'>
            Design
          </Tab>
          <Tab _selected={{ color: 'red', bg: 'blue.500' }} className='md:px-12 px-6 border-2 md:text-lg bg-[#E5E7E3] text-sm text-[#191819] rounded-full font-sora  md:h-12 h-10 font-medium aria-selected:!bg-[#C9F1A6] aria-selected:border-transparent aria-selected:text-[#191819]'>
            Frontend Development
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="!p-0">
            <div className="flex flex-col items-center">
              {/** Project Card Component */}
              <div className="flex odd:flex-row-reverse min-h-[100vh] w-full bg-[#E1E4E0]">
                <div className="w-[50%] flex items-center justify-center">
                  <div className="flex flex-col text-[#193129] w-[60%]">
                    <h1 className="font-sora text-4xl">Skinplus Medspa</h1>
                    <p className="leading-[150%]">{`Omni Strategies, a rapidly growing Ghanaian tech company, needed a website that reflected their innovative spirit and catered to their expanding reach. Their existing website lacked intuitiveness and didn't effectively showcase their impressive portfolio.`}</p>
                    <div>
                      <div className="flex gap-4 items-center font-sora mt-4">
                        <a className="cursor-pointer underline font-semibold">View live Project</a>
                        <a className="cursor-pointer underline font-semibold">Read Case Study</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[50%] flex items-center bg-white">
                  <Image src={'/images/skinplus-cover-image.png'} width={1440} height={600} alt='skinplus' />
                </div>
              </div> {/** Project Card Component */}

              <div className="flex odd:flex-row-reverse min-h-[100vh] w-full bg-[#D1F1FF]">
                <div className="w-[50%] flex items-center justify-center">
                  <div className="flex flex-col text-[#003D66] w-[60%]">
                    <h1 className="font-sora text-4xl leading-[150%]">Omni Strategies</h1>
                    <p className="leading-[150%] pt-2">{`Omni Strategies, a rapidly growing Ghanaian tech company, needed a website that reflected their innovative spirit and catered to their expanding reach. Their existing website lacked intuitiveness and didn't effectively showcase their impressive portfolio.`}</p>
                    <div>
                      <div className="flex gap-4 items-center font-sora mt-6">
                        <a className="cursor-pointer underline font-semibold">View live Project</a>
                        <a className="cursor-pointer underline font-semibold">Read Case Study</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[50%] flex items-center">
                  <Image src={'/images/omni-cover-image.png'} width={1440} height={600} alt='skinplus' />
                </div>
              </div>
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



    </>
  )
}

export default ProjectSection