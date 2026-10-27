import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Render HTML at build time; DreamHost only needs the client output.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: false,
      failOnError: true,
    },
  },
});
