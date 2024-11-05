import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 10000,
    coverage: {
      reporter: ["text", "json", "html"],
      all: true,
      include: ["src/**/*.ts"],
      exclude: ["src/scratch.ts", "src/tests/*"],
    },
  },
  esbuild: {
    sourcemap: "both",
  },
});
