
// 'use client'
import { useEffect } from 'react';
import { groq } from 'next-sanity';
import { getProject } from '@/sanity/sanity-utils';
type props = {
  params: { slug: string }
}



export default async function Page({ params }: props, name: any) {
  const slug = params.slug
  console.log(slug[0])
  const project = await getProject(slug[0])
  console.log(project)

  // useEffect(() => {
  //   console.log(slug[0])
  //   const project = getProject(slug[0])
  //   console.log(project)
  // }, [])

  return (
    <div>
      {project.name}
    </div>
  )
}
