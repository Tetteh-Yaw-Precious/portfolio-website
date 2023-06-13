import React from 'react'

function Herosection() {
  return (
    <section className='xl:h-[42.875rem] hero-background'>
      <div className="flex flex-col items-center h-full content-container py-[6.25rem] px-8 gap-12">
        <h1 className='md:text-7xl text-4xl font-sora !leading-[100%] text-center'><span className='radial-gradient font-sora'>Good</span> Design <br />
          tell no tales
        </h1>
        <p className='md:text-xl text-lg text-center !font-extralight font-outfit'>Hello, I’m Yaw Precious a Product Designer from Accra, Ghana 🇬🇭</p>
        <button className='w-56 border-2 md:text-lg text-base text-gray-700 rounded-[8px] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light'>
          Explore my work
        </button>
      </div>
    </section>

  )
}

export default Herosection;