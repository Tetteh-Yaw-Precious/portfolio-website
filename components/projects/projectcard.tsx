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
  link: 'string' | any,
  role: string
}

const ProjectCard: FC<projectTypes> = ({ image, title, shortdescription, role, link, ...props }) => {
  return (
    <div className='flex flex-col w-full gap-4 pb-8 md:odd:flex-col'>
      <div className="image-ct">
        <Image src={image} width={610} height={560} alt='project image' />
      </div>
      <div className="flex flex-col gap-3 content-ct">
        <div className="flex flex-col gap-4 content">
          <div className='w-full'>
            <p className='text-xl font-semibold font-sora'>{title}</p>
            <h6 className='font-medium !text-gray-500 text-normal font-sora'>Role: {role}</h6>
          </div>
          <div className='text-base font-sora font-light lg:w-[31rem] md:w-[100%] leading-[150%]'>
            <p>{shortdescription}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 link-ct">
          <a href={link} className='text-base font-light underline font-sora'>
            Read Case Study
          </a>
          <ArrowLongRightIcon className='w-6 h-6' />
        </div>
      </div>

    </div>
  )
}

export default ProjectCard