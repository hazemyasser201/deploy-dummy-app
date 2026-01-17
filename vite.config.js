import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'hazem-yasser.francecentral.cloudapp.azure.com'
    ],
    host: true,          // allows external access
    port: 5173,          // keep default (optional)
  }
})
