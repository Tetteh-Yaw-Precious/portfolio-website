import React from 'react';
import { motion } from 'framer-motion';

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
    <motion.section className='xl:h-[88vh] min-h-[100vh] hero-background flex items-center justify-center'>
      <motion.div
        variants={textContainerVariants}
        initial='initial'
        animate='animate'
        className="flex flex-col items-center justify-center h-full gap-12 content-container"
      >
        <motion.h1
          variants={textVariants}
          initial='initial'
          animate='animate'
          className='md:text-9xl text-4xl text-black !leading-[100%] text-center font-semibold font-clash tracking-loose w-[70%]'
        >
          Hi, I am a Product Designer
        </motion.h1>
        <motion.div
          variants={svgVariants}
          initial='initial'
          animate='animate'
          className='flex flex-col items-center justify-center gap-2 text-gray-900 md:gap-0 border-4 p-4 rounded-full border-gray-950'
        >
          <svg className='w-6 h-6 stroke-[2px] md:w-8 md:h-8 animate-bounce' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Herosection;
