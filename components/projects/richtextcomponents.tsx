import React, { Children } from 'react';
import Image from 'next/image';
import urlFor from '@/library/urlFor';

export const myPortableTextComponents = {
	types: {
		image: ({ value }: any) => (
			<div className='relative md:max-w-screen-lg mx-auto md:my-10 my-5 last:mb-0'>
				<Image
					src={urlFor(value)?.url() as string}
					alt='image'
					className='object-contain w-full h-auto'
					layout='responsive'
					width={1280} // Adjust as needed
					height={720} // Adjust as needed
					loading='lazy'
				/>
			</div>
		),
	},
	list: {
		bullet: ({ children }: any) => (
			<ul className='ml-10 py-5 list-disc space-y-5 tracking-[0px] md:text-base text-sm font-outfit leading-[175%] md:px-[20%] px-[10%]'>
				{children}
			</ul>
		),
		number: ({ children }: any) => (
			<ol className='ml-10 py-5 list-decimal space-y-5 tracking-[0px] md:text-base text-sm font-outfit leading-[175%] md:px-[20%] px-[10%]'>
				{children}
			</ol>
		),
	},
	block: {
		h1: ({ children }: any) => (
			<h1 className='!pt-10 pb-2 leading-[120%] tracking-[-.5px] md:text-xl text-xl font-semibold font-outfit md:px-[20%] px-[10%]'>
				{children}
			</h1>
		),
		h2: ({ children }: any) => (
			<h2 className='!pt-10 pb-4 leading-[120%] tracking-[-.5px] md:text-2xl text-lg font-semibold font-outfit md:px-[20%] px-[10%]'>
				{children}
			</h2>
		),
		h3: ({ children }: any) => (
			<h3 className='!py-2 leading-[120%] tracking-[-.5px] md:text-xl text-lg font-outfit font-semibold md:px-[20%] px-[10%]'>
				{children}
			</h3>
		),
		h4: ({ children }: any) => (
			<h3 className='!py-2 leading-[120%] tracking-[-.5px] md:text-lg text-md font-outfit font-semibold md:px-[20%] px-[10%]'>
				{children}
			</h3>
		),
		blockquote: ({ children }: any) => (
			<blockquote className='!py-2 leading-[120%] tracking-[0px] md:text-base text-base border-l-4 border-black font-outfit md:px-[20%] px-[10%]'>
				{children}
			</blockquote>
		),
		normal: ({ children }: any) => (
			<p className='!py-2 leading-[175%] tracking-[0px] md:text-base text-sm font-outfit md:px-[20%] px-[10%]'>
				{children}
			</p>
		),
	},

	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined;
			return (
				<a
					href={value.href}
					rel={rel}
					className='underline text-brandblack hover:font-medium hover:text-blue-800 md:px-[20%] px-[10%]'
				>
					{children}
				</a>
			);
		},
	},
};
