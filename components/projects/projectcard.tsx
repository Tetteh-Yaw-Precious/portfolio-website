import Image from 'next/image';
import React, { FC } from 'react';
import ProjectImage from 'public/images/projectimage.png';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { PortableText } from '@portabletext/react';

type projectTypes = {
	image?: 'string' | any;
	title?: 'string' | any;
	shortdescription?: 'string' | any;
	link: 'string' | any;
	role: string;
};

const ProjectCard: FC<projectTypes> = ({
	image,
	title,
	shortdescription,
	role,
	link,
	...props
}) => {
	return (
		<div className='flex flex-col gap-4 pb-8 w-full md:odd:flex-col'>
			<div className='border border-red-500 image-ct'>
				<Image
					src={image}
					width={800}
					height={700}
					alt='project image'
				/>
			</div>
			<div className='flex flex-col gap-3 content-ct'>
				<div className='flex flex-col gap-4 content'>
					<div className='w-full'>
						<div className='text-base font-inter font-light lg:w-[31rem] md:w-[100%] leading-[150%]'>
							<p>lkjlkjkl</p>
						</div>
						<p className='text-xl font-semibold font-inter'>
							{title}
						</p>
						<h6 className='font-medium !text-gray-500 text-normal font-inter'>
							Role: {role}
						</h6>
					</div>
				</div>

				<div className='flex gap-2 items-center link-ct'>
					<a
						href={link}
						className='text-base font-light underline font-inter'
					>
						Read Case Study
					</a>
					<ArrowLongRightIcon className='w-6 h-6' />
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
