import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components'   : new URL('src/components', import.meta.url).pathname,
      '@src'          : new URL('src', import.meta.url).pathname,
      '@pages'        : new URL('src/pages', import.meta.url).pathname,
      '@auth'         : new URL('src/pages/auth', import.meta.url).pathname,
      '@api'          : new URL('src/api', import.meta.url).pathname,
      '@hooks'        : new URL('src/hooks', import.meta.url).pathname,
      '@styles'        : new URL('src/styles', import.meta.url).pathname,
    },
  },
  plugins: [react()],
})
