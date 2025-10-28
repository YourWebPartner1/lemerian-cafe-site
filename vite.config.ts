import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Add the correct base for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/lemerian-cafe-site/', // 👈 IMPORTANT
})
