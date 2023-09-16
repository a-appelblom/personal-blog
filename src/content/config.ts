import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    firstPubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    imageCredit: z.string().optional(),
    imageCreditLink: z.string().optional(),
    final: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
