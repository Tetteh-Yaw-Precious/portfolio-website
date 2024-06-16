import React from 'react';
import { motion } from 'framer-motion';
import InfiniteTextScroll from './infiitescroll';
import Marquee from './infiitescroll';

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
    <>
      <motion.section className='xl:h-[88vh] min-h-[90vh] flex flex-col items-center justify-center border-2 border-red-500'>
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
            className='md:text-8xl text-4xl text-black !leading-[100%] text-center font-semibold font-sora tracking-loose w-[70%]'
          >
            Designing Products, Brands & Businesses</motion.h1>
          <p className='italic xl:text-xl px-[10%] xl:px-0 text-center text-lg '> passionately from Accra Ghana 🇬🇭, I’m Yaw Precious</p>
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
      <div className='uppercase h-[200px] flex items-center bg-[#F5FFEC]  text-[#191819]'>
        <Marquee speed={200} pauseOnHover={true}>
          <h1 className='text-3xl px-6 font-sora'>1. People First </h1>
          <h1 className='text-3xl px-6 font-sora'> 2. Data Driven Design</h1>
          <h1 className='text-3xl px-6 font-sora'>3. Strategic Execution </h1>
        </Marquee>
      </div>
    </>

  );
}

export default Herosection;
