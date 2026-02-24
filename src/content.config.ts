import { z, defineCollection } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        publishedAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        tags: z.array(z.string()).default(["others"]),
        unlisted: z.boolean(),
        slug: z.string().optional(),
        heroImage: z.optional(image()),
    })
})


export const collections = { blog };