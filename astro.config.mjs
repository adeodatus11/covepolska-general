import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://covepolska.pl",
  base: "/",
  integrations: [sitemap()],
  output: "static"
});
