import React from 'react'

function Herosection() {
  return (
    <section className='xl:h-[88vh] min-h-[60vh] hero-background flex items-center justify-center'>
      <div>
        <div className="flex flex-col items-center justify-center h-full gap-12 content-container">
          <h1 className='md:text-8xl text-4xl text-black !leading-[100%] text-center font-semibold font-clash tracking-tight w-[70%]'>Hi, I’m Yaw Precious a Product Designer
          </h1>
          <div className='flex flex-col items-center justify-center gap-2 text-gray-900 md:gap-0 border-4 p-4 rounded-full border-gray-950'>
            <svg className='w-6 h-6 stroke-[2px] md:w-8 md:h-8 animate-bounce' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection;