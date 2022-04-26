import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      context: "this",
      external: [/^react/, /^@microsoft\/fast-/],
    },
  },
});