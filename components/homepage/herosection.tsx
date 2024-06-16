import React from 'react';
import { motion } from 'framer-motion';
import InfiniteTextScroll from './infiitescroll';
import Marquee from './infiitescroll';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
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
            className="flex flex-col items-center justify-center h-full gap-8 content-container"
          >
            <motion.h1
              variants={textVariants}
              initial='initial'
              animate='animate'
              className='md:text-[64px] text-4xl !text-[#011019] !leading-[120%] text-center font-light font-sora !tracking-[-4px] w-[60%]'
            >
              <span className='font-medium'> A Designer </span>
              bridging the gap between <span className='font-medium'>UX,  Brand, Business design </span> & <span className='font-medium'>Engineering</span></motion.h1>
            <Button className='font-sora italic font-medium text-2xl px-16 !py-12 rounded-full' style={{
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
      {/* <div className='Capitalize h-[200px] flex items-center bg-[#F5FFEC] text-[#191819]'>
        <Marquee speed={200} pauseOnHover={true}>
          <h1 className='text-3xl px-6 font-sora'>1. People First </h1>
          <h1 className='text-3xl px-6 font-sora'> 2. Data Driven Design</h1>
          <h1 className='text-3xl px-6 font-sora'>3. Strategic Execution </h1>
        </Marquee>
      </div> */}

      <div className='flex items-center justify-center flex-col'>
        <div className=' !leading-[120%] h-full flex justify-center items-center px-[22%] py-[8%]'>
          <p className='!text-3xl !leading-[150%]  tracking-[-0.5px] font-outfit text-gray-900 !font-light'>{
            `
              I have three years of experience as a Product Designer, specializing in research, strategy, UI, brand and business design. I leverage my frontend technology skills to contribute effectively to my teams. I enjoy sharing my knowledge and am currently passionate about data-driven design, building strong teams, and creating cohesive brand experiences.
            `}</p>
        </div>
        <hr className='w-[60%] h-0.5 my-0 text-red-500 bg-gray-700 rounded-full' />
      </div>
    </main>

  );
}

export default Herosection;
