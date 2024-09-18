import { PortableTextBlock } from "sanity"

// Define the TeamMember type based on your team member schema
export type TeamMember = {
  _id: string; // Assuming you have an ID for the team member
  name: string; // Name of the team member
  // Add any other fields from the team member schema as needed
};

// Update the Collaborator type to reflect the correct structure
export type Collaborator = {
  teamMembers: TeamMember; // Reference to the TeamMember type
  roleInProject: string; // Role in the project
};

// Update the ProjectType to include the correct Collaborator type
export type ProjectType = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  thumbnail: string;
  image: string;
  url: string;
  company: string;
  aboutInformation: string;
  shortdescription: string;
  role: string;
  responsibilities: string;
  duration: string;
  content: PortableTextBlock[];
  status: string;
  collaborators: Collaborator[]; // Array of Collaborator type
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