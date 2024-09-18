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
  status: string,
  teamMembers: Collaborator[]
}

export type Collaborator = {
  member: {
    name: string;
  };
  roleInProject: string;
};


export type TeamMember = {
  _id: string;        // Automatically generated document ID
  name: string;       // Name of the team member
  role: string;       // Role of the team member
  photo: {
    asset: {
      _ref: string;   // Reference to the image asset
      _type: 'reference';
    };
    alt: string;      // Alt text for the photo
  };
};

export type PostType = {
  _id: string,
  _createdAt: string,
  Title: string,
  image: string,
  postLinkSource: string,
  postUrl: String,
  content: PortableTextBlock[]
}