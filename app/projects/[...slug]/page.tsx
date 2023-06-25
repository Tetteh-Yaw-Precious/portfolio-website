
'use client'
import { useEffect } from 'react';
import { groq } from 'next-sanity';
import { getProject } from '@/sanity/sanity-utils';
type props = {
  params: { slug: string }
}



export default async function Page({ params }: props) {
  const slug = params.slug
  console.log(slug[0])

  useEffect(() => {
    const project = getProject(slug[0])
    console.log(project)
  }, [])
  // const project = getProject(slug)
  // console.log(project)
  return (
    <div>

    </div>
  )
}
