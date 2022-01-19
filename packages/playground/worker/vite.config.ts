import vueJsx from '@vitejs/plugin-vue-jsx'
import coffee from "rollup-plugin-coffee2";
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: process.env.NODE_ENV === 'production' ? 'chrome60' : 'esnext'
  },
  worker: {
    format: 'es',
    plugins: [
      coffee({
        bare: true,
        sourceMap: true,
      }),
    ]
  },
})
