import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "http://new.covepolska.pl",
  base: "/",
  integrations: [sitemap()],
  output: "static"
});
