'use client'
import { client } from '@/client'
import { useEffect } from 'react';
import { groq } from 'next-sanity';


async function getProjects() {
  const res = await client.fetch(groq`*[_title == "Projects"]`)
  return res
}
export default function Page({ params }: { params: { slug: string } }) {

  const data = getProjects()
  useEffect(() => {
    console.log(data)
  }, [data])
  return <div>My Post: {params.slug}</div>
}
