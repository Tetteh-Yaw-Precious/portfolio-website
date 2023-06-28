import { defineConfig, } from 'sanity'
import { deskTool } from "sanity/desk"
import { project } from './sanity/schemas/project-schemas'
import schemas from './sanity/schemas'
import { visionTool } from '@sanity/vision'
export const config = defineConfig({
  projectId: '3lm8l8o5', // you can find this in sanity.json
  dataset: 'production',
  apiVersion: '2023-05-04',
  basePath: "/admin",
  plugins: [deskTool(),
  visionTool({
    // Note: These are both optional
    defaultApiVersion: 'v2021-10-21',
    defaultDataset: 'production',
  }),],
  schema: { types: schemas },
})