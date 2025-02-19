import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path, { resolve } from "path";
import { imagetools } from "vite-imagetools";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react(), imagetools()],
  base: "",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    publicDir: "public",
    rollupOptions: {
      input: {
        // resolve the reload button for SPA routing
        main: resolve(root, "index.html"),
        sports: resolve(root, "sports", "index.html"),
        menu: resolve(root, "menu", "index.html"),
        contact: resolve(root, "contact", "index.html"),
      },
    },
  },
});
