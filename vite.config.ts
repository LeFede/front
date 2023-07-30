/// <reference types="vitest" />
/// <reference types="Vite/client" />

import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

const filesNeedToExclude = ['cypress/**', '__test__/**', '.husky/**']
const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url))
})

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@root': resolve(__dirname, '.'),
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      // external: ['cypress/**', '__test__/**', '.husky/**'],
      external: [...filesPathToExclude],
    },
  },
  // exclude: [
  //   'cypress/**',
  //   '__test__/**',
  //   '.husky/**',
  // ],
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
