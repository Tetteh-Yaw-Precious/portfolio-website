import React from 'react'

function Herosection() {
  return (
    <section className='xl:h-[88vh] min-h-[60vh] hero-background flex items-center justify-center'>
      <div>
        <div className="flex flex-col items-center justify-center h-full gap-12 content-container">
          <h1 className='md:text-8xl text-4xl text-gray-800 font-dgrotesk !leading-[75%] text-center font-semibold'>Shaping <span className='!underline radial-gradient font-dgrotesk'>Behaviour</span> <br /> through
            Design
          </h1>
          <p className='md:text-2xl text-lg text-center !font-normal font-dgrotesk !text-gray-600'>Hello, I’m Yaw Precious a Product Designer from Accra, Ghana 🇬🇭</p>
          <div className='flex flex-col items-center justify-center gap-2 text-orange-600 md:gap-0'>
            <p className='text-lg font-normal text-orange-600 md:text-xl md:h-14 font-dgrotesk'>
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