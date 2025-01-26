import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7dkg3jhg',
  dataset :'production',
  apiVersion :'2021-03-25',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_TOKEN ||'skzQnVWgMcMBvj9DFPsVHsk96V0i46UmDhHl7HLLjfmGcrq9LhDpn25ZC4psaDlANBq0qYgZxm3TrNjXfu4VGh2aMaSnM3jgoQIgMrsV4mt3v5kAzsRHeK3QibxmhQKNkILmsjq0thEvPO8eObI6YwBkPoOiOCpKV1NHsq4qWU7Z9XBUQRAd', // Get this from your Sanity dashboard under "API & Tokens"
})
