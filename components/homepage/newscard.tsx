import Image from 'next/image'
import React from 'react'
import newsImage from '../../public/images/newsimage.png'
import Link from 'next/link'

const NewsCard = () => {
  return (
    <Link href={'#'} className='hover:cursor-pointer'>
      <div className='w-[17.5rem] border border-black min-h-[19rem] rounded-[8px] flex flex-col gap-4 items-center py-[10px]'>
        <div className="image-ct w-[260px] h-[200px] rounded-[8px] relative">
          <Image src={newsImage} alt='' />
          <p className='absolute p-2 text-sm font-sora bg-white opacity-90 rounded-[8px] text-center left-3 bottom-3 min-w-28 !font-normal'>Brand Design</p>
        </div>
        <div className="flex flex-col gap-1 px-3 content">
          <p className='text-sm italic font-light font-outfit'>December, 12 , 2022</p>
          <p className="font-medium title font-sora">
            Staying focused & being productive
          </p>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard