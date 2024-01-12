
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
    <section className='case-study-detail px-[22%] flex flex-col'>
      <div className="image-ct flex items-center justify-center mb-5">
        <Image src={project.image} width={1440} height={700} alt='project image' />
      </div>
      <h1 className='font-clash font-semibold text-4xl mb-6'>Fordavery Mobile App</h1>
      <h1 className='font-clash font-semibold text-xl leading-none mb-3'>About Fordavery</h1>
      <p className='mb-12 text-lg'>Welcomeinapp is a company dedicated to empowering property owners to manage their real estate investment on their terms self-sufficiently.</p>

      <div className='flex gap-12  w-full'>
        <div className='w-[50%]'>
          <h1 className='font-clash font-semibold text-xl leading-none mb-2'>My Role(s)</h1>
          <p className='mb-8 text-lg'>UI/UX Designer, Brand Strategist & designer, Frontend Developer
          </p>
        </div>
        <div>
          <h1 className='font-clash font-semibold text-xl leading-none mb-2'>Project Length</h1>
          <p className='mb-8 text-lg'>December,2022 - November, 2023
          </p>
        </div>

      </div>
      <div className="case-study-content py-[2rem]">
        <PortableText value={project.content} components={myPortableTextComponents} />
      </div>
    </section>
  )
}
