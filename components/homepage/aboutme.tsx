import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const aboutme = () => {
	const impactedClients = [
		'impact-clients-01.png',
		'impact-clients-02.png',
		'impact-clients-03.png',
		'impact-clients-04.png',
		'impact-clients-05.png',
		'impact-clients-06.png',
		'impact-clients-07.png',
	];
	return (
		<div
			className='md:min-h-[70vh] min-h-[80vh] flex flex-col justify-center md:py-0 scroll-smooth'
			id='about'
		>
			<div className='flex items-center justify-center md:px-[20%] px-[10%] md:py-[8rem] py-[2rem]'>
				<div className='flex flex-col-reverse gap-6 md:flex-row md:gap-32'>
					<div className='!leading-[120%] h-full flex justify-center items-center w-full'>
						<p className='md:!text-xl text-base !leading-[190%] md:tracking-[-0.2px] tracking-[-0.2] md:text-left text-center font-inter text-gray-900 !font-normal'>{`
                            Hello! I’m Yaw Precious, a Product Designer crafting intuitive apps and websites that enhance user experiences and streamline business operations. I conduct user research, translate insights into impactful designs, and think in systems—focusing on efficiency in both the teams I collaborate with and the artifacts I produce. In my free time, I enjoy tinkering with frontend technologies, currently exploring AstroJS.
        `}</p>
					</div>
				</div>
			</div>
			<section
				className='impact flex md:flex-row flex-col md:px-[10%] px-none px-none md:gap-15 gap-4'
				style={{
					background:
						'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(25, 24, 25, 0.05) 67.69%, rgba(255, 255, 255, 0.05) 88.32%)',
				}}
			>
				<div className='md:w-[15%] w-full md:pr-[0rem] pr-0 flex md:items-center md:justify-normal justify-center md:bg-none !md:mb-0 md:mt-0  mt-5'>
					<h4 className='font-inter md:text-lg w-full text-base md:text-start text-center font-semibold leading-[120%]'>
						Where I’ve made an impact
					</h4>
				</div>
				<div className='Capitalize md:h-[140px] h-[90px] md:w-[80%] w-full flex items-center'>
					<Marquee speed={100} pauseOnHover={true}>
						{impactedClients.map((item, index) => {
							return (
								<div key={index} className='px-6'>
									<Image
										src={`/images/${item}`}
										alt={'client'}
										width={135}
										height={90}
									/>
								</div>
							);
						})}
					</Marquee>
				</div>
			</section>
		</div>
	);
};

export default aboutme;
