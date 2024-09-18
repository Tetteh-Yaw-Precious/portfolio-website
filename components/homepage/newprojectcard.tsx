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
}: any) => {
	console.log('case:', caseStudyReady);
	return (
		<div
			className={`md:flex md:flex-col items-center justify-center w-full gap-[0rem]`}
		>
			<div>
				<div className='md:w-[100%] w-full flex-col items-center justify-center'>
					<Image
						src={image}
						width={800}
						height={400}
						alt='skinplus'
						className='rounded-[2rem]'
					/>
				</div>
			</div>

			<div className='md:w-[100%] w-full flex items-center md:pt-8 pt-4 pb-12'>
				<div
					className={`flex flex-col md:w-[100%] px-[2%] w-full gap-4 items-start justify-between !text-gray-900`}
					style={{ color: textColor }}
				>
					{/* Title */}
					<h1 className='font-outfit md:text-[1.7rem] text-base leading-[120%] md:font-semibold font-medium tracking-[-.5px] md:w-[95%] w-full'>
						{title}
					</h1>

					{/* Role and Responsibilities */}
					<div className='md:text-base text-sm text-gray-700 md:flex md:flex-row flex-col gap-5 md:w-[90%] w-full italic py-1'>
						<div className='md:w-3/6 w-full'>
							<p className='leading-[150%] italic md:text-base text-sm'>
								<span className='font-outfit font-medium md:text-base text-sm'>
									My Role:{' '}
								</span>
								{role}
							</p>
						</div>
						<div>
							<p className='leading-[150%]  md:text-base text-sm'>
								{' '}
								<span className='font-outfit font-medium md:text-base text-sm'>
									My Responsibilities:
								</span>
								{responsibilities}
							</p>
						</div>
					</div>
					<div className=''>
						<div className='flex gap-4 items-center font-outfit w-full'>
							{/* Case Study Button */}

							{caseStudyReady === true ? (
								<a
									className='cursor-pointer font-normal px-5 py-2 rounded-full md:border-2 border hover:bg-black md:text-base text-sm hover:text-white border-black'
									href={`/projects/${slug}`}
								>
									Explore Case Study
								</a>
							) : (
								<span className='font-normal px-5 py-2 rounded-full bg-gray-300 text-gray-500 cursor-not-allowed'>
									Coming Soon: Full Case Study
								</span>
							)}

							{/* Shipped Button */}
							{shipped ? (
								<a
									className='cursor-pointer font-normal px-5 py-2 rounded-full md:border-2 border hover:bg-black md:text-base text-sm hover:text-white border-black'
									href={projectUrl}
									target='_blank'
									rel='noreferrer'
								>
									View shipped Product 🚀
								</a>
							) : (
								<span className='font-normal px-5 py-2 rounded-full bg-gray-300 text-gray-500 cursor-not-allowed'>
									Under Development
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
