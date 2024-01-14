import React, { Children } from 'react'
import Image from 'next/image'
import urlFor from '@/library/urlFor'

export const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => <Image src={urlFor(value).url()} className='object-contain py-10' width={1280} height={600} alt='image' />
  },
  block: {
    h1: (({ children }: any) => (
      <h1 className='!pt-10 pb-2 md:text-4xl text-2xl font-semibold font-clash'>{children}</h1>
    )),
    h2: (({ children }: any) => (
      <h2 className='!pt-10 pb-4 md:text-2xl text-lg font-semibold font-clash'>{children}</h2>
    )),
    h3: (({ children }: any) => (
      <h3 className='!py-2 md:text-xl text-lg font-clash font-medium'>{children}</h3>
    )),
    blockquote: (({ children }: any) => (
      <blockquote className='!py-2 !md:text-xl !text-xl b-l-black b-l-4 font-outfit'>{children}</blockquote>
    )),
    p: (({ children }: any) => (
      <p className='!py-2 !md:text-xl !text-xl font-outfit'>{children}</p>
    )),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className='underline text-brandblack hover:font-medium hover:text-blue-800'>
          {children}
        </a>
      )
    },
  },
}
