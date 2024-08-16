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
    <div className='flex flex-col items-center md:w-[62.5rem] md:gap-8 gap-4 md:odd:flex-col'>
      <div className="image-ct">
        <Image src={image} width={1000} height={560} alt='project image' />
      </div>
      <div className="flex md:flex-row flex-col justify-center items-start md:gap-10 gap-2 content-ct w-full ">
        <div className="flex flex-col md:gap-4 gap-1 content">
          <div className='flex flex-col gap-1 md:gap-2 '>
            <p className='md:text-2xl text-lg font-semibold !font-outfit w-[100%] leading-none'>{title}</p>
          </div>
        </div>
        <div className='flex flex-col md:gap-2 gap-4  !max-w-[475px]'>
          {/* <p className='!font-clash text-lg  italic'>Role: {role}</p> */}
          <p className='text-gray-700 md:tracking-[-0.5px] tracking-[-0.2px] !leading-[150%] md:text-lg text-base'>
            {shortdescription}
          </p>
          <div className='flex md:gap-2'>
            <div className="flex items-center gap-2 link-ct">
              <a className={`font-semibold text-[#003D66] md:gap-0 border-gray-950 italic  font-outfit ${status == 'Complete' ? 'underline  text-gray-900' : 'cursor-default'} `} href={status === "Complete" ? link : ''}
              >
                {status == "Complete" ? 'Read Case Study' : 'Coming Soon'}
              </a>
              <a href={status === "Complete" ? link : ''} className={`text-lg italic font-medium text-[#003D66] ${status == "Complete" ? 'font-medium underline text-orange-600' : 'font-normal'}  font-outfit`}>

              </a>
            </div>
            <div className="flex items-center gap-2 link-ct">
              <a target="_blank" className={` md:gap-0 font-medium text-[#003D66] border-gray-950  italic  font-outfit ${status == 'Complete' ? 'underline  text-gray-900' : 'cursor-default'} `} href={status === "Complete" ? url : ''}
              >
                {status == "Complete" ? 'View project' : 'Under Development'}
              </a>
              <a href={status === "Complete" ? link : ''} target="_blank" className={`text-lg italic font-medium ${status == "Complete" ? 'font-medium underline text-orange-600' : 'font-normal text-black'} `}>

              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center gap-2 link-ct">
          <a className={`text-gray-950 md:gap-0 px-8 py-3 border-4 rounded-full border-gray-950 font-semibold  font-outfit ${status == 'Complete' ? 'hover:bg-gray-950 hover:text-white' : 'cursor-default'} `} href={status === "Complete" ? link : ''}
          >
            {status == "Complete" ? 'Read Case Study' : 'Coming Soon'}
          </a>
          <a href={status === "Complete" ? link : ''} className={`text-lg font-medium ${status == "Complete" ? 'font-medium underline text-orange-600' : 'font-normal text-black'}  font-outfit`}>

          </a>

        </div> */}
      </div>

    </div>
  )
}

export default ProjectCard