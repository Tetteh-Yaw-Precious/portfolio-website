import { PortableTextBlock } from "sanity"

export type ProjectType = {
  _id: string;
  _createdAt: Date
  name: string
  slug: string
  thumbnail: string
  image: string
  url: string
  shortdescription: string
  content: PortableTextBlock[]
}