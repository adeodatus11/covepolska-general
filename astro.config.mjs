import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: isGitHubPages ? "https://adeodatus11.github.io" : "https://covepolska.pl",
  base: isGitHubPages ? "/covepolska-general" : "/",
  integrations: [sitemap()],
  output: "static"
});
