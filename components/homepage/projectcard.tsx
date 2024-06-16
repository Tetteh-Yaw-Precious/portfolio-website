import Image from 'next/image'
import React, { FC } from 'react'
import ProjectImage from 'public/images/projectimage.png'
import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { PortableText } from '@portabletext/react'

type projectTypes = {
  image?: 'string' | any,
  title?: 'string' | any,
  shortdescription?: 'string' | any
  link: 'string' | any
  url: 'string' | any
  role?: string | any
  status: string
}



const ProjectCard: FC<projectTypes> = ({ image, title, shortdescription, link, role, status, url, ...props }) => {
  return (
    <div className='flex flex-col items-center w-full gap-4 md:odd:flex-col'>
      <div className="image-ct">
        <Image src={image} width={1000} height={560} alt='project image' />
      </div>
      <div className="flex md:flex-row flex-col items-start justify-between md:gap-8 gap-2 content-ct w-full">
        <div className="flex flex-col md:gap-4 gap-1 content">
          <div className='flex flex-col gap-1 md:gap-2 '>
            <p className='md:text-3xl text-xl font-semibold font-sora w-[100%] leading-none'>{title}</p>
          </div>
        </div>
        <div className='flex flex-col md:gap-2 gap-1'>
          <p className='!font-clash text-lg  italic'>Role: {role}</p>
          <div className='flex gap-2'>
            <div className="flex items-center gap-2 link-ct">
              <a className={`text-gray-950 md:gap-0 border-gray-950 italic font-medium  font-sora ${status == 'Complete' ? 'underline  text-[#418607]' : 'cursor-default'} `} href={status === "Complete" ? link : ''}
              >
                {status == "Complete" ? 'Read Case Study' : 'Coming Soon'}
              </a>
              <a href={status === "Complete" ? link : ''} className={`text-lg italic font-medium ${status == "Complete" ? 'font-medium underline text-orange-600' : 'font-normal text-black'}  font-sora`}>

              </a>
            </div>
            <div className="flex items-center gap-2 link-ct">
              <a target="_blank" className={`text-gray-950 md:gap-0 border-gray-950 font-medium italic  font-sora ${status == 'Complete' ? 'underline  text-[#418607]' : 'cursor-default'} `} href={status === "Complete" ? url : ''}
              >
                {status == "Complete" ? 'Live Website' : 'Under Development'}
              </a>
              <a href={status === "Complete" ? link : ''} target="_blank" className={`text-lg italic font-medium ${status == "Complete" ? 'font-medium underline text-orange-600' : 'font-normal text-black'} `}>

              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center gap-2 link-ct">
          <a className={`text-gray-950 md:gap-0 px-8 py-3 border-4 rounded-full border-gray-950 font-semibold  font-sora ${status == 'Complete' ? 'hover:bg-gray-950 hover:text-white' : 'cursor-default'} `} href={status === "Complete" ? link : ''}
          >
            {status == "Complete" ? 'Read Case Study' : 'Coming Soon'}
          </a>
          <a href={status === "Complete" ? link : ''} className={`text-lg font-medium ${status == "Complete" ? 'font-medium underline text-orange-600' : 'font-normal text-black'}  font-sora`}>

          </a>

        </div> */}
      </div>

    </div>
  )
}

export default ProjectCard