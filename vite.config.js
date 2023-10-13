import { defineConfig } from "vite";
import directoryIndex from "vite-plugin-directory-index";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "index.js",
            name: "ezscmpage",
            formats: ["iife"],
            fileName: () => "index.js"
        }
    },
  plugins: [directoryIndex()],
});