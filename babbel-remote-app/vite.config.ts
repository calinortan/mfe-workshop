import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    target: "esnext",
  },
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    port: 4567,
  },
});
