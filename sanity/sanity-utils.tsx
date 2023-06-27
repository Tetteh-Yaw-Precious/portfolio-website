import { ProjectType } from '@/types/ProjectType';
import { createClient } from '@sanity/client'
import { groq } from 'next-sanity'

export async function getProjects(): Promise<ProjectType[]> {
  const client = createClient({
    projectId: '3lm8l8o5',
    dataset: 'production',
    useCdn: false,
    apiVersion: "2022-02-03"
  })

  const result = client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "thumbnail": thumbnail.asset->url,
      url,
      content,
      shortdescription
    }`
  )

  return result;
}

export async function getProject(slug: string): Promise<ProjectType> {
  const client = createClient({
    projectId: '3lm8l8o5',
    dataset: 'production',
    useCdn: false,
    apiVersion: "2022-02-03"
  })

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "thumbnail": image.asset->url,
      url,
      content,
      shortdescription
    }`,
    { slug }
  )

}
