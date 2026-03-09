import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests starting with '/api'
      '/api': {
        target: 'https://api.coingecko.com', // Replace with your actual backend URL
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // Set to true if your backend uses HTTPS
        // Optional: rewrite the path if the API endpoints don't start with /api
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
})
