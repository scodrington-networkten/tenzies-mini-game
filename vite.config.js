import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@assets-images': path.resolve(__dirname, 'src/assets/images'),
      '@css': path.resolve(__dirname, 'src/assets/css'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  }
})
