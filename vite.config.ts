import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Local network par access ke liye
    port: 5173,       // Default port ya koi bhi port jo aap use kar rahe ho
  },
})
