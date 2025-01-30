import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path, { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // resolve the reload button for SPA routing
        main: resolve(root, "index.html"),
        about: resolve(root, "about", "index.html"),
        contact: resolve(root, "contact", "index.html"),
      },
    },
  },
});
