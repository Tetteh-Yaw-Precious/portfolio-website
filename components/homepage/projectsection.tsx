'use client'
import { getProjects } from "@/sanity/sanity-utils"
import ProjectCard from "./projectcard"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { motion, useScroll, useTransform } from "framer-motion"

const ProjectSection = () => {
  const [projects, setProjects] = useState<any[]>([]); // Initialize projects as an empty array

  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity: any = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0])
  const scale: any = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const boxShadow = useTransform(scrollYProgress, pos => pos > 0 && pos < 1 ? '11px -2px 94.4px 0px rgba(173, 173, 173, 0.25)' : 'none')
  const backdropFilter = useTransform(scrollYProgress, pos => pos > 0 && pos < 1 ? 'blur(10.45px)' : 'none')

  const position = useTransform(scrollYProgress, (pos) => {
    return pos > 0 && pos < 1 ? 'sticky' : 'block'
  })
  const top = useTransform(scrollYProgress, (pos) => {
    return pos > 0 && pos < 1 ? '0' : 'auto'
  })


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

      <Tabs as='div' variant='unstyled' className='flex flex-col items-center w-full' ref={targetRef}>
        {/*tab container */}
        <motion.div style={{ position, top, width: '100%', zIndex: 4, opacity, boxShadow, backdropFilter }}>
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
        </motion.div>
        <TabPanels>
          <TabPanel className="!p-0">
            <div className="flex flex-col items-center">
              {/** Project Card Component */}
              <div className="flex odd:flex-row-reverse min-h-[100vh] w-full bg-[#E1E4E0">
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
      <section className="h-[90vh] py-[5%] bg-[#F7F7F7]">
        <div className="w-full md:my-4 my-8 px-[10%] gap-8 flex flex-col justify-center">
          <div className="px-[3%]">
            <h1 className="text-2xl font-semibold md:text-5xl heading-text font-sora text-[#191819] leading-[100%] tracking-[-2.5px]">A few of my articles</h1>
            <p className="md:text-xl text-base text-[#464646]">Aside keeping a journal, I enjoy to writing these articles</p>
          </div>
          <div className="grid grid-cols-3 gap-0">
            <div className="flex flex-col gap-4">
              <Image src={'/images/article-1.png'} width={384} height={288} alt='lenis' />
              <div className="px-[5%]">
                <p className="text-[#464646] text-base">{`Jun 21, 2023  |  10 min read`}
                </p>
                <h6 className="font-sora text-xl leading-[120%] font-semibold tracking-[-1.5px]">Learning UI/UX Design as a Complete Newbie: Part 1</h6>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image src={'/images/article-2.png'} width={384} height={288} alt='lenis' />
              <div className="px-[5%]">
                <p className="text-[#464646] text-base">
                  {`Jun 21, 2023  |  10 min read`}
                </p>
                <h6 className="font-sora text-xl leading-[120%] font-semibold tracking-[-1.5px]">Designing Icons for Website Design Project</h6>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image src={'/images/article-3.png'} width={384} height={288} alt='lenis' />
              <div className="px-[5%]">
                <p className="text-[#464646] text-base">{`Jun 21, 2023  |  10 min read`}
                </p>
                <h6 className="font-sora text-xl leading-[120%] font-semibold tracking-[-1.5px]">Learning the importance of Overhead cost as a Product Designer</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[100vh] py-[5%] bg-[#F7F7F7]">
        <div className="w-full md:my-4 my-8 px-[10%] gap-16 flex flex-col items-center justify-center">
          <div className="px-[25%] flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-semibold md:text-5xl heading-text font-sora text-[#191819] leading-[100%] tracking-[-2.5px]">Sharing Knowledge</h1>
            <p className="md:text-xl text-base text-[#464646] leading-[150%] text-center">I’m always looking for ways to get better as a person, get knowledgeable and share what I know.</p>
          </div>
          <div className="grid grid-cols-3 gap-0">
            <div className="flex flex-col gap-4">
              <Image src={'/images/article-1.png'} width={384} height={288} alt='lenis' />
              <div className="px-[5%]">
                <p className="text-[#464646] text-base">{`Jun 21, 2023  |  10 min read`}
                </p>
                <h6 className="font-sora text-xl leading-[120%] font-semibold tracking-[-1.5px]">Learning UI/UX Design as a Complete Newbie: Part 1</h6>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image src={'/images/article-2.png'} width={384} height={288} alt='lenis' />
              <div className="px-[5%]">
                <p className="text-[#464646] text-base">
                  {`Jun 21, 2023  |  10 min read`}
                </p>
                <h6 className="font-sora text-xl leading-[120%] font-semibold tracking-[-1.5px]">Designing Icons for Website Design Project</h6>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image src={'/images/article-3.png'} width={384} height={288} alt='lenis' />
              <div className="px-[5%]">
                <p className="text-[#464646] text-base">{`Jun 21, 2023  |  10 min read`}
                </p>
                <h6 className="font-sora text-xl leading-[120%] font-semibold tracking-[-1.5px]">Learning the importance of Overhead cost as a Product Designer</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectSection