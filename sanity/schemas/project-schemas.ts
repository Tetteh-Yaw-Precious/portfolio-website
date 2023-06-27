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
      name: "image",
      title: "Project Banner",
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
      name: "thumbnail",
      title: "Thumnail Image",
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
      name: 'projecttype',
      title: 'Project Type',
      type: 'string',
      description: 'Select the type of project',
      options: {
        list: projectType.map(({ title, value }) => ({ title, value })),
        layout: 'radio',
      },
    },
    {
      name: "role",
      title: "Role",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },

    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, {
        type: 'image'
      }]
    }
  ]
}
