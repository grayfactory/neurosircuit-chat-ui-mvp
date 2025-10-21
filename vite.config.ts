import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { writeFileSync } from 'fs'

export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'github-pages-fix',
      closeBundle() {
        // Create .nojekyll file for GitHub Pages
        writeFileSync('dist/.nojekyll', '')
      }
    }
  ],
  // GitHub Pages 서브 경로 배포
  base: '/neurosircuit-chat-ui-mvp/',
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
  }
})
