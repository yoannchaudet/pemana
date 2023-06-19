import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pemana/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/*'),
      }
    }
  },

  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
