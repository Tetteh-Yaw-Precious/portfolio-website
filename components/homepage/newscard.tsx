import Image from 'next/image'
import React from 'react'
import newsImage from '../../public/images/newsimage.png'
import Link from 'next/link'

const NewsCard = () => {
  return (
    <a href={''} className='hover:cursor-pointer'>
      <div className=' w-[260px] rounded-[8px] flex flex-col gap-4'>
        <div className="image-ct h-[200px] rounded-[8px] relative">
          <Image src={newsImage} alt='' />
          <p className='absolute p-2 text-sm font-outfit bg-white opacity-90 rounded-[8px] text-center left-3 bottom-3 min-w-28 !font-normal'>Brand Design</p>
        </div>
        <div className="flex flex-col gap-1 px-3 content">
          <p className='text-sm italic font-light font-outfit'>December, 12 , 2022</p>
          <p className="font-medium title font-outfit">
            Staying focused & being productive
          </p>
        </div>
      </div>
    </a>
  )
}

export default NewsCard