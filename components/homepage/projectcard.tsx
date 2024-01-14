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
  role: string
  status: string
}



const ProjectCard: FC<projectTypes> = ({ image, title, shortdescription, link, role, status, ...props }) => {
  return (
    <div className='flex flex-col items-center w-full gap-12 md:odd:flex-row md:even:flex-row-reverse'>
      <div className="image-ct">
        <Image src={image} width={610} height={560} alt='project image' />
      </div>
      <div className="flex flex-col gap-8 content-ct">
        <div className="flex flex-col gap-4 content">
          <div className='flex flex-col gap-2 '>
            <p className='text-2xl font-semibold font-clash font-outfit'>{title}</p>
            <h6 className='font-semibold font-clash !text-gray-900 text-md font-outfit'> {role}</h6>
          </div>
          <div className='text-md font-outfit !font-normal text-gray-700 md:w-[31rem] !leading-[175%]'>
            <p className='leading-[155%] font-normal'>{shortdescription}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 link-ct">
          <a href={status === "Complete" ? link : ''} className={`text-lg font-medium ${status == "Complete" ? 'font-medium underline text-orange-600' : 'font-normal text-black'}  font-outfit`}>
            {status == "Complete" ? 'Read Case Study' : 'Coming Soon'}
          </a>
          {/* {status === "Complete" ? (<ArrowLongRightIcon className='w-6 h-6 text-black stroke' />) : ''} */}

        </div>
      </div>

    </div>
  )
}

export default ProjectCard