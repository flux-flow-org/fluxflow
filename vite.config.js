import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (info) =>
          info.name?.endsWith(".css") ? "assets/index.css" : "assets/[name]-[hash][extname]",
      },
    },
  },
});
