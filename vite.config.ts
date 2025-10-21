import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  // GitHub Pages 서브 경로 배포시 활성화
  // base: '/repo-name/',
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
  }
})
