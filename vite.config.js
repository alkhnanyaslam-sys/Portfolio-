import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ IMPORTANT: change "REPO_NAME" to your exact GitHub repository name.
// If your repo is https://github.com/USERNAME/islam-portfolio
// then base should be "/islam-portfolio/"
export default defineConfig({
  base: "/REPO_NAME/",
  plugins: [react()],
});
