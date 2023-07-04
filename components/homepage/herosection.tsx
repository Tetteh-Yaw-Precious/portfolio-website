import React from 'react'

function Herosection() {
  return (
    <section className='xl:h-[42.875rem] hero-background'>
      <div className="flex flex-col items-center h-full content-container py-[6.25rem] px-8 gap-12">
        <h1 className='md:text-7xl text-4xl font-sora !leading-[100%] text-center'><span className='radial-gradient font-sora'>Good</span> Design <br />
          tell no tales
        </h1>
        <p className='md:text-xl text-lg text-center !font-light font-outfit'>Hello, I’m Yaw Precious a Product Designer from Accra, Ghana 🇬🇭</p>
        <div className='flex flex-col items-center justify-center text-orange-600'>
          <p className='text-base font-light text-orange-600 md:text-lg font-outfit md:h-14'>
            Scroll to explore my work
          </p>
          <svg className='w-8 h-8 stroke-1 animate-bounce' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
          </svg>
        </div>
      </div>
    </section>


  )
}

export default Herosection;