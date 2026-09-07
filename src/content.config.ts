import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const publicationLinksSchema = z.object({
  paper: z.string().url().optional(),
  preprint: z.string().url().optional(),
  code: z.string().url().optional(),
  slides: z.string().url().optional(),
  project: z.string().url().optional(),
  doi: z.string().url().optional(),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    year: z.number().int(),
    category: z.enum(["publication", "working-paper", "work-in-progress"]),
    venue: z.string().optional(),
    status: z.string().optional(),
    abstract: z.string().optional(),
    /**
     * 条目下方圆点列表；若提供 highlight，则以栗色显示奖项名等前缀（字重与说明行一致）。
     */
    bullets: z
      .array(
        z.object({
          text: z.string(),
          highlight: z.string().optional(),
        }),
      )
      .optional(),
    /** 媒体报道等多条外链，展示在条目圆点列表末尾 */
    mediaLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
          tail: z.string().optional(),
        }),
      )
      .optional(),
    links: publicationLinksSchema.optional().default({}),
    featured: z.boolean().optional().default(false),
    hidden: z.boolean().optional().default(false),
  }),
});

export const collections = {
  publications,
};
