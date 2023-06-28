import React, { Children } from 'react'
import Image from 'next/image'
import urlFor from '@/library/urlFor'

export const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => <Image src={urlFor(value).url()} className='object-contain py-10' width={1280} height={600} alt='image' />
  },
  block: {
    h1: (({ children }: any) => (
      <h1 className='py-10 text-2xl font-medium font-outfit'>{children}</h1>
    )),
    h2: (({ children }: any) => (
      <h2 className='py-10 text-xl'>{children}</h2>
    )),
    h3: (({ children }: any) => (
      <h1 className='py-10 text-lg'>{children}</h1>
    ))
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },

}
