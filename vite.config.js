import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  css: {
    // Any CSS processing options if needed
    devSourcemap: true // Makes CSS debugging easier
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-styled-components', { displayName: true }]]
      }
    }),
    svgr()
  ]
})
