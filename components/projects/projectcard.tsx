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
}

const ProjectCard: FC<projectTypes> = ({ image, title, shortdescription, link, ...props }) => {
  return (
    <div className='flex flex-col w-full gap-2 pb-5 md:odd:flex-col'>
      <div className="image-ct">
        <Image src={image} width={610} height={560} alt='project image' />
      </div>
      <div className="flex flex-col gap-4 content-ct">
        <div className="flex flex-col gap-2 content">
          <h5 className='text-2xl font-semibold font-sora'>{title}</h5>
          <div className='text-base font-outfit font-light md:w-[31rem] leading-[150%]'>
            <PortableText value={shortdescription} />
          </div>
        </div>

        <div className="flex items-center gap-2 link-ct">
          <Link href={link} className='text-base font-light underline font-outfit'>
            Read Case Study
          </Link>
          <ArrowLongRightIcon className='w-6 h-6' />
        </div>
      </div>

    </div>
  )
}

export default ProjectCard