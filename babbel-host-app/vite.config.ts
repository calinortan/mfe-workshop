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
        remote_app: {
          external: `Promise.resolve(window.microfrontendUrl)`,
          externalType: "promise",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    port: 3456,
  },
});
