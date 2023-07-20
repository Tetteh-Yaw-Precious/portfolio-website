import React from 'react'

function Herosection() {
  return (
    <section className='xl:h-[42.875rem] hero-background'>
      <div>
        <div className="flex flex-col items-center h-full justify-center content-container py-[8.25rem]  gap-12">
          <h1 className='md:text-8xl text-4xl text-gray-800 font-dgrotesk !px-12 !leading-[75%] text-center font-bold'>Shaping <span className='!underline radial-gradient font-dgrotesk'>Behaviour</span> <br /> through
            Design
          </h1>
          <p className='md:text-xl text-lg text-center !font-normal font-dgrotesk !text-gray-700'>Hello, I’m Yaw Precious a Product Designer from Accra, Ghana 🇬🇭</p>
          <div className='flex flex-col items-center justify-center text-orange-600'>
            <p className='text-lg font-normal text-orange-600 md:text-xl md:h-14 font-dgrotesk'>
              Scroll to explore my work
            </p>
            <svg className='w-8 h-8 stroke-1 animate-bounce' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Herosection;