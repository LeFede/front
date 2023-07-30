/// <reference types="vitest" />
/// <reference types="Vite/client" />

import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@root': resolve(__dirname, '.'),
    },
  },
  // exclude: [
  //   'cypress/**',
  //   '__test__/**',
  //   '.husky/**',
  // ],
  build: {
    exclude: ['cypress/**'],
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
