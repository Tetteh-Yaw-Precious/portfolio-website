
'use client'
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
    <motion.section initial='initial' animate='animate' exit='exit' className='case-study-detail flex flex-col items-center justify-center md:px-[10%] px-[5%]'>
      <div className='pb-[5%]'>
        <Image src={project.image} width={1000} height={1858} alt='project image' className='rounded-[2.5rem]' />
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}>
        <div className='md:px-[20%] px-[10%]'>
          <motion.div>
            <motion.h1 className='font-outfit font-semibold md:text-2xl text-3xl mb-3 leading-[120%] tracking-[-2.5%]' variants={projectTitle}>{project.name}</motion.h1>
            {/* <motion.h1 className='font-outfit font-semibold md:text-2xl text-xl leading-none mb-3'>About {project.company}</motion.h1> */}
            <motion.p className='mb-12 md:text-normal !text-lg font-normal'>{project.shortdescription}</motion.p>
          </motion.div>
          {/* <motion.div className='flex md:flex-row flex-col gap-8 w-full' variants={letter}>
            <div className='md:w-[50%] w-full'>
              <h1 className='font-outfit font-semibold md:text-2xl text-xl leading-none mb-2'>My Role(s)</h1>
              <p className='md:text-xl !text-lg text-gray-700 font-normal'>
                {project.role}
              </p>
            </div>
            <div className='md:w-[50%] w-full'>
              <h1 className='font-outfit font-semibold md:text-2xl text-xl leading-none mb-2'>Project Length</h1>
              <p className='mb-8 md:text-xl !text-lg text-gray-700 font-normal'>{project.duration}
              </p>
            </div>

          </motion.div> */}
        </div>

        <motion.div className="case-study-content md:px-[20%] px-[10%] pb-[10%]" variants={letter}>
          <PortableText value={project.content} components={myPortableTextComponents} />
        </motion.div>
      </motion.div>


    </motion.section>
  )
}
