import { defineConfig } from "vitest/config";
import { uiConfig } from "@repo/vitest-config/ui";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  ...uiConfig,
  plugins: [tsconfigPaths()],
  test: {
    ...uiConfig.test,
    include: ["tests/node/**/*.test.ts"],
    setupFiles: ["tsconfig-paths/register"],
  },
});
