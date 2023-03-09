import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// const baseUrl = process.env.BASE_URL || '/';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [react()],
  server: {
    port: 5173,
  },
});

// css: {
//   preprocessorOptions: {
//     scss: {
//       additionalData: `@import "./src/scss/app.scss";`,
//     },
//   },
// },
