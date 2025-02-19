'use client';
import { useRef } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Newprojectcard from './newprojectcard';
import YouTube, { YouTubeProps } from 'react-youtube';
// import Video from 'next-video'
// import awesomeVideo from 'https://youtu.be/95iB0X-R3wI';

const ProjectSection = ({ projects }: any) => {
	const showCaseProjects = projects;

	const onPlayerReady: YouTubeProps['onReady'] = (event) => {
		// access to player in all event handlers via event.target
		event.target.playVideo();
	};

	const opts: YouTubeProps['opts'] = {
		height: '600',
		width: '800',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	const targetRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start start', 'end start'],
	});

	// const gettingPosts = async () => {
	//   try {
	//     const posts: any = await getPosts(); // Assuming getProjects is a function that fetches the project data
	//     return posts;
	//   } catch (error) {
	//     console.log(error);
	//   }
	// };

	const opacity: any = useTransform(
		scrollYProgress,
		[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
	);
	const scale: any = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
	const boxShadow = useTransform(scrollYProgress, (pos) =>
		pos > 0 && pos < 1
			? '11px -2px 94.4px 0px rgba(173, 173, 173, 0.25)'
			: 'none'
	);
	const backdropFilter = useTransform(scrollYProgress, (pos) =>
		pos > 0 && pos < 1 ? 'blur(10.45px)' : 'none'
	);

	const position = useTransform(scrollYProgress, (pos) => {
		return pos > 0 && pos < 1 ? 'sticky' : 'block';
	});
	const top = useTransform(scrollYProgress, (pos) => {
		return pos > 0 && pos < 1 ? '0' : 'auto';
	});

	return (
		<div
			className='flex flex-col items-center md:pt-[7.688rem] pt-[4rem]  md:px-0 px-[10%]'
			id='works'
		>
			<div className='md:w-[60rem] w-full'>
				<h1 className='text-xl font-medium md:text-3xl mb-[2rem] font-inter tracking-[-1px] text-[#191819] leading-[100%]  m-0 p-0'>
					~ Selected Works
				</h1>
			</div>
			<Tabs
				as='div'
				variant='unstyled'
				className='flex flex-col items-center md:max-w-[76rem] w-full'
				ref={targetRef}
			>
				{/*tab container */}
				<motion.div
					style={{
						position,
						top,
						width: '100%',
						zIndex: 4,
						opacity,
						boxShadow,
						backdropFilter,
					}}
				>
					{/* <TabList className='flex md:gap-4 gap-2 w-full items-center justify-center min-h-[10vh] bg-white'>
            <Tab _selected={{ color: 'red', bg: 'blue.500' }} className='md:px-12 px-6 border-2 md:text-lg bg-[#E5E7E3] text-sm text-[#191819] rounded-full font-inter  md:h-12 h-10 font-medium aria-selected:!bg-[#C9F1A6] aria-selected:border-transparent aria-selected:text-[#191819]'>
              All
            </Tab>
            <Tab _selected={{ color: 'red', bg: 'brand.wblue.100' }} className='md:px-12 px-6 border-2 md:text-lg bg-[#E5E7E3] text-sm text-[#191819] rounded-full font-inter  md:h-12 h-10 font-medium aria-selected:!bg-[#C9F1A6] aria-selected:border-transparent aria-selected:text-[#191819]'>
              Design
            </Tab>
            <Tab _selected={{ color: 'red', bg: 'brand.wblue.100' }} className='md:px-12 px-6 border-2 md:text-lg bg-[#E5E7E3] text-sm text-[#191819] rounded-full font-inter  md:h-12 h-10 font-medium aria-selected:!bg-[#C9F1A6] aria-selected:border-transparent aria-selected:text-[#191819]'>
              Frontend Development
            </Tab>
          </TabList> */}
				</motion.div>
				<TabPanels>
					<TabPanel className='!p-0 w-full'>
						<div className='flex flex-col items-center md:gap-[10rem] gap-[1rem]'>
							{showCaseProjects?.map(
								(project: any, index: any) => {
									return (
										<Newprojectcard
											key={index}
											image={project.thumbnail}
											title={project.name}
											projectStatus={project.status}
											projectUrl={project.url}
											description={
												project.shortdescription
											}
											role={project.role}
											background={project.bgcolor}
											textColor={project.textcolor}
											slug={project.slug}
											responsibilities={
												project.responsibilities
											}
											caseStudyReady={
												project.caseStudyReady
											}
											shipped={project.shipped}
											year={project.year}
											InDevelopment={project.InDevelopment}
										/>
									);
								}
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
			{/* <section className="md:min-h-[100vh] py-[5%] bg-[#F7F7F7]">
        <div className="w-full md:my-4 my-8 px-[10%] md:gap-16 gap-8 flex flex-col items-center justify-center">

          <div className="w-full md:my-4 my-8 px-[10%] gap-1 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold md:text-5xl heading-text font-inter tracking-[-1px] text-[#191819] leading-[100%]">My Articles</h1>
            <p className="md:text-xl text-base text-[#464646] leading-[150%] text-center">Aside keeping a journal, I enjoy writing these articles.</p>

          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 !gap-20">
            {posts?.map((post: any, index) => {
              return (
                <div key={index}>
                  <Link href={post.url} target="_blank" className="flex flex-col gap-4 md:gap-6" key={index}>
                    <Image src={post.cover} width={450} height={288} alt='lenis' />
                    <div>
                      <h6 className="font-inter md:text-xl leading-[140%] font-medium md:tracking-[-1.5px] tracking-[-0.5px]">{post.title}</h6>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}

			{/* <section className="md:min-h-[100vh] py-[5%]">
        <div className="w-full md:my-4 my-8 px-[10%] md:gap-16 gap-8 flex flex-col items-center justify-center">
          <div className="md:px-[25%] px-[5%] flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-semibold md:text-5xl heading-text font-inter text-[#191819] leading-[100%] md:tracking-[-2.5px] tracking-[-1.5px]">Sharing Knowledge</h1>
            <p className="md:text-xl text-base text-[#464646] leading-[150%] text-center">I’m always looking for ways to get better as a person, get knowledgeable and share what I know.</p>
          </div>

    
        </div>
        <div className="video-responsive">
          <YouTube videoId='95iB0X-R3wI' opts={opts} onReady={onPlayerReady} />
        </div>
      </section> */}
		</div>
	);
};

export default ProjectSection;
