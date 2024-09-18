//Sanity Utils

import { ProjectType, PostType } from '@/types/ProjectType';
import { createClient } from '@sanity/client';
import { groq } from 'next-sanity';
import clientConfig from './config/client-config';
import { revalidate } from '@/app/page';

export async function getProjects(): Promise<ProjectType[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project" && showcase == 'forshowcase'] | order(orderRank asc) {
      _id,
      name,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      role,
      textcolor,
      bgcolor,
      shortdescription,
      status,
      showcase,
      url,
      orderRank
    }`
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
      role,
      duration,
      "teamMembers": teamMembers[]{
        "member": member->{
          name
        },
        roleInProject
      }
    }`,
		{ slug },
		{ cache: 'no-store' }
	);
}

export async function getAllProjectSlugs() {
	// Fetch all project slugs from Sanity
	return createClient(clientConfig).fetch(groq`
    *[_type == "project"]{ slug }
  `);
}
