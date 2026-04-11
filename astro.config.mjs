import { defineConfig } from "astro/config";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage = repositoryName !== "" && !repositoryName.endsWith(".github.io");

export default defineConfig({
  site: process.env.SITE_URL ?? "https://example.github.io",
  base: isProjectPage ? `/${repositoryName}` : "/",
});
