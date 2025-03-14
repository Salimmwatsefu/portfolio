import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you're using absolute imports, add this:
  resolve: {
    alias: {
      '@': '/src' // Adjust based on your folder structure
    }
  }
})