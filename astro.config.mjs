import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  // 1. site 只能写纯域名，末尾不要加子路径
  site: "https://zes-z.github.io",
  
  // 2. 显式指定 GitHub Pages 的二级目录（仓库名），前后都要有斜杠
  base: "/ZesPhotos/",
  
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  prefetch: true,
  vite: {
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});