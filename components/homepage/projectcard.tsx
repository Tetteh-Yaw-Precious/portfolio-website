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
          <div>
            <p className='text-xl font-semibold font-dgrotesk'>{title}</p>
            <h6 className='font-medium !text-gray-500 text-normal font-dgrotesk'>Role: {role}</h6>
          </div>
          <div className='text-base font-dgrotesk font-light md:w-[31rem] leading-[150%]'>
            <p >{shortdescription}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 link-ct">
          <a href={status === "Complete" ? link : ''} className={`text-base ${status == "Complete" ? 'font-light underline text-orange-600' : 'font-normal text-orange-600'}  font-dgrotesk`}>
            {status == "Complete" ? 'Read Case Study' : 'Coming Soon'}
          </a>
          {status === "Complete" ? (<ArrowLongRightIcon className='w-6 h-6 text-orange-600' />) : ''}

        </div>
      </div>

    </div>
  )
}

export default ProjectCard