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
      name: "host-app",
      remotes: {
        remote_app: "http://localhost:4567/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom/client"],
    }),
  ],
  preview: {
    port: 3456,
  },
});
