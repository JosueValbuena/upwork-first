import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import path from "path";
import tailwindcss from '@tailwindcss/vite'
import svgr from '@svgr/rollup';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})