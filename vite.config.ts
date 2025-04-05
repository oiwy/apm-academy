import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), preact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/app": path.resolve(__dirname, "src/app"),
      "@/entities": path.resolve(__dirname, "src/entities"),
      "@/features": path.resolve(__dirname, "src/features"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/processes": path.resolve(__dirname, "src/processes"),
      "@/shared": path.resolve(__dirname, "src/shared"),
      "@/widgets": path.resolve(__dirname, "src/widgets"),
    },
  },
});
