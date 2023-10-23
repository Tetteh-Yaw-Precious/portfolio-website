
// 'use client'
import { useEffect } from 'react';
import { groq } from 'next-sanity';
import { getProject } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { myPortableTextComponents } from '@/components/projects/richtextcomponents';
type props = {
  params: { slug: string }
}

export default async function Page({ params }: props, name: any) {
  const slug = params.slug
  const project = await getProject(slug[0])

  return (
    <section className='case-study-detail px-[5%] flex flex-col gap-8'>
      <div className="image-ct">
        <Image src={project.image} width={1280} height={600} alt='project image' />
      </div>
      <div className='flex md:flex-row flex-col justify-between w-full border-y min-h-[8.375rem] items-center border-black'>
        <div className="flex-1 h-[4rem] md:px-8 px-0 md:border-r md:border-b-0 border-b md:py-0 py-4 flex items-center md:justify-end justify-start w-full border-black role">
          <div>
            <p className='text-lg font-semibold text-blue-950 font-outfit'>Role</p>
            <div className='text-base font-outfit font-light md:w-[31rem] leading-[150%]'>
              <p >{project.role}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[6rem] md:px-8 px-0 md:py-0 py-4 flex md:items-center  justify-start w-full  role">
          <div>
            <p className='text-lg font-semibold text-blue-950 font-outfit'>Project Duration</p>
            <div className='text-base font-outfit font-light md:w-[31rem] leading-[150%]'>
              <p >{project.duration}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="case-study-content py-[2rem] md:px-[10%] px-[5%]">
        <PortableText value={project.content} components={myPortableTextComponents} />
      </div>
    </section>
  )
}
