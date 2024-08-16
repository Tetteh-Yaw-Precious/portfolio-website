import { PortableTextBlock } from "sanity"

export type ProjectType = {
  _id: string;
  _createdAt: Date
  name: string
  slug: string
  thumbnail: string
  image: string
  url: string
  company: string
  aboutInformation: string
  shortdescription: string
  role: string
  duration: string
  content: PortableTextBlock[]
  status: string
}

export type PostType = {
  _id: string,
  _createdAt: string,
  Title: string,
  image: string,
  postLinkSource: string,
  postUrl: String,
  content: PortableTextBlock[]
}