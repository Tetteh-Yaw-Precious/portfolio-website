import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
// import HeroBackground from '../backgrounds/HeroBackground';

const textContainerVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 1,
      ease: 'easeInOut',
      staggerChildren: 1.2,
    },
  },
};

const textVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
};

const svgVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
};


const impactedClients = [
  'impact-clients-01.png', 'impact-clients-02.png', 'impact-clients-03.png', 'impact-clients-04.png', 'impact-clients-05.png', 'impact-clients-06.png', 'impact-clients-07.png'
]

function Herosection() {
  return (
    <main>
      <div style={{
        backgroundImage: 'url(/images/background.png)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
        <motion.section className='xl:h-[88vh] min-h-[100vh] flex flex-col items-center justify-center bg-none'>
          <motion.div
            variants={textContainerVariants}
            initial='initial'
            animate='animate'
            className="flex flex-col items-center justify-center h-full md:gap-12 gap-8 content-container pt-[8%]"
          >
            <motion.h1
              variants={textVariants}
              initial='initial'
              animate='animate'
              className='md:text-[72px] text-2xl !text-[#011019] md:leading-[120%] leading-[130%] text-center font-light font-sora md:!tracking-[-4px] tracking-[-2px] md:w-[60%] w-[70%]'
            >
              <span className='font-medium'> A Product designer </span>
              bridging the gap between <span className='font-medium'>UX,  Brand design </span> & <span className='font-medium'>Engineering</span></motion.h1>
            <Button className='font-sora font-medium md:text-2xl text-lg md:px-16 px-10 py-8 md:!py-12 rounded-full' style={{
              background: ' linear-gradient(90deg, #66DA00 27%, #E1FBCB 100%)',

            }}>{`Let's talk 👋`}</Button>
            <p className='xl:text-xl px-[10%] xl:px-0 font-normal text-center !text-base text-gray-900'> Scroll to learn more</p>
            <svg className='w-6 h-6 stroke-[2px] md:w-8 md:h-6 animate-bounce text-gray-950' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
            </svg>
            {/* <motion.a
            variants={svgVariants}
            initial='initial'
            animate='animate'
            className='flex flex-row-reverse items-center justify-center gap-2 text-gray-900 md:gap-0 px-8 py-4 border-4 rounded-full border-gray-950'
          >
            <svg className='w-6 h-6 stroke-[2px] md:w-8 md:h-6 animate-bounce text-gray-950' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
            </svg>
            <p className='font-semibold text-lg text-gray-950'>Scroll for more</p>
          </motion.a> */}
          </motion.div>
        </motion.section>
      </div>

      <div className='flex items-center justify-center md:px-[10%] px-[15%] md:py-[8%] py-[10%]'>
        <div className='flex md:flex-row flex-col md:gap-24 gap-6'>
          <div className='md:w-[24%] w-full '>
            <h4 className='font-sora md:text-xl text-lg font-semibold md:mb-3 mb-1'>What I do</h4>
            <ul className='!font-outfit md:text-normal text-sm font-normal space-y-1 ml-5' style={{ listStyleType: 'disc' }}>
              <li className='list-item'>Data driven Design of Apps & Websites</li>
              <li>User & business centered design</li>
              <li>Brand & Product Strategies</li>
              <li>Improving customer experiences</li>
              <li>Helping developers with my engineering expertise</li>
              <li>Thinking of how to make business</li>
            </ul>
          </div>
          <div className='!leading-[120%] h-full flex justify-center items-center md:w-[52%] w-full'>
            <p className='md:!text-2xl text-base !leading-[150%] md:tracking-[-0.5px] tracking-[-0.2] text-left font-outfit text-gray-900 !font-normal'>{
              `
              I have three years of experience as a Product Designer, specializing in research, strategy, UI, brand and business design. I leverage my frontend technology skills to contribute effectively to my teams. I enjoy sharing my knowledge and am currently passionate about data-driven design, building strong teams, and creating cohesive brand experiences.
            `}</p>
          </div>
        </div>
        {/* <hr className='w-[80%] h-0.5 bg-gray-600 rounded-full' /> */}
      </div>
      <section className="impact flex md:flex-row flex-col md:px-[10%] px-none px-none md:gap-15 gap-4" style={{
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(25, 24, 25, 0.05) 67.69%, rgba(255, 255, 255, 0.05) 88.32%)'
      }}>
        <div className='md:w-[12%] w-full md:pr-[4rem] pr-0 flex md:items-center md:justify-normal justify-center md:bg-none bg-white !md:mb-0 !mb-4'>
          <h4 className='font-sora text-lg font-semibold leading-[120%]'>Where I’ve made an impact</h4>
        </div>
        <div className='Capitalize h-[140px] md:w-[80%] w-full flex items-center' >
          <Marquee speed={200} pauseOnHover={false}>
            {impactedClients.map((item, index) => {
              return (
                <div key={index} className='px-6'>
                  <Image src={`/images/${item}`} alt={'client'} width={135} height={100} />
                </div>
              )
            })}
          </Marquee>
        </div>
      </section>
    </main>

  );
}

export default Herosection;
