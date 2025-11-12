import { createClient } from 'next-sanity';

export const dataset = process.env.SANITY_DATASET!;
export const projectId = process.env.SANITY_PROJECT_ID!;

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: 'v2025-11-12',
  useCdn: false,
});
