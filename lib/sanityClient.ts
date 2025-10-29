import { createClient } from "next-sanity";

export const dataset = process.env.SANITY_DATASET!
export const projectId = process.env.SANITY_PROJECT_ID!

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2025-03-04",
  useCdn: false,
});
