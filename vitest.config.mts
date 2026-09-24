import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const minimumCoverage = { lines: 80, statements: 80, functions: 80, branches: 80 };

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["**/*.test.{ts,tsx}"],
    clearMocks: true,
    coverage: {
      provider: "v8",
      // Also measures application files that no test imports.
      include: ["**/*.{ts,tsx,js,jsx,mts,mjs,cts,cjs}"],
      exclude: [
        "**/node_modules/**", ".next/**", "out/**", "build/**", "coverage/**",
        "**/*.d.ts", "**/*.test.*", "tests/**", "**/*.config.*", "next-env.d.ts",
      ],
      reporter: ["text", "html", "lcov", "json-summary"],
      thresholds: { ...minimumCoverage, perFile: minimumCoverage },
    },
  },
});
