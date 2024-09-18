/**
 * Title
 * Slug
 * Role
 * Project Length
 * Rich Text Editor
 */

const projectType = [
  {
    title: 'Product Design', value: 'product-design'
  },
  {
    title: 'Web Design', value: 'web-design'
  },
  {
    title: 'Brand Design', value: 'brand-design'
  },
  {
    title: 'Brand Strategy', value: 'brand-strategy'
  }
]

const ArticleLink = [
  {
    title: 'external link', value: 'link',
  },
  {
    title: 'portfolio Article', value: 'portfolio_article'
  }
]

export const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company Name",
      type: "string",
    },
    {
      name: "aboutInformation",
      title: "About Project",
      type: "string",
    },
    {
      name: "image",
      title: "Project Banner",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "projecttype",
      title: "Project Type",
      type: "string",
      description: "Select the type of project",
      options: {
        list: projectType.map(({ title, value }) => ({ title, value })),
        layout: "radio",
      },
    },
    {
      name: "role",
      title: "My Role",
      type: "string",
    },
    {
      name: "status",
      title: "Project Status",
      type: "string",
    },
    {
      name: "showcase",
      title: "Showcase",
      type: "string",
    },
    {
      name: "shortdescription",
      title: "Short Description",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "bgcolor",
      title: "Background Color",
      type: "string",
    },
    {
      name: "textcolor",
      title: "Text Color",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        {
          type: "image",
        },
      ],
    },
    {
      name: "collaborators",
      title: "Collaborators",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "teamMembers",
              title: "Team Members",
              type: "reference",
              to: [{ type: "teamMember" }],
            },
            {
              name: "roleInProject",
              title: "Role in this Project",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};


export const Post = {
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Post Title",
      type: "string",
    },
    {
      name: "cover",
      title: "Post Cover",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: 'postLinkSource',
      title: 'Post Link Source',
      type: 'string',
      description: 'Select if the url to the post is external',
      options: {
        list: ArticleLink.map(({ title, value }) => ({ title, value })),
        layout: 'radio',
      },
    },
    {
      name: "postDescription",
      title: "Post Description",
      type: "string",
    },
    {
      name: "url",
      title: "Post Url",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{
        type: "block", styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'H5', value: 'h5' },
          { title: 'H6', value: 'h6' },
          { title: 'Quote', value: 'blockquote' }
        ]
      }, {
        type: 'image'
      }]
    }]

}


export const teamMember = {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string"
        }
      ]
    }
  ]
};


