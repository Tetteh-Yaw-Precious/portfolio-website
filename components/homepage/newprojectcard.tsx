import React from 'react';
import Image from 'next/image';
import { Button } from '@chakra-ui/react';

const newprojectcard = ({
	image,
	title,
	description,
	background,
	textColor,
	slug,
	projectStatus,
	projectUrl,
	role,
	responsibilities,
	caseStudyReady,
	shipped,
	passwordProtected,
	InDevelopment,
	year,
}: any) => {
	return (
		<div
			className={`justify-center items-center w-full md:flex md:flex-col gap-[0rem]`}
		>
			<div className='relative'>
				<div className='md:w-[100%] w-full flex-col items-center justify-center'>
					<Image
						src={image}
						width={1200}
						height={600}
						alt='skinplus'
						className='rounded-[2rem]'
					/>
					{year && (
						<div className='absolute top-4 left-4 px-5 py-1 mx-4 text-sm font-medium text-white bg-black rounded-full md:text-xl'>
							{`${year}   |   ${!shipped && InDevelopment ? 'In Development' : 'Shipped'}`}
						</div>
					)}
				</div>
			</div>

			<div className='md:max-w-[54rem] w-full flex items-center md:pt-14 pt-8 pb-12'>
				<div
					className={`flex flex-col md:w-[100%] px-[2%] w-full md:gap-8 gap-4 items-start justify-between !text-gray-900`}
					style={{ color: textColor }}
				>
					{/* Title */}
					<h1 className='font-inter md:text-[2rem] text-base leading-[120%] md:font-semibold font-medium tracking-[-.5px] md:w-[95%] w-full'>
						{title}
					</h1>

					{/* Role and Responsibilities */}
					<div className='md:text-base text-sm text-gray-700 md:flex md:flex-row flex-col gap-5 md:w-[90%] w-full py-1'>
						<div className='w-full md:w-3/6'>
							<p className='leading-[150%] md:text-base font-inter text-sm'>
								<span className='text-sm font-medium font-inter md:text-base'>
									My Role:{' '}
								</span>
								{role}
							</p>
						</div>
						<div>
							<p className='leading-[150%]  md:text-base text-sm'>
								{' '}
								<span className='text-sm font-medium font-inter md:text-base'>
									Duties:
								</span>
								{responsibilities}
							</p>
						</div>
					</div>
					<div className='w-ful'>
						<div className='flex flex-col gap-4 justify-start w-full md:items-center md:flex-row font-inter'>
							{shipped || (InDevelopment && projectUrl) ? (
								<a
									className='px-5 py-2 text-sm font-normal text-center rounded-full border border-black cursor-pointer md:border-2 hover:bg-black md:text-base hover:text-white'
									href={projectUrl}
									target='_blank'
									rel='noreferrer'
								>
									{shipped ? 'View Live Site' : 'View Staging Site'}
								</a>
							) : (
								<span className='px-5 py-2 font-normal text-center text-gray-500 bg-gray-300 rounded-full cursor-not-allowed'>
									Under Development
								</span>
							)}

							{caseStudyReady === true ? (
								<a
									className='px-5 py-2 text-sm font-normal text-center rounded-full border border-black cursor-pointer md:border-2 hover:bg-black md:text-base hover:text-white'
									href={`/projects/${slug}`}
								>
									Read Case Study
								</a>
							) : (
								<span className='px-5 py-2 font-normal text-center text-gray-500 bg-gray-300 rounded-full cursor-not-allowed'>
									Case study coming soon
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default newprojectcard;
