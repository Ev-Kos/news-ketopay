import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/nytimes-api': {
        target: 'https://api.nytimes.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nytimes-api/, ''),
      }
    }
  },
  plugins: [react()],
})
