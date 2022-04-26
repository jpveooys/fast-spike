import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // mode: "development",
  build: {
    minify: false,
  },
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: [
            ["decorators", { decoratorsBeforeExport: true }],
            "classProperties",
          ],
        },
      },
    }),
  ],
});
