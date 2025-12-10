import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // Custom frontmatter fields for course content
        day: z.number().optional(),
        week: z.number().optional(),
      }),
    }),
  }),
};
