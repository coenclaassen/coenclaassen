import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const curiosity = defineCollection({
  loader: glob({
    base: "./src/content/curiosity",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    name: z.string(),
    title: z.string(),
    subtitle: z.string(),
    summary: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    dateModified: z.coerce.date().optional(),
    website: z.string().url().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { curiosity };
