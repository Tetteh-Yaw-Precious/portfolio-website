import React from 'react'
import ProjectCard from './projectcard'
import NewsCard from './newscard'

const NewsSection = () => {
  return (
    <div className="flex flex-col items-center gap-12 px-8 py-12">
      <div>
        <h2 className="text-3xl md:text-6xl heading-text font-sora"><span className="black-radial-gradient">My</span> NewsLetter</h2>
        <p className='md:text-xl text-lg text-center !font-extralight font-outfit'>I love to share my ideas on a few topics ranging from design & more</p>
      </div>
      <div className="flex gap-4 news-list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <button className='w-56 border-2 md:text-lg text-base text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light'>
        View more
      </button>
    </div>
  )
}

export default NewsSection