import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { PaintBrushIcon } from '@heroicons/react/24/outline'// Add this import
import { myTheme } from './theme'
import schemas from './sanity/schemas'
import { structureTool, StructureBuilder } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
// import { StructureBuilder } from 'sanity/desk'

export const config = defineConfig({
  projectId: '3lm8l8o5',
  dataset: 'production',
  apiVersion: '2023-05-04',
  basePath: "/admin",
  plugins: [

    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({ type: 'project', title: 'Projects', S, context }),
            // Orderable list for another schema, e.g., 'article'
            orderableDocumentListDeskItem({
              type: 'post', // Replace with your actual schema type
              title: 'Posts',
              icon: PaintBrushIcon, // Use a different icon if needed
              S,
              context,
            }),
            // Optional configuration
            orderableDocumentListDeskItem({
              type: 'teamMember', // Replace with your actual schema type
              title: 'Team Members',
              icon: PaintBrushIcon, // Use a different icon if needed
              S,
              context,
            }),
            // ... all other desk items
          ])
      },
    })
    ,
    visionTool({
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),
  ],
  schema: { types: schemas }, // Wrap schemas in an object with 'types' property
  theme: myTheme
})