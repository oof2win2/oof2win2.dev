// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const BlogSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.date(),
});

export type BlogSchema = z.infer<typeof BlogSchema>;

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
	type: "content", // v2.5.0 and later
	schema: BlogSchema,
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	blog: blogCollection,
};
