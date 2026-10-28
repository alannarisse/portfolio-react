import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { ConfigEnv } from "vite";
import { withNativePaths } from "./vite.native-paths.ts";

// Render HTML at build time; DreamHost only needs the client output.
const lovableConfig = defineConfig({
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

export default async (env: ConfigEnv) => withNativePaths(await lovableConfig(env));
