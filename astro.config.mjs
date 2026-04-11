import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/** 与 `src/data/site.ts` 的站点域名保持一致，供 sitemap / 绝对 URL 使用 */
const defaultSiteUrl = "https://haoran-guo-home.github.io";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage = repositoryName !== "" && !repositoryName.endsWith(".github.io");

export default defineConfig({
  site: process.env.SITE_URL ?? defaultSiteUrl,
  base: isProjectPage ? `/${repositoryName}` : "/",
  integrations: [sitemap()],
});
