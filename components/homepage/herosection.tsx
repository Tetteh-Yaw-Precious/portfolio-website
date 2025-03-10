'use client';
import React, { useRef } from 'react';
import { animate, delay, motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
// import HeroBackground from '../backgrounds/HeroBackground';

// const textContainerVariants = {
//   initial: {
//     opacity: 0,
//     y: 60,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: .8,
//       duration: 1,
//       ease: 'easeOut',
//       staggerChildren: 1.5,
//       delayChildren: 1.5,
//     },
//   },
// };
// const textVariants = {
//   initial: {
//     y: 75,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       staggerChildren: .5,
//       delay: 0.8,          // Adjusted for better stagger effect
//       duration: 1.5,
//       ease: 'easeIn',
//     },
//   },
// };

const container = {
	initial: { opacity: 0, y: 30 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
			staggerChildren: 0.5,
		},
	},
};

const item = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0, transition: { delay: 1.3, duration: 0.2 } },
};

const gridContainerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 1,
		},
	},
};

// const svgVariants = {
//   initial: {
//     opacity: 0,
//     y: 20,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       ease: 'easeIn',
//     },
//   },
// };

const impactedClients = [
	'impact-clients-01.png',
	'impact-clients-02.png',
	'impact-clients-03.png',
	'impact-clients-04.png',
	'impact-clients-05.png',
	'impact-clients-06.png',
	'impact-clients-07.png',
];

function Herosection() {
	const targetRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', 'end start'],
	});

	const opacity: any = useTransform(scrollYProgress, [0, 10], [1, 0]);
	const scale: any = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

	return (
		<main>
			<motion.div
				style={{
					backgroundImage: 'url(/images/background.png)', // Replace with your image path
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					opacity,
				}}
				ref={targetRef}
				id='home'
			>
				<motion.section className=' xl:min-h-[100vh] md:min-h-[100vh] min-h-[100vh] flex flex-col items-center justify-center bg-none md:pb-[10rem] pb-[5rem]'>
					<motion.div
						variants={gridContainerVariants}
						initial='hidden'
						animate='show'
						className='flex flex-col gap-8 justify-center items-center md:gap-6 content-container'
					>
						<motion.div
							variants={item}
							initial='initial'
							animate='animate'
							className='px-[1rem] py-[.4rem] rounded-full border-2 border-black flex items-center gap-[.5rem]'
							style={{
								borderRadius: '24px',
								border: '1px solid var(--linear-green, #000000)',
							}}
						>
							<motion.svg
								initial={{ scale: 1 }}
								animate={{ scale: [1, 1.2, 1] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								width='15'
								height='15'
								viewBox='0 0 15 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle
									cx='7.5'
									cy='7.5'
									r='6.5'
									fill='url(#paint0_linear_1544_9172)'
									stroke='#CAF5A5'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_1544_9172'
										x1='0.5'
										y1='7.5'
										x2='14.5'
										y2='7.5'
										gradientUnits='userSpaceOnUse'
									>
										<stop
											offset='0.27'
											stopColor='#66DA00'
										/>
										<stop offset='1' stopColor='#E1FBCB' />
									</linearGradient>
								</defs>
							</motion.svg>

							<motion.p
								variants={item}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.6,
									ease: 'easeOut',
								}}
								className='md:text-base text-base italic !text-[#011019] md:leading-[110%] leading-[130%] text-center font-normal font-inter md:!tracking-[-.1px] tracking-[-.2px]'
								style={{
									background:
										'var(--gradient-stroke, linear-gradient(93deg, #000 4.71%, #727272 120.19%))',
									backgroundClip: 'text',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								}}
							>
								{`Open to new opportunities`}
							</motion.p>
						</motion.div>

						<motion.h1
							variants={item}
							initial='initial'
							animate='animate'
							className='md:text-7xl text-2xl !text-[#011019] md:leading-[110%] leading-[130%] text-center md:font-semibold font-medium font-inter md:!tracking-[-2.5px] tracking-[-.5px] md:w-[70%] w-[70%]'
							style={{
								scale: scale,
							}}
						>
							A Product Designer bridging UX, Business Strategy &
							Engineering.
							{/* <span className='font-medium'> UX Research,</span>
							<span className='font-medium'> </span>{' '}
							<span className='font-medium'>
								{' '}
								business strategy & Engineering{' '}
							</span> */}
						</motion.h1>
						<motion.div variants={item}>
							{/* <Button className='font-inter font-medium md:text-2xl text-lg md:px-16 px-10 py-8 md:!py-12 rounded-full' style={{
                background: ' linear-gradient(90deg, #66DA00 27%, #E1FBCB 100%)',
              }}>{`Let's talk 👋`}
              </Button> */}
						</motion.div>
						{/* <motion.p variants={item} className='xl:text-xl px-[10%] xl:px-0 font-normal text-center !text-base text-gray-900'> Scroll to see selected works</motion.p> */}
						<motion.svg
							variants={item}
							className='w-6 h-6 stroke-[2px] md:w-8 md:h-6 animate-bounce text-gray-950'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3'
							/>
						</motion.svg>
					</motion.div>
				</motion.section>
			</motion.div>
		</main>
	);
}

export default Herosection;
