'use client';
import { getProject } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { myPortableTextComponents } from '@/components/projects/richtextcomponents';
import { motion } from 'framer-motion';
import { ProjectType, TeamMember } from '@/types/ProjectType';
import { teamMember } from '@/sanity/schemas/project-schemas';

const ProjectDetailPage = ({ viewProject }: any) => {
	const project: ProjectType = viewProject;
	// console.log(project.collaborators);

	const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

	// const projectTitle = {
	//     initial: {
	//         y: 0,
	//     },
	//     animate: {
	//         y: 0,
	//         transition: {
	//             delayChildren: 1,
	//             staggerchildren: .04,
	//             staggerDirection: 1,
	//         }
	//     }
	// }

	// const letter = {
	//     initial: {
	//         y: 100,

	//     },
	//     animate: {
	//         y: 0,
	//         transition: { ...transition, duration: .25 }
	//     }
	// }

	return (
		<motion.section
			initial='initial'
			animate='animate'
			exit='exit'
			className='case-study-detail flex flex-col items-center justify-center md:px-[10%] px-[5%]'
		>
			<div className='pb-[5%]'>
				<Image
					src={project.image}
					width={1000}
					height={1858}
					alt='project image'
					className='rounded-[2.5rem]'
					priority
				/>
			</div>

			<motion.div
			// initial={{ opacity: 0, scale: 0.5 }}
			// animate={{ opacity: 1, scale: 1 }}
			// transition={{ duration: 1.5 }}
			>
				<div className=''>
					<motion.div className='md:px-[20%] px-[10%]'>
						<motion.h1
							className='mb-3 leading-[120%] tracking-[-.5px] md:text-2xl text-lg font-semibold font-outfit'
							//  variants={projectTitle}
						>
							{project.name}
						</motion.h1>
						<p className='!py-2 leading-[177k%] tracking-[0px] md:text-base text-sm font-outfit'>
							{project.aboutInformation}
						</p>
					</motion.div>
					<motion.div className='md:px-[20%] px-[10%] md:border-y border-y-0 flex md:flex-row flex-col md:gap-0 gap-4 w-full min-h-[7rem] border-gray-700 md:mt-[2rem] mt-[1rem] md:py-[1.5rem] py-0 '>
						<div className='justify-center md:w-1/3 w-full flex flex-col md:gap-1 gap-0.5 h-full'>
							<h5 className='text-lg font-outfit md:font-medium font-semibold p-0 m-0'>
								Duration
							</h5>
							<p className='md:text-base text-sm font-outfit font-normal'>
								{project.duration}
							</p>
						</div>{' '}
						<div className='justify-center md:w-2/3 w-full flex flex-col md:gap-1 gap-0.5'>
							<h5 className='text-lg font-outfit md:font-medium font-semibold p-0 m-0'>
								Team
							</h5>
							<div className='flex flex-col'>
								{project?.collaborators &&
								project.collaborators.length > 0 ? (
									project.collaborators.map(
										(collaborator: any, index: number) => (
											<p
												className='md:text-base text-sm font-outfit font-normal'
												key={index}
											>
												{collaborator.teamMember
													?.name || 'Unknown'}{' '}
												- {collaborator.roleInProject}
											</p>
										)
									)
								) : (
									<p className='md:text-base text-sm font-outfit font-normal'>
										No team members specified
									</p>
								)}
							</div>
						</div>{' '}
						{/* <div className='justify-center md:w-1/3 w-full flex flex-col md:gap-1 gap-0.5 h-full'>
							<h5 className='text-lg font-outfit md:font-medium font-semibold p-0 m-0'>
								My Role(s)
							</h5>
							<p className='md:text-base text-sm font-outfit font-normal'>
								Product & brand design{' '}
							</p>
						</div> */}
					</motion.div>
				</div>
				<motion.div
					className='case-study-content'
					//  variants={letter}
				>
					<PortableText
						value={project.content}
						components={myPortableTextComponents}
					/>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export const revalidate = 1;

export default ProjectDetailPage;
