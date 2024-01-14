
'use client'
import { useEffect } from 'react';
import { groq } from 'next-sanity';
import { getProject } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { myPortableTextComponents } from '@/components/projects/richtextcomponents';
import { motion } from 'framer-motion'
type props = {
  params: { slug: string }
}

export default async function Page({ params }: props, name: any) {
  const slug = params.slug
  const project = await getProject(slug[0])

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

  const projectTitle = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 1,
        staggerchildren: .04,
        staggerDirection: 1,
      }
    }
  }

  const letter = {
    initial: {
      y: 100,

    },
    animate: {
      y: 0,
      transition: { ...transition, duration: .25 }
    }
  }

  return (
    <motion.section initial='initial' animate='animate' exit='exit' className='case-study-detail flex flex-col px-[15%]'>
      <motion.div className=' w-full z-20'>
        <motion.div initial={{ width: '47%', height: '50%', x: '40%' }} animate={{ width: '100%', height: '100%', x: '0%', transition: { delay: .1, ...transition } }} className="image-ct flex mb-7">
          <Image src={project.image} width={3842} height={1858} alt='project image' />
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}>

        <motion.div>

          <motion.h1 className='font-clash font-semibold md:text-5xl text-3xl mb-6' variants={projectTitle}>{project.name}</motion.h1>
          <motion.h1 className='font-clash font-semibold md:text-2xl text-xl leading-none mb-3'>About {project.company}</motion.h1>
          <motion.p className='mb-12 md:text-xl text-lg font-light'>{project.shortdescription}</motion.p>
        </motion.div>


        <motion.div className='flex md:flex-row flex-col gap-12 w-full' variants={letter}>
          <div className='md:w-[50%] w-full'>
            <h1 className='font-clash font-semibold md:text-2xl text-xl leading-none mb-2'>My Role(s)</h1>
            <p className='mb-8 md:text-xl text-lg text-gray-700 font-light'>
              {project.role}
            </p>
          </div>
          <div className='md:w-[50%] w-full'>
            <h1 className='font-clash font-semibold md:text-2xl text-x. leading-none mb-2'>Project Length</h1>
            <p className='mb-8 md:text-xl text-lg text-gray-700 font-light'>{project.duration}
            </p>
          </div>

        </motion.div>

        <motion.div className="case-study-content py-[2rem]" variants={letter}>
          <PortableText value={project.content} components={myPortableTextComponents} />
        </motion.div>
      </motion.div>


    </motion.section>
  )
}
