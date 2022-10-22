import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: { port: 8080 },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    }
  },
  root: 'src',
  plugins: [tsconfigPaths(), viteSingleFile()],
})
