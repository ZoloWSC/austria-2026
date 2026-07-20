import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Served from the custom apex domain zolofamilysummer.com, so assets
// live at the site root — base is `/` in every mode. (If you ever drop
// the custom domain and go back to project Pages, set the build base
// back to `/austria-2026/`.)
export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  base: "/",
}))
