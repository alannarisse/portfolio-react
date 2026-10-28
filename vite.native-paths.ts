import type { PluginOption, UserConfig } from "vite";

// Lovable currently injects vite-tsconfig-paths unconditionally. Replace only
// that plugin while retaining its other plugins, aliases, and build settings.
export async function withNativePaths(config: UserConfig): Promise<UserConfig> {
  async function filterPlugin(option: PluginOption): Promise<PluginOption> {
    const plugin = await option;
    if (Array.isArray(plugin)) return Promise.all(plugin.map(filterPlugin));
    return plugin && plugin.name === "vite-tsconfig-paths" ? false : plugin;
  }

  return {
    ...config,
    resolve: { ...config.resolve, tsconfigPaths: true },
    plugins: await Promise.all((config.plugins ?? []).map(filterPlugin)),
  };
}
