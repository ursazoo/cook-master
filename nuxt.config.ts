// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types'

// const config: NuxtConfig = {
//   // Your Nuxt config
//   buildModules: [
//     '@nuxt/typescript-build',
//   ],
//   plugins: [
//     { src: '~/plugins/pinia.ts', mode: 'client' },
//   ],
// }
// export default defineNuxtConfig(config)

export default defineNuxtConfig({
  title: "Hello Nuxt",
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  plugins: [
    '~/plugins/pinia'
  ],
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:9000",
          changeOrigin: true,
        },
      },
    },
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : [],
    },
  },
  modules: [
    // pinia plugin
    '@pinia/nuxt',
  ],

});
