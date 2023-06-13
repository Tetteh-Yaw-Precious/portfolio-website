import Image from 'next/image'
import React from 'react'
import ProjectImage from 'public/images/projectimage.png'
import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const ProjectCard = () => {
  return (
    <div className='flex flex-col items-center gap-12 md:odd:flex-row md:even:flex-row-reverse'>
      <div className="image-ct">
        <Image src={ProjectImage} width={610} height={560} alt='project image' />
      </div>
      <div className="flex flex-col gap-8 content-ct">
        <div className="flex flex-col gap-2 content">
          <h5 className='text-2xl font-semibold font-sora'>Welcome In App</h5>
          <p className='text-base font-outfit font-light leading-[150%]'>An app experience that helps property owners in the United States <br />
            manage their real estate investment on their on terms.</p>
        </div>

        <div className="flex items-center gap-2 link-ct">
          <Link href={'#'} className='text-base font-light underline font-outfit'>
            Read Case Study
          </Link>
          <ArrowLongRightIcon className='w-6 h-6' />
        </div>
      </div>

    </div>
  )
}

export default ProjectCard