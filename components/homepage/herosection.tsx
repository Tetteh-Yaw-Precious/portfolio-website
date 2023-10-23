import React from 'react'

function Herosection() {
  return (
    <section className='xl:h-[88vh] min-h-[60vh] hero-background flex items-center justify-center'>
      <div>
        <div className="flex flex-col items-center justify-center h-full gap-12 content-container">
          <h1 className='md:text-7xl text-4xl text-gray-800 font-outfit !leading-[100%] text-center font-medium'>Plan. <span className='!underline radial-gradient font-outfit'>Design.</span> <br /> Measure. Repeat

          </h1>
          <p className='md:text-lg text-md text-center !font-light font-outfit !text-gray-700 md:mx-[20%] mx-[6%]'>{`Hello, I'm Yaw Precious, well versed across a set of skills, I aid business delight their users through meaningful product`} </p>
          <div className='flex flex-col items-center justify-center gap-2 text-orange-600 md:gap-0'>
            <p className='text-lg font-normal text-orange-600 md:text-xl md:h-14 font-outfit'>
              Scroll to explore my work
            </p>
            <svg className='w-6 h-6 stroke-1 md:w-8 md:h-8 animate-bounce' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Herosection;