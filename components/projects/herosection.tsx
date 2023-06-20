import React from 'react'

function Herosection() {
  return (
    <section className='xl:h-[30.875rem] hero-background'>
      <div className="flex flex-col items-center h-full content-container py-[6.25rem] px-8 gap-20">
        <h1 className='md:text-6xl font-medium text-4xl font-sora !leading-[100%] w-[840px] text-center'>
          I love to write about what I know
        </h1>
        <div className='flex gap-4'>
          <button className='w-56 border-2 md:text-lg text-base text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light'>
            Explore my work
          </button>
          <button className='w-56 border-2 md:text-lg text-base text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light'>
            Design
          </button>
          <button className='px-4 border-2 md:text-lg text-base text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light'>
            Frontend Development
          </button>
        </div>
        {/* <p className='md:text-xl text-lg text-center !font-extralight font-outfit'>Hello, I’m Yaw Precious a Product Designer from Accra, Ghana 🇬🇭</p> */}
      </div>
    </section>

  )
}

export default Herosection;