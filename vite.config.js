import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173, // Ensure this matches the port you're using
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [react()],
})
