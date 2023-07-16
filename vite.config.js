import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/vite-react/',
  }

  if (command !== 'serve') {
    config.base = '/vite-react/'
  }

  return config
})