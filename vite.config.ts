import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), preact()],
  resolve: {
    alias: {
      "@": "/src",
      "@/app": "/src/app",
      "@/entities": "/src/entities",
      "@/features": "/src/features",
      "@/pages": "/src/pages",
      "@/processes": "/src/processes",
      "@/shared": "/src/shared",
      "@/widgets": "/src/widgets",
    },
  },
});
