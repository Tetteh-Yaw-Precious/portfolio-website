
import { useEffect } from 'react';
import { groq } from 'next-sanity';
import { getProject } from '@/sanity/sanity-utils';
type props = {
  params: { project: string }
}

export default async function Page({ params }: props) {
  const slug = params.project

  const project = getProject(slug)
  console.log(project)
  return (
    <div>

    </div>
  )
}
