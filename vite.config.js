import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    open: true,
    host: '0.0.0.0', // Permite conexiones desde cualquier IP
    port: 5173, // Puerto explícito
    strictPort: true, // Evita que Vite cambie el puerto automáticamente
    hmr: {
      clientPort: 5173 // Importante para HMR en dispositivos móviles
    }
  }
})