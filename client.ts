import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '3lm8l8o5', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true,
  apiVersion: "2022-02-03"// `false` if you want to ensure fresh data
})