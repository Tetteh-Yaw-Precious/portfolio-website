//Sanity Utils

import { ProjectType, PostType } from '@/types/ProjectType';
import { createClient } from '@sanity/client';
import { groq } from 'next-sanity';
import clientConfig from './config/client-config';

export async function getProjects(): Promise<ProjectType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && showcase == 'forshowcase']{
      _id,
      name,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      role,
      responsibilities,
      textcolor,
      bgcolor,
      shortdescription,status,
      showcase,
      url,
      projectDate,
      caseStudyReady,
      shipped,
      passwordProtected,
      InDevelopment
    } | order(projectDate asc)`,
    undefined, // Pass undefined for params
    { cache: 'no-store' } // Add cache option to ensure fresh data
  ).then((projects: any[]) =>
    projects.map((project: any) => ({
      ...project,
      year: project.projectDate ? new Date(project.projectDate).getFullYear() : null
    }))
  );
}

export async function getPosts(): Promise<PostType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "posts"] {
  _id,
  title,
  "cover": cover.asset->url,
  postLinkSource,
  postDescription,
  url,
  content[]{
    ...,
    _type == "block" => {
      style,
      children[pt::text(spans[].text)]
    },
    _type == "image" => {
      asset -> {
        _id,
        url
      }
    }
  }
}`
  );
}

export async function getProject(slug: string): Promise<ProjectType> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      aboutInformation,
      role,
      duration,
      "collaborators": collaborators[] {
        "teamMember": teamMembers-> {
          name,
        },
        roleInProject
      },
    
    }`,
    { slug }, // Pass params as the second argument
    { cache: 'no-store' } as const // Pass options as the third argument with type assertion
  );
}

export async function getAllProjectSlugs() {
  // Fetch all project slugs from Sanity
  return createClient(clientConfig).fetch(groq`
    *[_type == "project"]{ slug }
  `);
}
